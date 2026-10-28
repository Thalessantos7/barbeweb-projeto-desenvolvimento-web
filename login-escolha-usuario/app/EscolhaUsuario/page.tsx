import { PaginaComFundo } from "../Components/PaginaComFundo.components";
import { RegistroHeader } from "../Components/RegistroHeader.components";
import { ListaTiposCadastro } from "../Components/ListaTiposCadastro.components";

export default function EscolhaUsuarioPage() {
  return (
    <PaginaComFundo>
      <RegistroHeader />
      <ListaTiposCadastro />
    </PaginaComFundo>
  );
}