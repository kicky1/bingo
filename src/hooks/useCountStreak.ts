import { TWinsArray } from "~/types/bingo.type";

export const useCountStreak = (dates: TWinsArray[]) => {
  if (!dates || dates.length === 0) {
    return 0;
  }

  dates.sort(
    (a, b) => new Date(a as any).getTime() - new Date(b as any).getTime(),
  );

  const today = new Date().getTime();
  let streak = 0;

  for (let i = dates.length - 1; i >= 0; i--) {
    const date = new Date(dates[i] as any).getTime();
    if (today - date <= 86400000 * (streak + 1)) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};
