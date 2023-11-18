import { NextResponse} from "next/server";
import prisma from "@/app/Libs/prisma";


export async function GET() {
  const data = await prisma.task.findMany();
  return NextResponse.json(data);
}

export async function POST(request) {
    const {title, description} = await request.json()
    const newTask = await prisma.task.create({data:{
        title, description
    }})
  return NextResponse.json(newTask);
}
