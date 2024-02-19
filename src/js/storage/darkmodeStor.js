import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useDarkModeStore = create(
  persist(
    (set) => ({
      darkMode: true,
      setDarkMode: (newState) => set({ darkMode: newState }),
    }),
    {
      name: "darkMode",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useDarkModeStore;
