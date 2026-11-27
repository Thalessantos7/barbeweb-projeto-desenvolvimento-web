
export type ServicoInput = {
  nome?: string;
  descricao?: string | null;
  preco?: number;
  duracao_minutos?: number;
  ativo?: boolean;
};

export type ServicoCreateInput = {
  nome: string;
  descricao?: string | null;
  preco: number;
  duracao_minutos: number;
  ativo?: boolean;
};

type ResultadoCriacao = {
  data?: ServicoCreateInput;
  erro?: string;
};

type ResultadoAtualizacao = {
  data?: ServicoInput;
  erro?: string;
};

export function validarServico(body: unknown): ResultadoCriacao;

export function validarServico(
  body: unknown,
  parcial: true
): ResultadoAtualizacao;

export function validarServico(
  body: unknown,
  parcial: false
): ResultadoCriacao;

export function validarServico(
  body: unknown,
  parcial: boolean
): ResultadoCriacao | ResultadoAtualizacao;

export function validarServico(
  body: unknown,
  parcial = false
): ResultadoCriacao | ResultadoAtualizacao {
  if (
    !body ||
    typeof body !== "object" ||
    Array.isArray(body)
  ) {
    return { erro: "O corpo da requisição deve ser um objeto." };
  }

  const dados = body as Record<string, unknown>;

  const permitidos = [
    "nome",
    "descricao",
    "preco",
    "duracao_minutos",
    "ativo",
  ];

  if (Object.keys(dados).some((campo) => !permitidos.includes(campo))) {
    return { erro: "A requisição contém campos inválidos." };
  }

  if (!parcial) {
    for (const campo of ["nome", "preco", "duracao_minutos"]) {
      if (!(campo in dados)) {
        return { erro: `O campo ${campo} é obrigatório.` };
      }
    }
  }

  const data: ServicoInput = {};

  if ("nome" in dados) {
    if (
      typeof dados.nome !== "string" ||
      dados.nome.trim().length === 0 ||
      dados.nome.length > 100
    ) {
      return { erro: "O nome deve ter entre 1 e 100 caracteres." };
    }

    data.nome = dados.nome.trim();
  }

  if ("descricao" in dados) {
    if (
      dados.descricao !== null &&
      typeof dados.descricao !== "string"
    ) {
      return { erro: "A descrição deve ser um texto ou nula." };
    }

    data.descricao = dados.descricao as string | null;
  }

  if ("preco" in dados) {
    const preco = Number(dados.preco);

    if (
      !Number.isFinite(preco) ||
      preco < 0 ||
      preco > 99999999.99
    ) {
      return {
        erro: "O preço deve ser um número entre 0 e 99999999.99.",
      };
    }

    data.preco = preco;
  }

  if ("duracao_minutos" in dados) {
    if (
      typeof dados.duracao_minutos !== "number" ||
      !Number.isInteger(dados.duracao_minutos) ||
      dados.duracao_minutos <= 0
    ) {
      return {
        erro: "A duração deve ser um número inteiro positivo.",
      };
    }

    data.duracao_minutos = dados.duracao_minutos;
  }

  if ("ativo" in dados) {
    if (typeof dados.ativo !== "boolean") {
      return {
        erro: "O campo ativo deve ser verdadeiro ou falso.",
      };
    }

    data.ativo = dados.ativo;
  }

  if (parcial && Object.keys(data).length === 0) {
    return {
      erro: "Informe pelo menos um campo para atualizar.",
    };
  }

  if (parcial) {
    return { data };
  }

  return {
    data: data as ServicoCreateInput,
  };
}
