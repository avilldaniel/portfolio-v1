import create from "zustand";

interface Store {
  // Burger
  burger: boolean;
  setBurger: (bool: boolean) => void;

  // Theme
  theme: string;
  setTheme: (aTheme: string) => void;
}

export const useMyStore = create<Store>((set) => ({
  // Burger
  burger: true,
  setBurger: (bool) => set(() => ({ burger: bool })),

  // Theme
  theme: "dark",
  // theme: "light",
  setTheme: (aTheme) => set(() => ({ theme: aTheme })),
}));
