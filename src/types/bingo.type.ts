export type TUser = {
  id: number;
  clerkId: string;
  bingoCards: TBingoCard[];
  username: string;
  avatar: string;
  wins: TWinsArray[];
};

export type TBingoCard = {
  id: number;
  name: string;
  checked: boolean;
};

export type TWinsArray = {
  win: string;
  date: string;
};
