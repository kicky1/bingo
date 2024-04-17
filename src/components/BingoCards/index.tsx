"use client";

import { useGetUsersChoice } from "~/actions/get-bingocards";
import BingoCard from "./BingoCard";

export default function BingoCards() {
    const {data, isLoading} = useGetUsersChoice()
   
    if (isLoading) return <div>Loading...</div>

    return (
        <>
            {data.map((card: any) => (
                <BingoCard card={card} key={card.id} />
            ))}
        </>
    );
}
