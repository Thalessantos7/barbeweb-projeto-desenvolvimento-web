import Link from "next/link";
import Image from "next/image";
import { Clock, CalendarCheck, Scissors, User } from "lucide-react";

export default function Menu() {
  return (
    <nav className="menu-nav">
      <Link
        href="/"
        aria-label="BarbeWeb - início"
        className="menu-nav-link"
      >
        <Image
          src="/logotipo.png"
          alt="BarbeWeb"
          width={180}
          height={50}
          priority
          className="menu-nav-link-imag"
        />
      </Link>

      <Link href="/servicos" className="menu-nav-link2">
        <Scissors size={20} /> Serviços
      </Link>

      <Link href="/horarios" className="menu-nav-link2">
        <Clock size={20} /> Horários
      </Link>

      <Link href="/agendamento" className="menu-nav-link2">
        <CalendarCheck size={20} /> Agendamento
      </Link>

      <Link href="/perfil" className="menu-nav-link2">
        <User size={20} /> Perfil
      </Link>
    </nav>
  );
}
