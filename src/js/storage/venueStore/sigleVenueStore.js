import { create } from "zustand";

const useSingleVenueStore = create((set) => ({
  singleVenue: [],
  error: null,
  setSingleVenue: (venue) => set(() => ({ singleVenue: venue })),
  clearSingleVenue: () => set(() => ({ singleVenue: [], error: null })),
  setError: (error) => set(() => ({ error })),
}));

export default useSingleVenueStore;
