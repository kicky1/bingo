import { useQuery } from "@tanstack/react-query";
import { TUser } from "~/types/bingo.type";
import api from "~/utils/api";

const getUsers = async (): Promise<TUser[]> => {
  const { data } = await api.get(`/user`);
  return data;
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users-data"],
    queryFn: () => getUsers(),
  });
};
