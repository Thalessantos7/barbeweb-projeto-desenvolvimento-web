
import { getPrismaClient } from "@/lib/prisma";
import { validarServico } from "@/lib/servicos";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!Array.isArray(body) || body.length === 0) {
      return Response.json(
        { erro: "Envie uma lista de serviços." },
        { status: 400 }
      );
    }

    if (body.length > 100) {
      return Response.json(
        { erro: "O limite é de 100 serviços por requisição." },
        { status: 400 }
      );
    }

    const servicos = [];

    for (let i = 0; i < body.length; i++) {
      const validacao = validarServico(body[i]);

      if (validacao.erro) {
        return Response.json(
          {
            erro: `Erro no serviço ${i + 1}: ${validacao.erro}`,
          },
          { status: 400 }
        );
      }

      servicos.push(validacao.data!);
    }

    const prisma = getPrismaClient();

    const resultado = await prisma.servico.createMany({
      data: servicos,
    });

    return Response.json(
      {
        mensagem: "Serviços cadastrados com sucesso.",
        quantidade: resultado.count,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { erro: "Não foi possível cadastrar os serviços." },
      { status: 500 }
    );
  }
}
