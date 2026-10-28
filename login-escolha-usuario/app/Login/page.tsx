import { PaginaComFundo } from "../Components/PaginaComFundo.components";
import { LoginForm } from "../Components/LoginForm.components";
import { LoginHeader } from "../Components/LoginHeader.components";

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