import { useQuery } from "@tanstack/react-query"
import { TBingoCard } from "~/types/bingo.type"
import api from "~/utils/api"


const getBingoCards = async (clerkId: string): Promise<TBingoCard[]> => {
  const { data } = await api.get(`/cards`, { params: { clerkId } });
    return data[0]
  }

export const useGetBingoCards = (clerkId: string) => {
  return useQuery({
    queryKey: ['bingocards-data'],
    queryFn: () => getBingoCards(clerkId),
  })
}