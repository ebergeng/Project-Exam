import { create } from "zustand";

// Define the store
const useVenueStore = create((set) => ({
  dispayFilterdVenues: false,
  mediaUrls: [],
  topRated: [],
  venues: [],
  filter: {
    wifi: false,
    parking: false,
    petts: false,
    breakfast: false,
  },
  filterdVenues: [],
  addVenues: (newVenues) =>
    set((state) => ({ venues: [...state.venues, ...newVenues] })),
  setMediaUrls: (urls) => set({ mediaUrls: urls }),
  setTopRated: (venue) => set({ topRated: venue }),
  setFilter: (filter) => set({ filter: filter }),
  addFilterVenues: (filterdVenues) => set({ filterdVenues: filterdVenues }),
  setDispayFilterdVenues: () =>
    set((state) => ({
      dispayFilterdVenues: state.filterdVenues.length > 0 ? true : false,
    })),
}));

export default useVenueStore;
