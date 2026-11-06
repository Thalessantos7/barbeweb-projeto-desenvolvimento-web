import Image from "next/image";

export function LogoBarbeWeb() {
  return (
    <div className="logo-barbeweb">
      <Image
        src="/logotipo.png"
        alt="Logo BarbeWeb"
        width={180}
        height={50}
        priority
      />
    </div>
  );
}