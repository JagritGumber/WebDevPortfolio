"use client";

import { create } from "zustand";

type ModalStore = {
  count: number;
  inc: () => void;
  dec: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
  dec: () => set((s) => ({ count: Math.max(0, s.count - 1) })),
}));
