import { create } from "zustand";

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
    resultOpen: false,
    filterText: "",
  },
  setFilterText: () =>
    set((state) => ({
      filter: {
        ...state.filter,
        filterText: [
          state.filter.wifi ? "wifi, " : null,
          state.filter.parking ? "parking, " : null,
          state.filter.pets ? "pets, " : null,
          state.filter.breakfast ? "breakfast, " : null,
          state.filter.guests > 1
            ? `Min guest: ${state.filter.guests}, `
            : null,
          state.filter.where ? state.filter.where : null,
        ],
      },
    })),

  setOpenFilter: () =>
    set((state) => ({
      filter: { ...state.filter, filterIsOpen: !state.filter.filterIsOpen },
    })),
  setResultOpen: () =>
    set((state) => ({
      filter: { ...state.filter, resultOpen: !state.filter.resultOpen },
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
