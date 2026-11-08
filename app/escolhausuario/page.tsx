import { PaginaComFundo } from "@/components/paginacomfundo.component";
import { RegistroHeader } from "@/components/registroheader.component";
import { ListaTiposCadastro } from "@/components/listatiposcadastro.component";

export default function EscolhaUsuarioPage() {
  return (
    <PaginaComFundo>
      <div className="w-full max-w-3xl">
        <RegistroHeader mostrarVoltar hrefVoltar="/login" />
        <ListaTiposCadastro />
      </div>
    </PaginaComFundo>
  );
}