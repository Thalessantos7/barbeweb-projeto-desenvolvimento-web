"use client"

import { Button } from "@/components/button.component";
import { Input } from "@/components/input.component";
import Link from "next/link";
import { LogoBarbeWeb } from "@/components/logobarbeweb.component";
import { Mail, Lock, FileText, User, MapPin, Phone } from "lucide-react";

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
          Registro
        </h2>

        <div className="mx-auto mb-8 grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-white/15 bg-[#3d281b]/30 p-4 shadow-xl backdrop-blur-sm sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:gap-5">
            <Input type="email" placeholder="E-mail" icone={Mail} />
            <Input type="password" placeholder="Senha" icone={Lock} />
            <Input type="text" placeholder="CPF: 000.000.000-00" icone={FileText} />
          </div>

          <div className="flex flex-col gap-4 sm:gap-5">
            <Input type="text" placeholder="Nome" icone={User} />
            <Input type="text" placeholder="CEP: 00000-000" icone={MapPin} />
            <Input type="tel" placeholder="(00) 0000-00000" icone={Phone} />
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs">
          <Button>Registrar-se</Button>
        </div>
      </div>
    </main>
  );
}