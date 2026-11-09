import { CadastroForm } from "@/components/cadastroform.component";
import Link from "next/link";
import { LogoBarbeWeb } from "@/components/logobarbeweb.component";

export default function CadastroCliente() {
  return (
    <main className="pagina-fundo items-center px-4 sm:px-8">
      <div className="relative mt-2 flex w-full max-w-5xl flex-col">
        <div className="mb-8 flex w-full items-center justify-between gap-4 sm:mb-10">
          <LogoBarbeWeb />

          <Link
            href="/escolhausuario"
            className="whitespace-nowrap rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/30 sm:px-5 sm:text-sm"
          >
            &lt; Voltar
          </Link>
        </div>

        <h2 className="mb-8 text-center text-sm font-light text-white/75 sm:mb-10 md:text-2xl md:text-white/80">
          Cadastro de Cliente
        </h2>

        <CadastroForm tipo="cliente" />
      </div>
    </main>
  );
}
