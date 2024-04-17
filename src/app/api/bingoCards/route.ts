import { NextResponse } from "next/server";
import { getBingoCards, putBingoCard } from "~/server/queries";

export async function PUT(request: Request) {
    const { id, checked } = await request.json();
    await putBingoCard({ id, checked });
    return NextResponse.json({ success: true });
}

export async function GET(request: Request) {
    const data = await getBingoCards();
    return NextResponse.json(data);
}