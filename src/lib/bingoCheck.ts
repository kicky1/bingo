import { setIsBingo } from "~/zustand/stores/useBingoStore";

export const bingoCheck = ( cards: any) => {
    const bingoPatterns = [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16],
                [1, 5, 9, 13],
                [2, 6, 10, 14],
                [3, 7, 11, 15],
                [4, 8, 12, 16],
                [1, 6, 11, 16],
                [4, 7, 10, 13]
            ];

    const isBingoPattern = bingoPatterns.some(pattern => {
        return pattern.every(id => cards?.some((card: any) => card?.id === id && card?.checked));
    });

    setIsBingo(isBingoPattern);
}
