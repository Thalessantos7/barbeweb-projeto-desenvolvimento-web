import type { ReactNode } from "react";
import { BotaoLink } from "./link.component";

type CardTipoCadastroProps = {
  icone: ReactNode;
  titulo: string;
  descricao: string;
  href: string;
};

export function CardTipoCadastro({ icone, titulo, descricao, href }: CardTipoCadastroProps) {
  return (
    <article className="card-registro">
      <div className="card-icone">{icone}</div>
      <h2 className="card-titulo">{titulo}</h2>
      <p className="card-descricao">{descricao}</p>
      <BotaoLink href={href}>Continuar</BotaoLink>
    </article>
  );
}