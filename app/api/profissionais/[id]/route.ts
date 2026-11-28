import { getPrismaClient } from "@/lib/prisma";
import { lerJson, validarProfissional } from "@/lib/profissionais";
import { Prisma } from "@/generated/prisma/client";

type ProfissionalRouteContext = {
  params: Promise<{ id: string }>;
};

async function getProfessionalId(context: ProfissionalRouteContext) {
  const { id } = await context.params;
  const professionalId = Number(id);

  return /^[1-9]\d*$/.test(id) &&
    Number.isSafeInteger(professionalId) &&
    professionalId > 0
    ? professionalId
    : null;
}

export async function GET(
  _request: Request,
  context: ProfissionalRouteContext,
) {
  const idProfissional = await getProfessionalId(context);

  if (idProfissional === null) {
    return Response.json({ erro: "O id do profissional é inválido." }, { status: 400 });
  }

  try {
    const prisma = getPrismaClient();
    const profissional = await prisma.profissional.findUnique({
      where: { idProfissional },
    });

    if (!profissional) {
      return Response.json({ erro: "Profissional não encontrado." }, { status: 404 });
    }

    return Response.json(profissional);
  } catch (error) {
    console.error("Erro ao buscar profissional:", error);
    return Response.json(
      { erro: "Não foi possível buscar o profissional." },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  context: ProfissionalRouteContext,
) {
  const idProfissional = await getProfessionalId(context);

  if (idProfissional === null) {
    return Response.json({ erro: "O id do profissional é inválido." }, { status: 400 });
  }

  const body = await lerJson(request);

  if (!body.valido) {
    return Response.json(
      { erro: "O corpo da requisição deve conter JSON válido." },
      { status: 400 },
    );
  }

  const validacao = validarProfissional(body.dados, true);

  if (!validacao.valido) {
    return Response.json({ erro: validacao.erro }, { status: 400 });
  }

  try {
    const prisma = getPrismaClient();
    const profissional = await prisma.profissional.update({
      where: { idProfissional },
      data: validacao.dados,
    });

    return Response.json(profissional);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return Response.json(
          { erro: "Profissional não encontrado." },
          { status: 404 },
        );
      }

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

    console.error("Erro ao atualizar profissional:", error);
    return Response.json(
      { erro: "Não foi possível atualizar o profissional." },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _request: Request,
  context: ProfissionalRouteContext,
) {
  const idProfissional = await getProfessionalId(context);

  if (idProfissional === null) {
    return Response.json({ erro: "O id do profissional é inválido." }, { status: 400 });
  }

  try {
    const prisma = getPrismaClient();
    await prisma.profissional.delete({ where: { idProfissional } });

    return new Response(null, { status: 204 });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return Response.json(
        { erro: "Profissional não encontrado." },
        { status: 404 },
      );
    }

    console.error("Erro ao excluir profissional:", error);
    return Response.json(
      { erro: "Não foi possível excluir o profissional." },
      { status: 500 },
    );
  }
}