import { create } from "zustand";

const useCreateVenueStore = create((set) => ({
  createVenueModal: false,
  updateVenue: null,

  setCreateVenueModalOn: () => set({ createVenueModal: true }),
  setCreateVenueModalOff: () => set({ createVenueModal: false }),
  setUpdateVenue: (venue) => set({ updateVenue: venue }),
  clearUpdateVenue: () => set({ updateVenue: null }),
}));

export default useCreateVenueStore;
