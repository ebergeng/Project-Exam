import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: state.isOpen ? false : true })),
}));

export default useModalStore;
