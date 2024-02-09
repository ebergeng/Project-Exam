import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useDarkModeStore = create(
  persist(
    (set) => ({
      darkMode: true,
      setDarkMode: (newState) => set({ darkMode: newState }),
    }),
    {
      name: "darkMode", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useDarkModeStore;
