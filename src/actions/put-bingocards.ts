import api from "~/utils/api"

export const putBingoCards = async (card: any): Promise<any> => {
  const data = api.put('/bingoCards', JSON.stringify({ id: card.id, checked: !card.checked }))
  return data
}

