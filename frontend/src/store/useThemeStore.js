import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("matefy-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("matefy-theme", theme);
    set({ theme });
  },
}));
