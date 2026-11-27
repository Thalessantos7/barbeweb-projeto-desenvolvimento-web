import { User, Scissors } from "lucide-react";
import { CardTipoCadastro } from "./cardtipocadastro.component";

const tipos = [
  {
    icone: <User />,
    titulo: "Sou cliente",
    descricao: "Faça seu cadastro para agendar seus serviços e cuidar do seu visual.",
    href: "/cadastro/cliente",
  },
  {
    icone: <Scissors />,
    titulo: "Sou profissional",
    descricao: "Cadastre-se como barbeiro ou cabeleireiro e comece a atender seus clientes.",
    href: "/cadastro/profissional",
  },
];

export function ListaTiposCadastro() {
  return (
    <section className="registro-cards">
      {tipos.map((tipo) => (
        <CardTipoCadastro key={tipo.href} {...tipo} />
      ))}
    </section>
  );
}