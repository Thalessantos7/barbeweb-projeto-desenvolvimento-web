import { LogoBarbeWeb } from "./logobarbeweb.component";
import Link from "next/link";

interface HeaderProps {
  titulo?: string;
  mostrarVoltar?: boolean;
  hrefVoltar?: string;
}

export function RegistroHeader({
  titulo = "Escolha como deseja se cadastrar",
  mostrarVoltar = false,
  hrefVoltar = "/escolhausuario",
}: HeaderProps) {
  return (
    <header className="relative mb-10 grid min-h-12.5 w-full grid-cols-[1fr_auto_1fr] items-center gap-y-3">
      <div className="col-start-2 flex items-center gap-4 max-sm:col-span-3 max-sm:col-start-1 max-sm:justify-self-center md:gap-6">
        <LogoBarbeWeb />
        {titulo !== "Escolha como deseja se cadastrar" && (
          <h2 className="text-xl md:text-2xl text-white/80 font-light hidden md:block border-l border-white/20 pl-4 md:pl-6">
            {titulo}
          </h2>
        )}
      </div>
      
      {titulo === "Escolha como deseja se cadastrar" && (
        <p className="registro-subtitulo absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          {titulo}
        </p>
      )}

      {titulo !== "Escolha como deseja se cadastrar" && (
        <p className="col-span-3 row-start-3 mt-2 text-center text-sm text-white/75 md:hidden">
          {titulo}
        </p>
      )}

      {mostrarVoltar && (
        <div className="col-start-3 row-start-1 justify-self-end max-sm:row-start-2">
          <Link
            href={hrefVoltar}
            className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium text-white transition backdrop-blur-sm hover:bg-white/30"
          >
            &lt; Voltar
          </Link>
        </div>
      )}
    </header>
  );
}