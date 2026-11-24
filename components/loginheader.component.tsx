import { LogoBarbeWeb } from "./logobarbeweb.component";

export function LoginHeader() {
  return (
    <header className="loginHeader-header">
      <LogoBarbeWeb/>
      <p className="login-subtitulo mt-2">Agendas Online</p>
    </header>
  );
}