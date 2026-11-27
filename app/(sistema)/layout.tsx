import Menu from "@/components/menu.component";

export default function SistemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu/>
      {children}
    </>
  );
}