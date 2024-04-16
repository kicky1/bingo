import "server-only"
import { db } from "~/server/db"

export async function getBingoCards() {
    const bingoCards = await db.query.bingoCards.findMany();
    return bingoCards
}