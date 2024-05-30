import { useGetDate } from "~/hooks/useGetDate";
import { TBingoCard } from "~/types/bingo.type";
import api from "~/utils/api";

type Props = {
  user: any;
};

export const postWin = async ({ user }: Props) => {
  const date = useGetDate();
  await api.post("/win", JSON.stringify({ date: date, user: user }));
};
