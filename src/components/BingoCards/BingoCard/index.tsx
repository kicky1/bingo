"use client";

import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "~/lib/query";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { TBingoCard } from "~/types/bingo.type";
import { memo } from "react";
import { postBingoCards } from "~/actions/post-bingocards";
import { useUser } from "@clerk/nextjs";

import styles from './index.module.css';

function BingoCard({ card }: { card: TBingoCard }) {
    const { user } = useUser();
    const queryClient = getQueryClient()
    
    const prepareUpdatedBingoCardsData = () => {
        const previousBingoCardsData = queryClient.getQueryData(['bingocards-data']) as TBingoCard[];
        const updatedBingoCardsData = previousBingoCardsData.map((item) => {
            if (item.name === card.name) {
                return { ...item, checked: !item.checked };
            }
            return item; 
        });  
        return updatedBingoCardsData;
    }

    const mutation = useMutation({
        mutationFn: async (card: TBingoCard) => {
            await queryClient.cancelQueries({ queryKey: ['bingocards-data'] });
            const updatedBingoCardsData = prepareUpdatedBingoCardsData();
            queryClient.setQueryData(['bingocards-data'], (old: any) => updatedBingoCardsData);
            postBingoCards({updatedBingoCardsData, user})
            return {updatedBingoCardsData}
        },
        onError: (error: Error, variables: TBingoCard, context: { previousBingoCardsData: TBingoCard[] } | undefined) => {
            if (context) {
                queryClient.setQueryData(['bingocards-data'], context.previousBingoCardsData);
            }
        },
        onSettled: () => {
            setTimeout(() => queryClient.invalidateQueries({queryKey: ['bingocards-data']}), 500)
        }
    })
  
    return (
        <>
            <Card
                onClick={() => mutation.mutate(card)}  
                key={card?.id}
                className={cn(card?.checked ? styles.greencard : styles.whitecard , styles.card)}
            >
                <p className="text-center">{card?.name}</p>
            </Card>
        </>
    );
}

export default memo(BingoCard);
