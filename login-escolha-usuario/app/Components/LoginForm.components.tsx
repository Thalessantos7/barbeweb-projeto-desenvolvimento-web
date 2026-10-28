"use client";

import { useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "./Input.components";
import { Button } from "./Button.components";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/EscolhaUsuario");
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

      <Link href="/EscolhaUsuario" className="login-link">
        Registre-se
      </Link>
    </>
  );
}