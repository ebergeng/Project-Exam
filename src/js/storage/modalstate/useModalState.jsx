import { create } from "zustand";

const useModalStateStore = create((set) => ({
  modalStateLogin: false,
  setModalStateLogin: (newState) => set({ modalStateLogin: newState }),
  modalStateMenu: false,
  setModalStateMenu: (newState) => set({ modalStateMenu: newState }),
  modalStateRegister: false,
  setModalStateRegister: (newState) => set({ modalStateRegister: newState }),
  isClosing: false,
  setIsClosing: (newState) => set({ isClosing: newState }),
}));

export default useModalStateStore;
