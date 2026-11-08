"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "./input.component";
import { Button } from "./button.component";
import { Mail, Lock } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/escolhausuario");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          type="email"
          placeholder="E-mail"
          icone={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Input
          type="password"
          placeholder="Senha"
          icone={Lock}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </form>

      <Link href="/escolhausuario" className="login-link">
        Registre-se
      </Link>
    </>
  );
}