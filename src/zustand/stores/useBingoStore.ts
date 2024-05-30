import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type BingoStoreState = {
  isBingo: boolean;
  setIsBingo: (flag: boolean) => void;
  isWin: boolean;
  setIsWin: (flag: boolean) => void;
};

export const useBingoStore = create<BingoStoreState>()(
  immer((set) => ({
    isBingo: false,
    setIsBingo: (flag) => {
      set((state) => {
        state.isBingo = flag;
      });
    },
    isWin: false,
    setIsWin: (flag) => {
      set((state) => {
        state.isWin = flag;
      });
    },
  })),
);

export const { setIsBingo, isWin, setIsWin, isBingo } =
  useBingoStore.getState();
