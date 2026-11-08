import { LogoBarbeWeb } from "./logobarbeweb.component";

export function LoginHeader() {
  return (
    <header className="flex flex-col items-center justify-center w-full mb-6">
      <LogoBarbeWeb/>
      <p className="login-subtitulo mt-2">Agendas Online</p>
    </header>
  );
}