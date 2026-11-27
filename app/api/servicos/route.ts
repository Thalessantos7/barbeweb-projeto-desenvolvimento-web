
import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";
import { validarServico } from "@/lib/servicos";

export async function GET() {
  try {
    const prisma = getPrismaClient();

    const servicos = await prisma.servico.findMany({
      orderBy: {
        id_servico: "asc",
      },
    });

    const resultado = servicos.map((servico) => ({
      ...servico,
      id_servico: servico.id_servico.toString(),
    }));

    return NextResponse.json(resultado, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar serviços:", error);

    return NextResponse.json(
      { erro: "Não foi possível buscar os serviços." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const validacao = validarServico(body);

    if (validacao.erro || !validacao.data) {
      return NextResponse.json(
        { erro: validacao.erro || "Dados inválidos." },
        { status: 400 }
      );
    }

    const prisma = getPrismaClient();

    const servico = await prisma.servico.create({
      data: validacao.data,
    });

    return NextResponse.json(
      {
        ...servico,
        id_servico: servico.id_servico.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao cadastrar serviço:", error);

    return NextResponse.json(
      { erro: "Não foi possível cadastrar o serviço." },
      { status: 500 }
    );
  }
}

