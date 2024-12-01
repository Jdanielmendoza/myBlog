"use server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const fetchedPosts =await prisma.post.findMany();
        console.log(fetchedPosts);
        return NextResponse.json(fetchedPosts);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
      const { titulo, content, authorId } = await request.json(); // Parsear el cuerpo de la solicitud
      console.log({ "nuevo post :": { titulo, content, authorId } });
      const newPost = await prisma.post.create({
        data: {
          title:titulo,
          content,
          authorId,
        },
      });
  
      return NextResponse.json(newPost);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to create post" },
        { status: 500 }
      );
    }
  }
  