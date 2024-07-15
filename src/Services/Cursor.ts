import { create } from 'zustand'; // import { create } from "zustand";

type storeData = {
  hovered: boolean;
  setHovered: () => void;
  setNotHovered: () => void;
};

const useCursor = create<storeData>()((set) => ({
  hovered: false,
  setHovered: () => set({ hovered: true }),
  setNotHovered: () => set({ hovered: false }),
}));

export default useCursor;
