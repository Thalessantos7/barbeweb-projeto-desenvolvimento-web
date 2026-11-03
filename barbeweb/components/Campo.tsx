import type { LucideIcon } from "lucide-react";

type CampoProps = {
  icone: LucideIcon;
  children: React.ReactNode;
};

export default function Campo({ icone: Icone, children }: CampoProps) {
  return (
    <div className="campo">
      <Icone size={24} />
      {children}
    </div>
  );
}