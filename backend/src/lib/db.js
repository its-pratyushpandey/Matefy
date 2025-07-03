import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Set mongoose options for better connection handling (updated for latest mongoose)
    const mongoOptions = {
      serverSelectionTimeoutMS: 10000, // Timeout after 10s
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 5,
      retryWrites: true,
      w: 'majority'
    };

    const conn = await mongoose.connect(process.env.MONGO_URI, mongoOptions);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📂 Database: ${conn.connection.name}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('📤 MongoDB disconnected');
    });

    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('📤 MongoDB connection closed due to app termination');
      process.exit(0);
    });

  } catch (error) {
    console.log("❌ Error in connecting to MongoDB", error.message);
    
    // Provide specific error handling for common issues
    if (error.message.includes('IP')) {
      console.log("🔒 IP WHITELIST ISSUE DETECTED");
      console.log("   - Current IP: Add 152.56.135.140 to your Atlas IP whitelist");
      console.log("   - Or temporarily allow 0.0.0.0/0 (anywhere) for testing");
    }
    
    if (error.message.includes('authentication failed')) {
      console.log("🔑 AUTHENTICATION ISSUE DETECTED");
      console.log("   - Check your database username and password in MONGO_URI");
    }
    
    if (error.message.includes('buffermaxentries')) {
      console.log("⚙️  MONGOOSE CONFIGURATION ISSUE DETECTED");
      console.log("   - Updating to latest mongoose configuration...");
    }
    
    console.log("\n🔧 MONGODB CONNECTION TROUBLESHOOTING:");
    console.log("1. Check your MongoDB Atlas IP whitelist");
    console.log("   - Current IP: Add 152.56.135.140 to your Atlas IP whitelist");
    console.log("   - Or temporarily allow 0.0.0.0/0 (anywhere) for testing");
    console.log("2. Verify your MONGO_URI in .env file");
    console.log("3. Ensure your MongoDB cluster is running");
    console.log("4. Check your database username and password");
    console.log("\n📋 QUICK FIX STEPS:");
    console.log("1. Go to https://cloud.mongodb.com/");
    console.log("2. Navigate to Network Access");
    console.log("3. Click 'Add IP Address'");
    console.log("4. Add your current IP or use 0.0.0.0/0 for testing");
    console.log("\n🚀 Server will continue running but database features will not work.");
    
    // Don't exit the process, let the server continue
    // process.exit(1); // 1 means failure
  }
};
