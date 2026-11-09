import { CadastroForm } from "@/components/cadastroform.component";
import { RegistroHeader } from "@/components/registroheader.component";
import { PaginaComFundo } from "@/components/paginacomfundo.component";
import Link from "next/link";

export default function CadastroProfissional() {
  return (
    <PaginaComFundo>
      <div className="relative mt-2 flex w-full max-w-5xl flex-col px-4 sm:px-8">
        <RegistroHeader titulo="Cadastro de Profissional" mostrarVoltar={true} />

        <CadastroForm tipo="profissional">
          <div className="mt-6 text-sm font-medium text-[#3D2C1E]">
            Já tem uma conta? <Link href="/login" className="font-bold hover:underline">Entrar</Link>
          </div>
        </CadastroForm>
      </div>
    </PaginaComFundo>
  );
}
