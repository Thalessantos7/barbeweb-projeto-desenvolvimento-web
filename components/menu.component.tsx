import Link from "next/link";
import Image from "next/image";
import { Clock, CalendarCheck, Scissors, User } from "lucide-react";

export default function Menu() {
  return (
    <nav className="flex w-full shrink-0 flex-row flex-wrap items-center gap-x-3 gap-y-2 bg-[#1a120c] px-4 py-3 text-white sm:gap-x-6 sm:px-6 md:sticky md:top-0 md:h-screen md:w-64 md:flex-col md:flex-nowrap md:items-stretch md:gap-8 md:border-r md:border-white/10 md:px-5 md:py-8">
      <Link
        href="/"
        aria-label="BarbeWeb - início"
        className="mr-2 flex shrink-0 items-center md:mr-0 md:justify-center"
      >
        <Image
          src="/logotipo.png"
          alt="BarbeWeb"
          width={180}
          height={50}
          priority
          className="h-8 w-auto object-contain sm:h-9 md:h-auto md:w-full md:max-w-44"
        />
      </Link>

      <Link href="/servicos" className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white sm:px-4 md:w-full md:px-4 md:py-3">
        <Scissors size={20} /> Serviços
      </Link>

      <Link href="/horarios" className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white sm:px-4 md:w-full md:px-4 md:py-3">
        <Clock size={20} /> Horários
      </Link>

      <Link href="/agendamento" className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white sm:px-4 md:w-full md:px-4 md:py-3">
        <CalendarCheck size={20} /> Agendamento
      </Link>

      <Link href="/perfil" className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white sm:px-4 md:w-full md:px-4 md:py-3">
        <User size={20} /> Perfil
      </Link>
    </nav>
  );
}
