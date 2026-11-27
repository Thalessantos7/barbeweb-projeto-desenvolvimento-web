
import { getPrismaClient } from "@/lib/prisma";
import { validarServico } from "@/lib/servicos";

type Contexto = {
  params: Promise<{ id: string }>;
};

async function obterId(contexto: Contexto) {
  const { id } = await contexto.params;

  if (!/^[1-9]\d*$/.test(id)) {
    return null;
  }

  try {
    return BigInt(id);
  } catch {
    return null;
  }
}

export async function GET(
  _request: Request,
  contexto: Contexto
) {
  const id = await obterId(contexto);

  if (id === null) {
    return Response.json(
      { erro: "ID do serviço inválido." },
      { status: 400 }
    );
  }

  try {
    const prisma = getPrismaClient();

    const servico = await prisma.servico.findUnique({
      where: { id_servico: id },
    });

    if (!servico) {
      return Response.json(
        { erro: "Serviço não encontrado." },
        { status: 404 }
      );
    }

    return Response.json({
      ...servico,
      id_servico: servico.id_servico.toString(),
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { erro: "Não foi possível buscar o serviço." },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  contexto: Contexto
) {
  const id = await obterId(contexto);

  if (id === null) {
    return Response.json(
      { erro: "ID do serviço inválido." },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    const validacao = validarServico(body, true);

    if (validacao.erro) {
      return Response.json(
        { erro: validacao.erro },
        { status: 400 }
      );
    }

    const prisma = getPrismaClient();

    const servico = await prisma.servico.update({
      where: { id_servico: id },
      data: validacao.data!,
    });

    return Response.json({
      ...servico,
      id_servico: servico.id_servico.toString(),
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
      { erro: "Não foi possível atualizar o serviço." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  contexto: Contexto
) {
  const id = await obterId(contexto);

  if (id === null) {
    return Response.json(
      { erro: "ID do serviço inválido." },
      { status: 400 }
    );
  }

  try {
    const prisma = getPrismaClient();

    await prisma.servico.delete({
      where: { id_servico: id },
    });

    return Response.json({
      mensagem: "Serviço excluído com sucesso.",
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
      { erro: "Não foi possível excluir o serviço." },
      { status: 500 }
    );
  }
}
