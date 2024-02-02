import { create } from "zustand";

const useSearchModalStore = create((set) => ({
  searchState: false,
  setSearchStateOn: () => set({ searchState: true }),
  setSearchStateOff: () => set({ searchState: false }),
}));

export default useSearchModalStore;
