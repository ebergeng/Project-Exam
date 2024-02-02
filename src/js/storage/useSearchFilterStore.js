import { create } from "zustand";

// Define the store
const useSearchFilterStore = create((set) => ({
  filter: {
    from: "",
    to: "",
    where: "",
    guests: 1,
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
    filterIsOpen: false,
  },
  setOpenFilter: () =>
    set((state) => ({
      filter: { ...state.filter, filterIsOpen: !state.filter.filterIsOpen },
    })),
  setDateFrom: (date) =>
    set((state) => ({
      filter: { ...state.filter, from: date },
    })),
  setDateTo: (date) =>
    set((state) => ({
      filter: { ...state.filter, to: date },
    })),

  setSearchWord: (searchWorld) =>
    set((state) => ({
      filter: { ...state.filter, where: searchWorld },
    })),

  toggleFilterOption: (option) =>
    set((state) => ({
      filter: {
        ...state.filter,
        [option]: !state.filter[option],
      },
    })),
  addGuest: () =>
    set((state) => ({
      filter: {
        ...state.filter,
        guests: state.filter.guests < 100 ? state.filter.guests + 1 : 100,
      },
    })),
  removeGuest: () =>
    set((state) => ({
      filter: {
        ...state.filter,
        guests: state.filter.guests > 1 ? state.filter.guests - 1 : 1,
      },
    })),
  resetFilter: () =>
    set(() => ({
      filter: {
        from: "",
        to: "",
        where: "",
        guests: 1,
        wifi: false,
        parking: false,
        breakfast: false,
        pets: false,
        filterIsOpen: false,
      },
    })),
}));

export default useSearchFilterStore;
