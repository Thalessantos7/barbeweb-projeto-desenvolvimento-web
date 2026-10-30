import { PaginaComFundo } from "../Components/paginacomfundo.component";
import { RegistroHeader } from "../Components/registroheader.component";
import { ListaTiposCadastro } from "../Components/listatiposcadastro.component";

export default function EscolhaUsuarioPage() {
  return (
    <PaginaComFundo>
      <RegistroHeader />
      <ListaTiposCadastro />
    </PaginaComFundo>
  );
}