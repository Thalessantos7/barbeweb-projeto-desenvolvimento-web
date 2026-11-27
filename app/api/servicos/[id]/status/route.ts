
import { getPrismaClient } from "@/lib/prisma";

type Contexto = {
  params: Promise<{ id: string }>;
};

export async function PATCH(
  request: Request,
  contexto: Contexto
) {
  const { id } = await contexto.params;

  if (!/^[1-9]\d*$/.test(id)) {
    return Response.json(
      { erro: "ID do serviço inválido." },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body) ||
      typeof body.ativo !== "boolean" ||
      Object.keys(body).length !== 1
    ) {
      return Response.json(
        { erro: "Informe somente o campo ativo como true ou false." },
        { status: 400 }
      );
    }

    const prisma = getPrismaClient();

    const servico = await prisma.servico.update({
      where: { id_servico: BigInt(id) },
      data: { ativo: body.ativo },
    });

    return Response.json({
      mensagem: "Status atualizado com sucesso.",
      servico: {
        ...servico,
        id_servico: servico.id_servico.toString(),
      },
    });
  } catch (error) {
    console.error(error);

    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2025"
    ) {
      return Response.json(
        { erro: "Serviço não encontrado." },
        { status: 404 }
      );
    }

    return Response.json(
      { erro: "Não foi possível atualizar o status." },
      { status: 500 }
    );
  }
}
