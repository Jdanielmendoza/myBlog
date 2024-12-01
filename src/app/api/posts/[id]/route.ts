import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request : Request) {
    try {
        const {params} = await request.json();
        console.log(params);
        const fetchedPosts = await prisma.post.findFirst({
            where:{
                id : 14
            }
        }); 
        return NextResponse.json(fetchedPosts); 
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to create post" },
            { status: 500 }
          );
    }
}