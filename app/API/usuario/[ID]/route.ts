import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const todos = await prisma.usuario.findMany({
            orderBy: {
                id_usuario: "asc"
            }
        })

        return NextResponse.json(todos)
        
    }catch(error){

        console.log("Erro ao buscar tarefas: ", error)

        return NextResponse.json(
            { error : "Não foi possível buscar as tarefas."},
            { status: 500 } 
        )
    }
}