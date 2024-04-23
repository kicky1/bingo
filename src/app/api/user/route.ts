import { NextResponse } from "next/server";
import { getUsers, postAddUser } from "~/server/queries";


export async function GET(request: Request) {
    const data = await getUsers();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const { user } = await request.json();
    await postAddUser({ user});
    return NextResponse.json({ success: true });
}
