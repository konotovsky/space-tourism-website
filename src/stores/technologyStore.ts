import { create } from "zustand";

interface Technology {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}

interface TechnologyState {
  technologys: Technology[];
  activeIndex: number;
  setTechnologys: (crew: Technology[]) => void;
  setActiveIndex: (index: number) => void;
}

export const useTechnologyStore = create<TechnologyState>((set) => ({
  technologys: [],
  activeIndex: 0,
  setTechnologys: (technologys) => set({ technologys }),
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
