import { LogoBarbeWeb } from "./logobarbeweb.component";
import Image from "next/image";

export function RegistroHeader() {
  return (
    <header className="registro-header">
      <LogoBarbeWeb/>

      <p className="registro-subtitulo">Escolha como deseja se cadastrar</p>
    </header>
  );
}