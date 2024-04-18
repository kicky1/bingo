import { useQuery } from "@tanstack/react-query"
import { TBingoCard } from "~/types/bingo.type"
import api from "~/utils/api"


const getBingoCards = async (): Promise<TBingoCard[]> => {
    const { data } = await api.get('/bingoCards')
    return data
  }

export const useGetUsersChoice = () => {
  return useQuery({
    queryKey: ['bingocards-data'],
    queryFn: getBingoCards,
  })
}