import { create } from "zustand";

// Define the store
const useVenueStore = create((set) => ({
  mediaUrls: [],
  topRated: [],
  venues: [],
  addVenues: (newVenues) =>
    set((state) => ({ venues: [...state.venues, ...newVenues] })),
  setMediaUrls: (urls) => set({ mediaUrls: urls }),
  setTopRated: (venue) => set({ topRated: venue }),
}));

export default useVenueStore;
