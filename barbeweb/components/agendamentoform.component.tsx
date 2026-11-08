"use client";

import { useState } from "react";
import { User, Scissors, ChevronLeft } from "lucide-react";
import Campo from "@/components/campo.component";
import { Button } from "@/components/button.component";
import { Input } from "@/components/input.component";
import { BotaoLink } from "@/components/link.component";
import type { HorarioDisponivel } from "@/lib/horarios";

const servicos = [
  { nome: "Corte de Cabelo", preco: 25 },
  { nome: "Barba", preco: 15 },
];

export default function AgendamentoForm({
  horario,
}: {
  horario: HorarioDisponivel;
}) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);

  return (
    <main className="fundo">
      <section className="w-full max-w-xl rounded-[2rem] border border-white/15 bg-[#3d281b]/35 p-5 shadow-2xl backdrop-blur-sm sm:p-9">
        <BotaoLink
          href="/horarios"
          className="mb-6 flex w-fit items-center gap-1 rounded-full bg-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/30"
        >
          <ChevronLeft size={18} /> Voltar
        </BotaoLink>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">BarbeWeb</h1>
          <h2 className="mt-3 text-5xl font-bold text-[#f1d7b1] sm:text-6xl">
            {horario} hs
          </h2>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Nome"
              icone={User}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <Campo icone={Scissors}>
            <select onChange={(e) => setValor(Number(e.target.value))}>
              <option value={0}>Serviços</option>
              {servicos.map((s) => (
                <option key={s.nome} value={s.preco}>
                  {s.nome}
                </option>
              ))}
            </select>
          </Campo>

          <p className="text-2xl font-semibold sm:text-3xl">
            Valor: {valor},00R$
          </p>

          <div className="w-full max-w-xs">
            <Button onClick={() => alert(`Agendado para ${nome}`)}>
              Agendar
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
