"use client";

import { useMutation } from "@tanstack/react-query";
import api from "~/utils/api";
import { getQueryClient } from "~/lib/query";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { TBingoCard } from "~/types/bingo.type";
import { memo } from "react";

function BingoCard({ card }: { card: TBingoCard }) {
    const queryClient = getQueryClient()

    const mutation = useMutation({
        mutationFn: (card: TBingoCard) => {
          return api.post('/bingoCards', JSON.stringify({ id: card.id, checked: !card.checked }))
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['bingocards-data']})
        }
    })
  
    return (
        <>
            <Card
                onClick={() => mutation.mutate(card)}  
                key={card?.id}
                className={cn(card?.checked ? 'bg-green-300 border-green-600 hover:bg-green-700 hover:text-white' : 'bg-white hover:bg-slate-200', " h-full flex items-center justify-center border-2  p-4 break-words  cursor-pointer")}
            >
                <p className="text-center">{card?.name}</p>
            </Card>
        </>
    );
}

export default memo(BingoCard);
