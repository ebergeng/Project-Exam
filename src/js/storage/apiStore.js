import { create } from "zustand";

// Define the store
const useVenueStore = create((set) => ({
  dispayFilterdVenues: false,
  mediaUrls: [],
  venues: [],
  singleVenue: [],
  filter: {
    wifi: false,
    parking: false,
    petts: false,
    breakfast: false,
  },
  filterdVenues: [],
  searchFilterdVenues: [],
  addVenues: (newVenues) =>
    set((state) => ({ venues: [...state.venues, ...newVenues] })),
  setMediaUrls: (urls) => set({ mediaUrls: urls }),
  setFilter: (filter) => set({ filter: filter }),
  addFilterVenues: (filterdVenues) => set({ filterdVenues: filterdVenues }),
  addSearchFilterdVenues: (filterdVenues) =>
    set({ searchFilterdVenues: filterdVenues }),
  setDispayFilterdVenues: () =>
    set((state) => ({
      dispayFilterdVenues: state.filterdVenues.length > 0 ? true : false,
    })),
  setSingleVenue: (venue) => set({ singleVenue: venue }),
}));

export default useVenueStore;
