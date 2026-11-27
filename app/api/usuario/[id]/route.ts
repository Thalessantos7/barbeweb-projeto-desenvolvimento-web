import { getPrismaClient } from "@/lib/prisma";

type UsuarioRouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: UsuarioRouteContext) {
  const { id } = await context.params;
  const idUsuario = Number(id);

  if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(idUsuario)) {
    return Response.json({ erro: "O id do usuário é inválido." }, { status: 400 });
  }

  try {
    const prisma = getPrismaClient();
    const usuario = await prisma.usuario.findUnique({
      where: { id_usuario: idUsuario },
      select: {
        id_usuario: true,
        nome: true,
        email: true,
        telefone: true,
        tipo_usuario: true,
        criado_em: true,
      },
    });

    if (!usuario) {
      return Response.json({ erro: "Usuário não encontrado." }, { status: 404 });
    }

    return Response.json(usuario);
  } catch {
    return Response.json(
      { erro: "Não foi possível buscar o usuário." },
      { status: 500 },
    );
  }
}
