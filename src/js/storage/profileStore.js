import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useProfileStore = create(
  persist(
    (set) => ({
      profile: {},
      setProfile: (profileData) =>
        set({
          profile: profileData,
        }),
      clearProfile: () => set({ profile: {} }),
    }),

    {
      name: "profile", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useProfileStore;
