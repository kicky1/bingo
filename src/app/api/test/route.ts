import { NextResponse } from "next/server";



export async function GET(request: Request) {
    return NextResponse.json('Test response from /api/test/route.ts');
}

