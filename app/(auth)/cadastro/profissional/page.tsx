import { CadastroForm } from "@/components/cadastroform.component";
import { RegistroHeader } from "@/components/registroheader.component";
import { PaginaComFundo } from "@/components/paginacomfundo.component";
import Link from "next/link";

export default function CadastroProfissional() {
  return (
    <PaginaComFundo>
      <div className="profissional-div">
        <RegistroHeader titulo="Cadastro de Profissional" mostrarVoltar={true} />

        <CadastroForm tipo="profissional">
          <div className="profissional-div2">
            Já tem uma conta? <Link href="/login" className="font-bold hover:underline">Entrar</Link>
          </div>
        </CadastroForm>
      </div>
    </PaginaComFundo>
  );
}
