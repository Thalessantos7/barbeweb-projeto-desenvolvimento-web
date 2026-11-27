import { prisma } from "@/lib/prisma";

type ProfissionalRouteContext = {
  params: Promise<{ id: string }>;
};

async function getProfessionalId(context: ProfissionalRouteContext) {
  const { id } = await context.params;
  const professionalId = Number(id);

  return Number.isSafeInteger(professionalId) && professionalId > 0
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
    const profissional = await prisma.profissional.findUnique({
      where: { idProfissional },
    });

    if (!profissional) {
      return Response.json({ erro: "Profissional não encontrado." }, { status: 404 });
    }

    return Response.json(profissional);
  } catch {
    return Response.json(
      { erro: "Não foi possível buscar o profissional." },
      { status: 500 },
    );
  }
}
