import { create } from "zustand";

const useCreateVenueStore = create((set) => ({
  createVenueModal: false,

  setCreateVenueModalOn: () => set({ createVenueModal: true }),
  setCreateVenueModalOff: () => set({ createVenueModal: false }),
}));

export default useCreateVenueStore;
