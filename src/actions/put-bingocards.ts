import { TBingoCard } from "~/types/bingo.type"
import api from "~/utils/api"

export const putBingoCards = async (card: TBingoCard): Promise<TBingoCard[]> => {
  const data = api.put(
    '/bingoCards', 
    JSON.stringify({ id: card.id, checked: !card.checked })
  )
  return data as unknown as TBingoCard[]
}

