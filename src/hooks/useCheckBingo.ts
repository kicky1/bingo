'use client';
import { useState, useEffect } from 'react';

export function useBingoCheck(cards: any) {
    const [isBingo, setIsBingo] = useState(false);

    
    setIsBingo(true)
    // useEffect(() => {
    //     // Bingo patterns to check
    //     const bingoPatterns = [
    //         [1, 2, 3, 4],
    //         [5, 6, 7, 8],
    //         [9, 10, 11, 12],
    //         [13, 14, 15, 16],
    //         [1, 5, 9, 13],
    //         [2, 6, 10, 14],
    //         [3, 7, 11, 15],
    //         [4, 8, 12, 16],
    //         [1, 6, 11, 16],
    //         [4, 7, 10, 13]
    //     ];

    //     // Check each bingo pattern
    //     const isBingoPattern = bingoPatterns.some(pattern => {
    //         return pattern.every(id => cards?.some((card: any) => card?.id === id && card?.checked));
    //     });

    //     // Update the state with the bingo condition
    //     setIsBingo(isBingoPattern);
    // }, [cards]);

    return true;
}
