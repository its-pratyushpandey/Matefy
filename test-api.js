#!/usr/bin/env node

// Test script for Matefy backend API endpoints
// Run with: node test-api.js

import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:5001/api';

// Test data
const testUser = {
  fullName: 'Test User',
  email: 'test@example.com',
  password: 'password123'
};

let authCookie = '';

async function testEndpoint(name, url, options = {}) {
  try {
    console.log(`\n🧪 Testing: ${name}`);
    console.log(`📡 ${options.method || 'GET'} ${url}`);
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': authCookie,
        ...options.headers
      },
      ...options
    });

    const data = await response.text();
    
    if (response.ok) {
      console.log(`✅ Status: ${response.status}`);
      console.log(`📄 Response: ${data.substring(0, 200)}${data.length > 200 ? '...' : ''}`);
    } else {
      console.log(`❌ Status: ${response.status}`);
      console.log(`📄 Error: ${data}`);
    }

    // Store cookies for authentication
    const cookies = response.headers.get('set-cookie');
    if (cookies) {
      authCookie = cookies;
    }

    return response.ok;
  } catch (error) {
    console.log(`💥 Error: ${error.message}`);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Starting Matefy API Tests\n');
  console.log('=' * 50);

  // Test server health
  await testEndpoint('Server Health Check', `${BASE_URL}/auth/me`);

  // Test user registration
  await testEndpoint('User Registration', `${BASE_URL}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(testUser)
  });

  // Test user login
  const loginSuccess = await testEndpoint('User Login', `${BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: testUser.email,
      password: testUser.password
    })
  });

  if (loginSuccess) {
    // Test friends endpoints
    await testEndpoint('Get My Friends', `${BASE_URL}/users/friends`);
    await testEndpoint('Get Recommended Users', `${BASE_URL}/users`);
    await testEndpoint('Get Friend Requests', `${BASE_URL}/users/friend-requests`);
    await testEndpoint('Get Outgoing Friend Requests', `${BASE_URL}/users/outgoing-friend-requests`);
  }

  console.log('\n' + '=' * 50);
  console.log('🏁 API Tests Complete');
}

// Check if node-fetch is available
try {
  runTests();
} catch (error) {
  console.log('❌ Error: node-fetch not found. Please install it with:');
  console.log('npm install node-fetch');
}
