import { TBingoCard } from "~/types/bingo.type";
import api from "~/utils/api"

type Props = {
  updatedBingoCardsData: TBingoCard[];
  user: any;
}

export const postBingoCards = async ({updatedBingoCardsData, user}: Props) => {
    api.post('/bingocards', JSON.stringify({ bingoCards: updatedBingoCardsData, user: user}))
  }
