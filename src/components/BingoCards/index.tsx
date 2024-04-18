"use client"

import { useGetUsersChoice } from "~/actions/get-bingocards";
import BingoCard from "./BingoCard";
import { useEffect } from "react";
import { bingoCheck } from "~/lib/bingoCheck";
import { useBingoStore } from "~/zustand/stores/useBingoStore";
import { useToast } from "~/components/ui/use-toast"
import { Button } from "../ui/button";


export default function BingoCards() {
    const { data, isLoading } = useGetUsersChoice();
    const isBingo = useBingoStore((state) => state.isBingo);
    const { toast } = useToast()


    
    useEffect(() => {
        bingoCheck(data);
    }, [data]);

   
    useEffect(() => {
        console.log(isBingo)
        if (isBingo) {
            toast({
                title: "Bingo!",
                description: "You have a bingo!",
                variant: "default"
            });
        }
    }, [isBingo])


    if (isLoading) return <div>Loading...</div>;



    return (
        <>
            {data.map((card: any) => (
                <BingoCard card={card} key={card.id} />
            ))}
        </>
    );
}
