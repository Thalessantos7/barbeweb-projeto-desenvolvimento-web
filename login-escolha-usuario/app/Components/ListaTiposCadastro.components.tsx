import { User, Scissors } from "lucide-react";
import { CardTipoCadastro } from "./CardTipoCadastro.components";

const tipos = [
  {
    icone: <User />,
    titulo: "Sou cliente",
    descricao: "Faça seu cadastro para agendar seus serviços e cuidar do seu visual.",
    href: "/EscolhaUsuario/cliente",
  },
  {
    icone: <Scissors />,
    titulo: "Sou profissional",
    descricao: "Cadastre-se como barbeiro ou cabeleireiro e comece a atender seus clientes.",
    href: "/EscolhaUsuario/profissional",
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