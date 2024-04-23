"use server"

import { db } from "~/server/db"
import { profileInfo } from "./db/schema";
import { eq, asc } from "drizzle-orm";

export async function postBingoCard({ bingoCards, user}: { bingoCards: string[], user: any}) {
    const data = await db.update(profileInfo)
    .set({ bingoCards })
    .where(eq(profileInfo.clerkId, user.id));
    return data
}

export async function postAddUser({user}: { user: any}) {
    const data = await db.insert(profileInfo)
    .values({ clerkId: user.id, username: user.username, avatar: user.imageUrl });
    return data
}

export async function getBingoCards(clerkId: string) {
    const data = await db.query.profileInfo.findMany(
        {
            where: (profileInfo, { eq }) => eq(profileInfo.clerkId, clerkId),
            orderBy: [asc(profileInfo.id)]
        }
    )
    const bingoCards = data.map(profileInfo => profileInfo.bingoCards);

    return bingoCards
}

export async function getUsers() {
    const data = await db.query.profileInfo.findMany(
        {
            orderBy: [asc(profileInfo.id)]
        }
    )
    return data
}