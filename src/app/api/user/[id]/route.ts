import { NextResponse } from "next/server";
import { getUser } from "~/server/queries";


export async function GET(request: Request) {
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];
    const data = await getUser(id);
    return NextResponse.json(data);
}

