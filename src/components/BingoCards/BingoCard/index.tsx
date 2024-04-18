"use client";

import { useMutation } from "@tanstack/react-query";
import api from "~/utils/api";
import { getQueryClient } from "~/lib/query";
import { Card, CardHeader } from "~/components/ui/card";

export default function BingoCard({card} : any) {
    const queryClient = getQueryClient()

    const mutation = useMutation({
        mutationFn: (card: any) => {
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
                style={{backgroundColor: card?.checked ? 'green' : 'white'}}
                key={card?.id}
            >
                <CardHeader>
                    {card?.name}
                </CardHeader>
            </Card>
        </>
    );
}
