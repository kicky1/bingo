"use client";

import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "~/lib/query";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { TBingoCard } from "~/types/bingo.type";
import { memo } from "react";
import { postBingoCards } from "~/actions/post-bingocards";
import { useUser } from "@clerk/nextjs";

function BingoCard({ card }: { card: TBingoCard }) {
    const { user } = useUser();
    const queryClient = getQueryClient()

    const mutation = useMutation({
        mutationFn: (card: TBingoCard) => {
            
            const [...bingoCardsData] = queryClient.getQueryData(['bingocards-data']) as TBingoCard[];
            const updatedBingoCardsData = bingoCardsData.map((item) => {
                if (item.name === card.name) {
                    return { ...item, checked: !item.checked };
                }
                return item; 
            });  
            return postBingoCards({updatedBingoCardsData, user})
        },
        onSuccess: () => {
            setTimeout(() => queryClient.invalidateQueries({queryKey: ['bingocards-data']}), 100)
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
