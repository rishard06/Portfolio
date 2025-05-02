import { create } from "zustand";

export const useCursorStore = create((set) => ({
  size: 20,
  updateCursorSize: (size) => set({ size }),
  resetCursorSize: () => set({ size: 20 }),
}))