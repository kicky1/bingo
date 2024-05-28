import { NextResponse } from "next/server";
import { getBingoCards, postBingoCard } from "~/server/queries";

export async function POST(request: Request) {
    const { bingoCards, user } = await request.json();
    await postBingoCard({ bingoCards, user});
    return NextResponse.json({ success: true });
}

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const clerkId = searchParams.get("clerkId");
    const data = await getBingoCards(clerkId as string);
    return NextResponse.json(data);
}