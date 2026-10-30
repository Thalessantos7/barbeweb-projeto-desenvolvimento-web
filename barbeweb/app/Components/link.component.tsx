import Link from "next/link";
import type { ComponentProps } from "react";

export function BotaoLink({ children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link className="botao-principal botao-link" {...props}>
      {children}
    </Link>
  );
}