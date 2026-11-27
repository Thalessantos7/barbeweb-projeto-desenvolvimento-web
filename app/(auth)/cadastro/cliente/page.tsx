import { CadastroForm } from "@/components/cadastroform.component";
import Link from "next/link";
import { LogoBarbeWeb } from "@/components/logobarbeweb.component";

export default function CadastroCliente() {
  return (
    <main className="pagina-fundo cliente-main">
      <div className="cliente-div">
        <div className="client-div2">
          <LogoBarbeWeb />

          <Link
            href="/escolhausuario"
            className="cliente-link"
          >
            &lt; Voltar
          </Link>
        </div>

        <h2 className="cliente-h2">
          Cadastro de Cliente
        </h2>

        <CadastroForm tipo="cliente" />
      </div>
    </main>
  );
}
