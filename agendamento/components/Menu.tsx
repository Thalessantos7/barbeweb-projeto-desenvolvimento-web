import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export default function Menu() {
  return (
    <nav className="flex gap-6 p-4 bg-black text-white">
      <Link href="/agendamento" className="flex items-center gap-2">
        <CalendarCheck size={20} /> Agendamento
      </Link>
    </nav>
  );
}