import type { ReactNode } from "react";

export function PaginaComFundo({ children }: { children: ReactNode }) {
  return <main className="pagina-fundo">{children}</main>;
}