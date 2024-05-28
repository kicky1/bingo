import { NextResponse } from "next/server";
import { getBingoCards, postBingoCard } from "~/server/queries";

export async function POST(request: Request) {
    const { bingoCards, user } = await request.json();
    await postBingoCard({ bingoCards, user});
    return NextResponse.json({ success: true });
}

export async function GET(request: Request) {
    const clerkId = 'user_2h74BFFngVGb3GT2ZwVs3Vr7xM5';
    const data = await getBingoCards(clerkId);
    return NextResponse.json(data);
}