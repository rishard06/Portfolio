import { create } from "zustand";

export const useCursorStore = create((set) => ({
  size: 20,
  updateCursorSize: (newSize) => set({ size: newSize }),
  resetCursorSize: (size) => set({ size: 20 }),
}))