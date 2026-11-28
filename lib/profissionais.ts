export type NovoProfissional = {
  idUsuario: number;
  nomeProfissional: string;
  especialidade: string;
  ativo?: boolean;
};

export type AtualizacaoProfissional = Omit<NovoProfissional, "ativo"> & {
  ativo: boolean;
};

type Validacao<T> =
  | { valido: true; dados: T }
  | { valido: false; erro: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function lerJson(request: Request) {
  try {
    return { valido: true as const, dados: await request.json() };
  } catch {
    return { valido: false as const };
  }
}

export function validarProfissional(
  value: unknown,
  requireAtivo: true,
): Validacao<AtualizacaoProfissional>;
export function validarProfissional(
  value: unknown,
  requireAtivo?: false,
): Validacao<NovoProfissional>;
export function validarProfissional(
  value: unknown,
  requireAtivo = false,
): Validacao<NovoProfissional | AtualizacaoProfissional> {
  if (!isRecord(value)) {
    return { valido: false, erro: "O corpo da requisição deve ser um objeto JSON." };
  }

  const { idUsuario, nomeProfissional, especialidade, ativo } = value;

  if (
    typeof idUsuario !== "number" ||
    !Number.isSafeInteger(idUsuario) ||
    idUsuario < 1
  ) {
    return { valido: false, erro: "O campo idUsuario deve ser um inteiro positivo." };
  }

  if (typeof nomeProfissional !== "string" || !nomeProfissional.trim()) {
    return { valido: false, erro: "O campo nomeProfissional é obrigatório." };
  }

  if (typeof especialidade !== "string" || !especialidade.trim()) {
    return { valido: false, erro: "O campo especialidade é obrigatório." };
  }

  if (requireAtivo && typeof ativo !== "boolean") {
    return { valido: false, erro: "O campo ativo deve ser booleano." };
  }

  if (ativo !== undefined && typeof ativo !== "boolean") {
    return { valido: false, erro: "O campo ativo deve ser booleano." };
  }

  const dados = {
    idUsuario,
    nomeProfissional: nomeProfissional.trim(),
    especialidade: especialidade.trim(),
  };

  if (typeof ativo === "boolean") {
    return { valido: true, dados: { ...dados, ativo } };
  }

  if (requireAtivo) {
    return { valido: false, erro: "O campo ativo deve ser booleano." };
  }

  return { valido: true, dados };
}
