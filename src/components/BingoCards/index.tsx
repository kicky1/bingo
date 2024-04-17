"use client";

import { useMutation } from "@tanstack/react-query";
import { Card, CardHeader } from "../ui/card";
import api from "~/utils/api";
import { getQueryClient } from "~/lib/query";
import { useGetUsersChoice } from "~/actions/get-bingocards";

export const dynamic ="force-dynamic";

export default function BingoCards() {
    const queryClient = getQueryClient()

    const {data, isLoading} = useGetUsersChoice()

    const mutation = useMutation({
        mutationFn: (card: any) => {
          return api.put('/bingoCards', JSON.stringify({ id: card.id, checked: !card.checked }))
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['bingocards-data']})
        }
    })

    if (isLoading) return <div>Loading...</div>
 
    console.log(data)   

    return (
        <>
            {data?.map((card: any) => (
                <Card
                    onClick={() => mutation.mutate(card)}  
                    style={{backgroundColor: card?.checked ? 'green' : 'slate'}}
                    key={card?.id}
                >
                    <CardHeader>
                        {card?.name}
                    </CardHeader>
                </Card>
            ))}
        </>
    );
}
