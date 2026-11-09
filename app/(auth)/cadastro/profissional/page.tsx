import { Button } from "@/components/button.component";
import { Input } from "@/components/input.component";
import { RegistroHeader } from "@/components/registroheader.component";
import { PaginaComFundo } from "@/components/paginacomfundo.component";
import Link from "next/link";
import { User, Scissors, Mail, Phone, Lock, Award, ChevronDown } from "lucide-react";

export default function CadastroProfissional() {
  return (
    <PaginaComFundo>
      <div className="relative mt-2 flex w-full max-w-5xl flex-col px-4 sm:px-8">
        
        <RegistroHeader titulo="Registro do Profissional" mostrarVoltar={true} />

        <div className="mt-6 flex w-full flex-col items-center sm:mt-8">
          <div className="mb-6 flex w-full max-w-md flex-col gap-3 rounded-3xl border border-white/15 bg-[#3d281b]/30 p-4 shadow-xl backdrop-blur-sm sm:mb-8 sm:gap-4 sm:p-6">
            <Input type="text" placeholder="Nome completo" icone={User} />
            <Input type="text" placeholder="Nome profissional" icone={Scissors} />
            <Input type="email" placeholder="E-mail" icone={Mail} />
            <Input type="tel" placeholder="Telefone: (00) 0000-0000" icone={Phone} />
            <Input type="password" placeholder="Senha" icone={Lock} />
            <Input type="password" placeholder="Confirmar senha" icone={Lock} />

            <div className="relative flex items-center bg-[#8B6B4A] rounded-full px-4 py-2 border border-transparent cursor-pointer hover:bg-[#7A5C3D] transition-colors mt-2">
              <Award size={24} className="text-white/80 mr-3" />
              <div className="flex flex-col flex-1">
                <span className="text-white text-sm font-medium">Especialidade</span>
                <span className="text-white/70 text-[11px]">Selecione a área de atuação</span>
              </div>
              <ChevronDown size={20} className="text-white/80" />
            </div>

          </div>

          <div className="mt-2 w-full max-w-xs">
            <a href="../servicos">
              <Button>Criar conta</Button>
            </a>
          </div>

          <div className="mt-6 text-sm font-medium text-[#3D2C1E]">
            Já tem uma conta? <Link href="/login" className="font-bold hover:underline">Entrar</Link>
          </div>
        </div>
      </div>
    </PaginaComFundo>
  );
}