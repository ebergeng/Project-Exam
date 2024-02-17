import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useProfileStore = create(
  persist(
    (set) => ({
      profile: {},
      setProfileVenues: (venues) =>
        set((state) => ({ profile: { ...state.profile, venues: venues } })),
      setBookingHistory: (venue) =>
        set((state) => ({
          profile: {
            ...state.profile,
            bookingHistory: [...state.profile.bookingHistory, venue],
          },
        })),
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
