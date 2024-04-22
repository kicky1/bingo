"use client"

import { useGetUsersChoice } from "~/actions/get-bingocards";
import BingoCard from "./BingoCard";
import { useEffect } from "react";
import { useBingoCheck } from "~/hooks/useBingoCheck";
import { useBingoStore } from "~/zustand/stores/useBingoStore";
import { useToast } from "~/components/ui/use-toast"
import { TBingoCard } from "~/types/bingo.type";

export default function BingoCards(clerkId: any) {
    const { data, isLoading } = useGetUsersChoice(clerkId);
    
    const isBingo = useBingoStore((state) => state.isBingo);
    const { toast } = useToast()

    useEffect(() => {
        useBingoCheck(data);
    }, [data]);
    
    useEffect(() => {
        if (isBingo) {
            toast({
                title: "Bingo!",
                description: "You have a bingo!",
                variant: "success"
            });
        }
    }, [isBingo])


    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <div className="grid grid-cols-4 gap-4 auto-rows-fr max-w-4xl">
                {data?.map((card: TBingoCard) => (
                    <div key={card.id} className="h-auto">
                        <BingoCard card={card}  />
                    </div>
                ))}
            </div>
        </>
    );
}
