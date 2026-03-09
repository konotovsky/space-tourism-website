import { create } from "zustand";

interface Crew {
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
}

interface CrewState {
  crew: Crew[];
  activeIndex: number;
  setCrew: (crew: Crew[]) => void;
  setActiveIndex: (index: number) => void;
}

export const useCrewStore = create<CrewState>((set) => ({
  crew: [],
  activeIndex: 0,
  setCrew: (crew) => set({ crew }),
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
