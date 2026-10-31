import { Button } from "@/app/Components/button.component";
import { Input } from "@/app/Components/input.component";
import { RegistroHeader } from "@/app/Components/registroheader.component";
import { PaginaComFundo } from "@/app/Components/paginacomfundo.component";
import Link from "next/link";
import { User, Scissors, Mail, Phone, Lock, Award, ChevronDown } from "lucide-react";

export default function CadastroProfissional() {
  return (
    <PaginaComFundo>
      <div className="w-full max-w-5xl flex flex-col relative mt-4 px-6 sm:px-10">
        
        <RegistroHeader titulo="Registro do Profissional" mostrarVoltar={true} />

        <div className="flex flex-col items-center w-full mt-12">
          <div className="flex flex-col gap-4 w-full max-w-md mb-8">
            
            <Input type="text" placeholder="Nome completo" icon={<User size={20} />} />
            <Input type="text" placeholder="Nome profissional" icon={<Scissors size={20} />} />
            <Input type="email" placeholder="E-mail" icon={<Mail size={20} />} />
            <Input type="tel" placeholder="Telefone: (00) 0000-0000" icon={<Phone size={20} />} />
            <Input type="password" placeholder="Senha" icon={<Lock size={20} />} />
            <Input type="password" placeholder="Confirmar senha" icon={<Lock size={20} />} />

            <div className="relative flex items-center bg-[#8B6B4A] rounded-full px-4 py-2 border border-transparent cursor-pointer hover:bg-[#7A5C3D] transition-colors mt-2">
              <Award size={24} className="text-white/80 mr-3" />
              <div className="flex flex-col flex-1">
                <span className="text-white text-sm font-medium">Especialidade</span>
                <span className="text-white/70 text-[11px]">Selecione a área de atuação</span>
              </div>
              <ChevronDown size={20} className="text-white/80" />
            </div>

          </div>

          <div className="w-48 mt-2">
            <Button>Criar conta</Button>
          </div>

          <div className="mt-6 text-sm font-medium text-[#3D2C1E]">
            Já tem uma conta? <Link href="/login" className="font-bold hover:underline">Entrar</Link>
          </div>
        </div>
      </div>
    </PaginaComFundo>
  );
}