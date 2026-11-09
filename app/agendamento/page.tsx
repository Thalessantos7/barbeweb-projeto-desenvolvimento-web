import { Suspense } from "react";
import AgendamentoForm from "@/components/agendamentoform.component";
import {
  horariosDisponiveis,
  isHorarioDisponivel,
} from "@/lib/horarios";

type AgendamentoPageProps = PageProps<"/agendamento">;

export default function AgendamentoPage(props: AgendamentoPageProps) {
  return (
    <Suspense
      fallback={
        <main className="fundo">
          <section
            className="w-full max-w-xl rounded-[2rem] border border-white/15 bg-[#3d281b]/35 p-5 text-center text-white shadow-2xl backdrop-blur-sm sm:p-9"
            role="status"
          >
            Carregando agendamento...
          </section>
        </main>
      }
    >
      <AgendamentoComHorario {...props} />
    </Suspense>
  );
}

async function AgendamentoComHorario({
  searchParams,
}: AgendamentoPageProps) {
  const { horario } = await searchParams;
  const horarioSelecionado = isHorarioDisponivel(horario)
    ? horario
    : horariosDisponiveis[0];

  return <AgendamentoForm horario={horarioSelecionado} />;
}
