"use server"

import { db } from "~/server/db"
import { bingoCards } from "./db/schema";
import { NotNull, eq, asc } from "drizzle-orm";
import { PgSerialBuilderInitial } from "drizzle-orm/pg-core";

export async function putBingoCard({ id, checked }: { id:  NotNull<PgSerialBuilderInitial<"id">>, checked: boolean }) {
    const data = await db.update(bingoCards)
    .set({ checked })
    .where(eq(bingoCards.id, id as any));
    return data
}

export async function getBingoCards() {
    const data = (await db.query.bingoCards.findMany({ orderBy: [asc(bingoCards.id)]}
    ));
    return data
}