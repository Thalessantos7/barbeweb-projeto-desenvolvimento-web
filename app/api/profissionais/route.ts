import { getPrismaClient } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = getPrismaClient();
    const profissionais = await prisma.profissional.findMany({
      orderBy: { idProfissional: "asc" },
    });

    return Response.json(profissionais);
  } catch {
    return Response.json(
      { erro: "Não foi possível listar os profissionais." },
      { status: 500 },
    );
  }
}
