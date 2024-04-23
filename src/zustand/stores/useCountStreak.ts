import { TWinsArray } from "~/types/bingo.type";

export const useCountStreak = (dates: TWinsArray[]) => {
    const today = new Date().getTime();
    let streak = 0;

    dates = dates.reverse()
    for (let i = dates.length - 1; i >= 0; i--) {
        const date = new Date((dates[i]?.date as string))
        console.log(date)
       console.log(today - date.getTime())
        if (today - date.getTime() < 86400000) {
            streak++;
        } 
    }
    return streak;
};
