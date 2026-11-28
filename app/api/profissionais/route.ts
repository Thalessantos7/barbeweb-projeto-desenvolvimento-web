import { getPrismaClient } from "@/lib/prisma";
import { lerJson, validarProfissional } from "@/lib/profissionais";
import { Prisma } from "@/generated/prisma/client";

export async function GET() {
  try {
    const prisma = getPrismaClient();
    const profissionais = await prisma.profissional.findMany({
      orderBy: { idProfissional: "asc" },
    });

    return Response.json(profissionais);
  } catch (error) {
    console.error("Erro ao listar profissionais:", error);
    return Response.json(
      { erro: "Não foi possível listar os profissionais." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const body = await lerJson(request);

  if (!body.valido) {
    return Response.json({ erro: "O corpo da requisição deve conter JSON válido." }, { status: 400 });
  }

  const validacao = validarProfissional(body.dados);

  if (!validacao.valido) {
    return Response.json({ erro: validacao.erro }, { status: 400 });
  }

  try {
    const prisma = getPrismaClient();
    const profissional = await prisma.profissional.create({
      data: validacao.dados,
    });

    return Response.json(profissional, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return Response.json(
          { erro: "Já existe um profissional vinculado a esse usuário." },
          { status: 409 },
        );
      }

      if (error.code === "P2003") {
        return Response.json({ erro: "Usuário não encontrado." }, { status: 404 });
      }
    }

    console.error("Erro ao criar profissional:", error);
    return Response.json(
      { erro: "Não foi possível criar o profissional." },
      { status: 500 },
    );
  }
}