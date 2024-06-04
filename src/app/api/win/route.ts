import { NextResponse } from "next/server";
import { postWin } from "~/server/queries";

export async function POST(request: Request) {
  const { date, user } = await request.json();
  const response = await postWin({ date, user });
  return NextResponse.json(response);
}
