import { useGetDate } from "~/hooks/useGetDate";
import { getQueryClient } from "~/lib/query";
import api from "~/utils/api";

type Props = {
  user: any;
};

export const postWin = async ({ user }: Props) => {
  const date = useGetDate();
  const queryClient = getQueryClient();
  await api.post("/win", JSON.stringify({ date: date, user: user })).then((res) => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  });
};
