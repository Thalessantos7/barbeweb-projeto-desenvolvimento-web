import type { ButtonHTMLAttributes } from "react";

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="botao-principal" {...props}>
      {children}
    </button>
  );
}