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
      name: "profile",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useProfileStore;
