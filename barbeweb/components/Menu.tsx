import Link from "next/link";
import { Clock, CalendarCheck } from "lucide-react";

export default function Menu() {
  return (
    <nav className="flex gap-6 p-4 bg-black text-white">
      <Link href="/horarios" className="flex items-center gap-2">
        <Clock size={20} /> Horários
      </Link>
      <Link href="/agendamento" className="flex items-center gap-2">
        <CalendarCheck size={20} /> Agendamento
      </Link>
    </nav>
  );
}