import { NextResponse } from "next/server";
import prisma from "@/app/Libs/prisma";


export async function GET(request,{params}){
    const task = await prisma.task.findUnique({where:{
        id: Number(params.id)
    }})
    return NextResponse.json(task)
}

export async function PUT(request,{params}){
    const data = await request.json()
    const task = await prisma.task.update({where:{
        id:Number(params.id)
    }, data})
    return NextResponse.json(task)
}


export async function DELETE(request,{params}){
    await prisma.task.delete({where:{
        id:Number(params.id)
    }})
    return NextResponse.json({message: 'eliminado correctamente'})
}

