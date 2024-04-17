import { useQuery } from "@tanstack/react-query"
import api from "~/utils/api"


const getBingoCards = async (): Promise<any> => {
    const { data } = await api.get('/bingoCards')
    return data
  }

export const useGetUsersChoice = () => {
  return useQuery({
    queryKey: ['bingocards-data'],
    queryFn: getBingoCards,
  })
}