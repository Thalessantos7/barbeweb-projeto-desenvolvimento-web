import { PaginaComFundo } from "@/components/paginacomfundo.component";
import { LoginForm } from "@/components/loginform.component";
import { LoginHeader } from "@/components/loginheader.component";

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