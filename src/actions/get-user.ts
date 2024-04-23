import { useQuery } from "@tanstack/react-query"
import api from "~/utils/api"


const getUser = async (clerkId: any): Promise<any> => {
const { data } = await api.get(`/user/${clerkId}`);
  return data
}

export const useGetUser = (clerkId: any) => {
  return useQuery({
    queryKey: ['user-data'],
    queryFn: () => getUser(clerkId.clerkId.clerkId),
  })
}

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