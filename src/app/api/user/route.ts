import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const fetchedUsers = await prisma.user.findMany();
    return NextResponse.json(fetchedUsers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
      const body = await request.json();
      const { name, email } = body;

      const newUser = await prisma.user.create({
          data: { name, email },
      });

      return NextResponse.json(newUser);
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

