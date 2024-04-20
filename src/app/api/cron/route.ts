import { NextResponse } from "next/server";

export default function GET(request: Request) {
    NextResponse.json({ success: true });
  }