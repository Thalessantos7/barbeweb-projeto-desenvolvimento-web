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
    <header className="registroHeader-header">
      <div className="registroHeader-div">
        <LogoBarbeWeb />
        {titulo !== "Escolha como deseja se cadastrar" && (
          <h2 className="registroHeader-h2">
            {titulo}
          </h2>
        )}
      </div>
      
      {titulo === "Escolha como deseja se cadastrar" && (
        <p className="registroHeader-p">
          {titulo}
        </p>
      )}

      {titulo !== "Escolha como deseja se cadastrar" && (
        <p className="registroHeader-p2">
          {titulo}
        </p>
      )}

      {mostrarVoltar && (
        <div className="registroHeader-div2">
          <Link
            href={hrefVoltar}
            className="registroHeader-div-link"
          >
            &lt; Voltar
          </Link>
        </div>
      )}
    </header>
  );
}