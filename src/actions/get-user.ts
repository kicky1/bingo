import { useQuery } from "@tanstack/react-query"
import api from "~/utils/api"


const getUsers = async (): Promise<any[]> => {
  const { data } = await api.get(`/user`);
    return data
  }

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users-data'],
    queryFn: () => getUsers(),
  })
}