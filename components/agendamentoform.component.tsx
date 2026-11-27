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
      <section className="agendamentoForm-section">
        <BotaoLink
          href="/horarios"
          className="agendamentoForm-section-button"
        >
          <ChevronLeft size={18} /> Voltar
        </BotaoLink>

        <div className="mb-8 text-center">
          <h1 className="agendamentoForm-h1">BarbeWeb</h1>
          <h2 className="agendamentoForm-h2">
            {horario} hs
          </h2>
        </div>

        <div className="agendamentoForm-div">
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

          <p className="agendamentoForm-p">
            Valor: {valor},00R$
          </p>

          <div className="w-full max-w-xs">
            <Button onClick={() => alert(`Horário agendado para ${nome} às ${horario} hs! Valor: R$${valor},00.`)}>
              Agendar
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
