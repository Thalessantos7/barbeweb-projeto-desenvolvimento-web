import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BotaoLink } from "@/components/link.component";
import { horariosDisponiveis } from "@/lib/horarios";

export default function Horarios() {
  return (
    <main className="fundo">
      <section className="w-full max-w-5xl rounded-[2rem] border border-white/15 bg-[#3d281b]/25 p-5 shadow-2xl backdrop-blur-sm sm:p-10">
        <BotaoLink
          href="/login"
          className="mb-6 flex w-fit items-center gap-1 rounded-full bg-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/30"
        >
          <ChevronLeft size={18} /> Voltar
        </BotaoLink>

        <h1 className="mb-8 text-center text-4xl font-semibold text-white sm:mb-10 sm:text-5xl">
          Horários disponíveis
        </h1>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {horariosDisponiveis.map((h) => (
            <Link
              key={h}
              href={{ pathname: "/agendamento", query: { horario: h } }}
              className="rounded-full bg-black px-4 py-4 text-center text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-5 sm:text-lg"
            >
              {h} hs
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}