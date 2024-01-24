import { create } from "zustand";

const useModalStateStore = create((set) => ({
  modalStateLogin: false,
  setModalStateLogin: (newState) => set({ modalStateLogin: newState }),
  modalStateRegister: false,
  setModalStateRegister: (newState) => set({ modalStateRegister: newState }),
}));

export default useModalStateStore;
