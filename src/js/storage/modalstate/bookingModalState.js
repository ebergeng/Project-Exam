import { create } from "zustand";

const useBookingModalStore = create((set) => ({
  bookingModal: false,
  venue: {
    venueName: "",
    dateFrom: "",
    dateTo: "",
  },

  setVenue: (venueName, from, to) =>
    set({
      venue: {
        venueName: venueName,
        dateFrom: from,
        dateTo: to,
      },
    }),
  setBookingModalOn: () => set({ bookingModal: true }),
  setBookingModalOff: () => set({ bookingModal: false }),
}));

export default useBookingModalStore;
