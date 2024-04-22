import api from "~/utils/api"


export const postBingoCards = async ({updatedBingoCardsData, user}: any) => {
    api.post('/bingoCards', JSON.stringify({ bingoCards: updatedBingoCardsData, user: user}))
  }
