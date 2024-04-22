import { useQuery } from "@tanstack/react-query"
import { TBingoCard } from "~/types/bingo.type"
import api from "~/utils/api"


const getBingoCards = async (clerkId: any): Promise<TBingoCard[]> => {
  const { data } = await api.get(`/bingoCards/`, { params: { clerkId } });
    return data[0]
  }

export const useGetUsersChoice = (clerkId: any) => {
  return useQuery({
    queryKey: ['bingocards-data'],
    queryFn: () => getBingoCards(clerkId.clerkId),
  })
}