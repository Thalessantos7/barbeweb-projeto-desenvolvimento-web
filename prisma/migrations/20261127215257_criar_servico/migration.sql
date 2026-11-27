-- CreateTable
CREATE TABLE "servico" (
    "id_servico" BIGSERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" TEXT,
    "preco" DECIMAL(10,2) NOT NULL,
    "duracao_minutos" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criado_em" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "servico_pkey" PRIMARY KEY ("id_servico")
);

ALTER TABLE "servico"
ADD CONSTRAINT "servico_preco_check" CHECK ("preco" >= 0);

ALTER TABLE "servico"
ADD CONSTRAINT "servico_duracao_minutos_check" CHECK ("duracao_minutos" > 0);
