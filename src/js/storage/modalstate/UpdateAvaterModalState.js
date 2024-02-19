import { create } from "zustand";

const useUpdateAvaterModalState = create((set) => ({
  updateAvatarModal: false,
  avaterUrl: "",

  setAvatarUrl: (url) => set({ avaterUrl: url }),
  setUpdateAvatarModalOn: () => set({ updateAvatarModal: true }),
  setUpdateAvatarModalOff: () => set({ updateAvatarModal: false }),
}));

export default useUpdateAvaterModalState;
