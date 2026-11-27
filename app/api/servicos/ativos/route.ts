
import { getPrismaClient } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = getPrismaClient();

    const servicos = await prisma.servico.findMany({
      where: { ativo: true },
      orderBy: { nome: "asc" },
    });

    return Response.json(
      servicos.map((servico) => ({
        ...servico,
        id_servico: servico.id_servico.toString(),
      }))
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { erro: "Não foi possível listar os serviços ativos." },
      { status: 500 }
    );
  }
}
