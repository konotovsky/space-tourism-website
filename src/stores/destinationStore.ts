import { create } from "zustand";

interface Destination {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}

interface DestinationState {
  destinations: Destination[];
  activeIndex: number;
  setDestinations: (destinations: Destination[]) => void;
  setActiveIndex: (index: number) => void;
}

export const useDestinationStore = create<DestinationState>((set) => ({
  destinations: [],
  activeIndex: 0,
  setDestinations: (destinations) => set({ destinations }),
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
