"use client";

import { useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "./input.component";
import { Button } from "./button.component";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/escolhausuario");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
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