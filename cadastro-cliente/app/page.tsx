import Button from "./components/button.component";
import Input from "./components/input.component";
import Link from "next/link";
import Image from "next/image";

export default function CadastroCliente() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-10">
      <div className="w-full max-w-5xl flex flex-col relative mt-4">
        <div className="flex justify-between items-center w-full mb-12">
          <Image 
            src="/logotipo.png"
            alt="Logo BarbeWeb"
            width={180}
            height={50}
            priority
          />

          <Link 
            href="/" 
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm font-medium transition backdrop-blur-sm"
          >
            &lt; Voltar
          </Link>
        </div>

        <h2 className="text-4xl text-center mb-16 text-white font-bold tracking-wide">
          Registro
        </h2>

        <div className="grid grid-cols-2 gap-x-24 gap-y-6 w-full max-w-4xl mx-auto mb-10">
          <div className="flex flex-col gap-6">
            <Input type="email" placeholder="@ E-mail" />
            <Input type="password" placeholder="🔒 Senha" />
            <Input type="text" placeholder="📝 CPF: 000.000.000-00" />
          </div>
          <div className="flex flex-col gap-6">
            <Input type="text" placeholder="👤 Nome" />
            <Input type="text" placeholder="📍 CEP: 00000-000" />
            <Input type="tel" placeholder="📞 (00) 0000-00000" />
          </div>
        </div>

        <div className="w-48 mx-auto">
          <Button>Registrar-se</Button>
        </div>

      </div>
    </main>
  );
}