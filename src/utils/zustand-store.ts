import create from "zustand";

interface Store {
  burger: boolean;
  setBurger: (bool: boolean) => void;
}

export const useMyStore = create<Store>((set) => ({
  burger: true,
  setBurger: (bool) => set(() => ({ burger: bool })),
}));
