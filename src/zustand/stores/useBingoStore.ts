import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type BingoStoreState = {
  isBingo: boolean;
  setIsBingo: (flag: boolean) => void;
 
};

export const useBingoStore = create<BingoStoreState>()(
  immer((set) => ({
    isBingo: false,
    setIsBingo: (flag) => {
      set((state) => {
        state.isBingo = flag;
      });
    },
    
  }))
);

export const {
    setIsBingo,
    isBingo,
} = useBingoStore.getState();