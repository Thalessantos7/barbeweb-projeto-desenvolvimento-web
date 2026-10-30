import { PaginaComFundo } from "../Components/paginacomfundo.component";
import { LoginForm } from "../Components/loginform.component";
import { LoginHeader } from "../Components/loginheader.component";

export default function LoginPage() {
  return (
    <PaginaComFundo>
      <div className="login-caixa">
        <LoginHeader />
        <LoginForm />
      </div>
    </PaginaComFundo>
  );
}