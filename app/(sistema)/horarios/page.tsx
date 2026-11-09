"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import { BotaoLink } from "@/components/link.component";
import {
  horariosManha,
  horariosNoite,
  horariosTarde,
} from "@/lib/horarios";

const MESES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
] as const;

const DIAS_SEMANA = ["S", "T", "Q", "Q", "S", "S", "D"] as const;

const ANO = new Date().getFullYear();

type Passo = "data" | "horario";

function diasDoMes(ano: number, mes: number) {
  const total = new Date(ano, mes + 1, 0).getDate();
  // Segunda = 0 ... Domingo = 6
  const primeiro = (new Date(ano, mes, 1).getDay() + 6) % 7;
  return { total, primeiro };
}

function chaveData(ano: number, mes: number, dia: number) {
  return `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
}

export default function Horarios() {
  const router = useRouter();
  const [passo, setPasso] = useState<Passo>("data");
  const [dataSelecionada, setDataSelecionada] = useState<string | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(
    null,
  );

  function selecionarDia(mes: number, dia: number) {
    setDataSelecionada(chaveData(ANO, mes, dia));
    setHorarioSelecionado(null);
    setPasso("horario");
  }

  function confirmar() {
    if (!dataSelecionada || !horarioSelecionado) return;
    router.push(
      `/agendamento?horario=${encodeURIComponent(horarioSelecionado)}&data=${encodeURIComponent(dataSelecionada)}`,
    );
  }

  return (
    <main className="fundo">
      <section className="w-full max-w-5xl rounded-[2rem] border border-white/15 bg-[#3d281b]/35 p-5 shadow-2xl backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            BarbeWeb
          </h1>
          {passo === "horario" ? (
            <button
              type="button"
              onClick={() => setPasso("data")}
              className="flex w-fit items-center gap-1 rounded-full bg-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/30"
            >
              <ChevronLeft size={18} /> Voltar
            </button>
          ) : (
            <BotaoLink
              href="/servicos"
              className="flex w-fit items-center gap-1 rounded-full bg-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/30"
            >
              <ChevronLeft size={18} /> Voltar
            </BotaoLink>
          )}
        </div>

        {passo === "data" ? (
          <SelecaoData
            dataSelecionada={dataSelecionada}
            onSelecionar={selecionarDia}
          />
        ) : (
          <SelecaoHorario
            horarioSelecionado={horarioSelecionado}
            onSelecionar={setHorarioSelecionado}
            onConfirmar={confirmar}
          />
        )}
      </section>
    </main>
  );
}

function SelecaoData({
  dataSelecionada,
  onSelecionar,
}: {
  dataSelecionada: string | null;
  onSelecionar: (mes: number, dia: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {MESES.map((nome, mes) => {
        const { total, primeiro } = diasDoMes(ANO, mes);
        return (
          <div
            key={nome}
            className="rounded-xl border border-barbe-claro/40 bg-[#3d281b]/50 p-3"
          >
            <h2 className="mb-2 text-center text-sm font-semibold text-barbe-claro">
              {nome}
            </h2>
            <div className="mb-1 grid grid-cols-7 text-center text-[10px] text-barbe-claro/70">
              {DIAS_SEMANA.map((d, i) => (
                <span key={`${d}-${i}`}>{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0.5 text-center text-xs text-white">
              {Array.from({ length: primeiro }).map((_, i) => (
                <span key={`vazio-${mes}-${i}`} />
              ))}
              {Array.from({ length: total }).map((_, i) => {
                const dia = i + 1;
                const chave = chaveData(ANO, mes, dia);
                const selecionado = dataSelecionada === chave;
                return (
                  <button
                    key={chave}
                    type="button"
                    onClick={() => onSelecionar(mes, dia)}
                    className={`rounded px-0.5 py-1 transition ${
                      selecionado
                        ? "bg-barbe-areia font-semibold text-[#3d281b]"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {dia}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SelecaoHorario({
  horarioSelecionado,
  onSelecionar,
  onConfirmar,
}: {
  horarioSelecionado: string | null;
  onSelecionar: (horario: string) => void;
  onConfirmar: () => void;
}) {
  const periodos = [
    {
      titulo: "Manhã",
      faixa: "08:00 - 11:59",
      Icone: Sun,
      horarios: horariosManha,
    },
    {
      titulo: "Tarde",
      faixa: "12:00 - 17:59",
      Icone: Sun,
      horarios: horariosTarde,
    },
    {
      titulo: "Noite",
      faixa: "18:00 - 22:00",
      Icone: Moon,
      horarios: horariosNoite,
    },
  ] as const;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {periodos.map(({ titulo, faixa, Icone, horarios }) => (
          <div
            key={titulo}
            className="rounded-xl border border-barbe-claro/50 bg-[#3d281b]/40 p-4"
          >
            <div className="mb-4 flex items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-barbe-claro">
                  {titulo}
                </h2>
                <p className="text-xs text-barbe-claro/70">{faixa}</p>
              </div>
              <Icone className="size-5 text-barbe-claro" strokeWidth={1.5} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {horarios.map((h) => {
                const selecionado = horarioSelecionado === h;
                return (
                  <button
                    key={h}
                    type="button"
                    onClick={() => onSelecionar(h)}
                    className={`rounded-lg border px-2 py-2 text-sm transition ${
                      selecionado
                        ? "border-barbe-areia bg-barbe-areia font-semibold text-[#3d281b]"
                        : "border-barbe-claro/50 text-barbe-claro hover:bg-white/10"
                    }`}
                  >
                    {h}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          disabled={!horarioSelecionado}
          onClick={onConfirmar}
          className="flex items-center gap-1 rounded-xl bg-barbe-areia px-5 py-3 text-sm font-semibold text-[#3d281b] transition enabled:hover:bg-[#e0c49a] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Confirmar horário <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
