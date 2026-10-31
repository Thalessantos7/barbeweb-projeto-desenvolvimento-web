import { LogoBarbeWeb } from "./logobarbeweb.component";
import Link from "next/link";

interface HeaderProps {
  titulo?: string;
  mostrarVoltar?: boolean;
}

export function RegistroHeader({ titulo = "Escolha como deseja se cadastrar", mostrarVoltar = false }: HeaderProps) {
  return (
    <header className="relative flex items-center justify-center w-full mb-10 min-h-12.5">
      <div className="flex items-center gap-4 md:gap-6">
        <LogoBarbeWeb />
        {titulo !== "Escolha como deseja se cadastrar" && (
          <h2 className="text-xl md:text-2xl text-white/80 font-light hidden md:block border-l border-white/20 pl-4 md:pl-6">
            {titulo}
          </h2>
        )}
      </div>
      
      {titulo === "Escolha como deseja se cadastrar" && (
         <p className="registro-subtitulo absolute -bottom-8">{titulo}</p>
      )}

      {mostrarVoltar && (
        <div className="absolute right-0">
          <Link 
            href="/escolhausuario" 
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm font-medium transition backdrop-blur-sm whitespace-nowrap"
          >
            &lt; Voltar
          </Link>
        </div>
      )}
    </header>
  );
}