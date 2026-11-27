"use client";

import { useState, type ElementType, type FormEvent, type HTMLInputTypeAttribute, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Award, ChevronDown, FileText, Lock, Mail, MapPin, Phone, Scissors, User } from "lucide-react";
import { Button } from "@/components/button.component";
import { Input } from "@/components/input.component";

type TipoCadastro = "cliente" | "profissional";

type CampoConfig = {
  nome: string;
  rotulo: string;
  placeholder: string;
  tipo?: HTMLInputTypeAttribute;
  icone: ElementType;
  autoComplete?: string;
};

type CampoCadastroProps = {
  campo: CampoConfig;
  valor: string;
  aoAlterar: (valor: string) => void;
};

const camposClienteEsquerda: CampoConfig[] = [
  { nome: "email", rotulo: "E-mail", placeholder: "E-mail", tipo: "email", icone: Mail, autoComplete: "email" },
  { nome: "senha", rotulo: "Senha", placeholder: "Senha", tipo: "password", icone: Lock, autoComplete: "new-password" },
  { nome: "cpf", rotulo: "CPF", placeholder: "CPF: 000.000.000-00", icone: FileText },
];

const camposClienteDireita: CampoConfig[] = [
  { nome: "nome", rotulo: "Nome", placeholder: "Nome", icone: User, autoComplete: "name" },
  { nome: "cep", rotulo: "CEP", placeholder: "CEP: 00000-000", icone: MapPin, autoComplete: "postal-code" },
  { nome: "telefone", rotulo: "Telefone", placeholder: "(00) 0000-00000", tipo: "tel", icone: Phone, autoComplete: "tel" },
];

const camposProfissional: CampoConfig[] = [
  { nome: "nomeCompleto", rotulo: "Nome completo", placeholder: "Nome completo", icone: User, autoComplete: "name" },
  { nome: "nomeProfissional", rotulo: "Nome profissional", placeholder: "Nome profissional", icone: Scissors },
  { nome: "email", rotulo: "E-mail", placeholder: "E-mail", tipo: "email", icone: Mail, autoComplete: "email" },
  { nome: "telefone", rotulo: "Telefone", placeholder: "Telefone: (00) 0000-0000", tipo: "tel", icone: Phone, autoComplete: "tel" },
  { nome: "senha", rotulo: "Senha", placeholder: "Senha", tipo: "password", icone: Lock, autoComplete: "new-password" },
  { nome: "confirmarSenha", rotulo: "Confirmar senha", placeholder: "Confirmar senha", tipo: "password", icone: Lock, autoComplete: "new-password" },
];

const especialidades = ["Barbeiro", "Cabeleireiro(a)", "Colorista", "Outra especialidade"];

function CampoCadastro({ campo, valor, aoAlterar }: CampoCadastroProps) {
  return (
    <Input
      type={campo.tipo ?? "text"}
      name={campo.nome}
      placeholder={campo.placeholder}
      aria-label={campo.rotulo}
      autoComplete={campo.autoComplete}
      required
      value={valor}
      onChange={(event) => aoAlterar(event.target.value)}
      icone={campo.icone}
    />
  );
}

function CampoEspecialidade({
  valor,
  aoAlterar,
}: {
  valor: string;
  aoAlterar: (valor: string) => void;
}) {
  return (
    <div className="cadastroForm-div">
      <Award size={24} className="text-white/80 mr-3" />
      <div className="flex flex-col flex-1">
        <span className="text-white text-sm font-medium">Especialidade</span>
        <span className="text-white/70 text-[11px]">{valor || "Selecione a área de atuação"}</span>
      </div>
      <ChevronDown size={20} className="text-white/80" />
      <select
        aria-label="Especialidade"
        className="cadastroForm-select"
        name="especialidade"
        required
        value={valor}
        onChange={(event) => aoAlterar(event.target.value)}
      >
        <option value="">Selecione a especialidade</option>
        {especialidades.map((opcao) => (
          <option key={opcao} value={opcao}>{opcao}</option>
        ))}
      </select>
    </div>
  );
}

export function CadastroForm({
  tipo,
  children,
}: {
  tipo: TipoCadastro;
  children?: ReactNode;
}) {
  const router = useRouter();
  const [dados, setDados] = useState<Record<string, string>>({});
  const [especialidade, setEspecialidade] = useState("");

  function atualizarCampo(nome: string, valor: string) {
    setDados((atuais) => ({ ...atuais, [nome]: valor }));
  }

  function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/login");
  }

  if (tipo === "cliente") {
    return (
      <form className="w-full" onSubmit={enviarFormulario}>
        <div className="cadastroForm-div2">
          <div className="flex flex-col gap-4 sm:gap-5">
            {camposClienteEsquerda.map((campo) => (
              <CampoCadastro
                key={campo.nome}
                campo={campo}
                valor={dados[campo.nome] ?? ""}
                aoAlterar={(valor) => atualizarCampo(campo.nome, valor)}
              />
            ))}
          </div>

          <div className="cadastroForm-div3">
            {camposClienteDireita.map((campo) => (
              <CampoCadastro
                key={campo.nome}
                campo={campo}
                valor={dados[campo.nome] ?? ""}
                aoAlterar={(valor) => atualizarCampo(campo.nome, valor)}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs">
          <Button type="submit">Criar conta</Button>
        </div>
        {children}
      </form>
    );
  }

  return (
    <form className="cadastroForm-form" onSubmit={enviarFormulario}>
      <div className="cadastro-div4">
        {camposProfissional.map((campo) => (
          <CampoCadastro
            key={campo.nome}
            campo={campo}
            valor={dados[campo.nome] ?? ""}
            aoAlterar={(valor) => atualizarCampo(campo.nome, valor)}
          />
        ))}
        <CampoEspecialidade valor={especialidade} aoAlterar={setEspecialidade} />
      </div>

      <div className="mt-2 w-full max-w-xs">
        <Button type="submit">Criar conta</Button>
      </div>
      {children}
    </form>
  );
}
