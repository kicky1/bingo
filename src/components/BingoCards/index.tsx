"use client"

import { useGetBingoCards } from "~/actions/get-bingocards";
import BingoCard from "./BingoCard";
import { useEffect } from "react";
import { useBingoCheck } from "~/hooks/useBingoCheck";
import { useBingoStore } from "~/zustand/stores/useBingoStore";
import { useToast } from "~/components/ui/use-toast"
import { TBingoCard } from "~/types/bingo.type";
import styles from './index.module.css';
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "~/lib/query";
import { postAddUser } from "~/actions/post-user";

export default function BingoCards(clerkId: any) {
    const { toast } = useToast()
    const { data, isLoading } = useGetBingoCards(clerkId.clerkId);
    const { user } = useUser();
    const queryClient = getQueryClient();
    const isBingo = useBingoStore((state) => state.isBingo);
   
    const mutation = useMutation({
        mutationFn: async () => {
            return postAddUser({user})
        },
        onSuccess: () => {
           setTimeout(() => {
            queryClient.invalidateQueries({queryKey: ['bingocards-data']})
           },500)
        }
    })

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


    if (isLoading) return <div className={styles.container}>Loading...</div>;

    if (!data) return (
        <>
            <div className={styles.container}>
                <p className="text-3xl font-medium">Witaj nowy kosowniku!</p>
                <p className="text-xl font-light text-slate-400">Aby rozpocząć rozgrywkę naciśnij na przycisk i wygeneruj bingo</p>
                <Button className="mt-6" onClick={() => mutation.mutate()}>Generuj</Button>    
            </div>
        </>
    )

    return (
        <>
            <div className={styles.cardgrid}>
                {data?.map((card: TBingoCard) => (
                    <div key={card.id} className="h-auto">
                        <BingoCard card={card}  />
                    </div>
                ))}
            </div>
        </>
    );
}
