import { create } from "zustand";

const useManagerStateStore = create((set) => ({
  managerState: false,
  setManagerState: (newState) => set({ managerState: newState }),
}));

export default useManagerStateStore;
