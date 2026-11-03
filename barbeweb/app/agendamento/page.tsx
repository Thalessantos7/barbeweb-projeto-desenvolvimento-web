"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Scissors, ChevronLeft } from "lucide-react";
import Campo from "@/components/Campo";
import Botao from "@/components/Botao";

const servicos = [
  { nome: "Corte de Cabelo", preco: 25 },
  { nome: "Barba", preco: 15 },
];

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);

  return (
    <main className="fundo flex flex-col items-center gap-8">
      <Link href="/horarios" className="flex items-center gap-1 self-end bg-gray-200 text-black rounded-full px-5 py-3">
        <ChevronLeft size={18} /> Voltar
      </Link>

      <h1 className="text-5xl">BarbeWeb</h1>
      <h2 className="text-7xl">8:00 hs</h2>

      <Campo icone={User}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </Campo>

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

      <p className="text-4xl">Valor: {valor},00R$</p>

      <Botao onClick={() => alert(`Agendado para ${nome}`)}>Agendar</Botao>
    </main>
  );
}