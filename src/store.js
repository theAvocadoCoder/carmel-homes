import { create } from "zustand";

const useStore = create((set) => ({
  copiedToClipBoard: "hidden",
  showPopUp: () => set({ copiedToClipBoard: "block" }),
  hidePopUp: () => set({ copiedToClipBoard: "hidden" })
}))

export default useStore;