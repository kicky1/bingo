import { useQuery } from "@tanstack/react-query";
import api from "~/utils/api";

const getUser = async (clerkId: string): Promise<any> => {
  const { data } = await api.get(`/user/${clerkId}`);
  return data;
};

export const useGetUser = (clerkId: string) => {
  return useQuery({
    queryKey: ["user-data"],
    queryFn: () => getUser(clerkId),
  });
};
