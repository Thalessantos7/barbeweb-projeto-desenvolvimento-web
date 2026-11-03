import Link from "next/link";

const horarios = ["8:00", "9:00", "10:00", "11:00"];

export default function Horarios() {
  return (
    <main className="fundo flex flex-col items-center gap-8">
      <h1 className="text-5xl">Horários</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {horarios.map((h) => (
          <Link key={h} href="/agendamento" className="botao">
            {h} hs
          </Link>
        ))}
      </div>
    </main>
  );
}