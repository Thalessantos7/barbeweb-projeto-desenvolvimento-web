-- CreateTable
CREATE TABLE "profissional" (
    "id_profissional" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "nome_profissional" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "profissional_pkey" PRIMARY KEY ("id_profissional")
);

-- CreateIndex
CREATE UNIQUE INDEX "profissional_id_usuario_key" ON "profissional"("id_usuario");

-- AddForeignKey
ALTER TABLE "profissional"
ADD CONSTRAINT "profissional_id_usuario_fkey"
FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario")
ON DELETE RESTRICT ON UPDATE CASCADE;
