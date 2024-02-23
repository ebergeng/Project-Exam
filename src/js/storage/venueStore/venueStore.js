import { create } from "zustand";

const useVenueStore = create((set) => ({
  dispayFilterdVenues: false,
  mediaUrls: [],
  venues: [],
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
}));

export default useVenueStore;
