import Button from "@/app/components/button.component";
import Link from "next/link";

export default function CadastroProfissional() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 px-10">
      <div className="w-full max-w-md flex flex-col items-center mt-10">
        
        <div className="w-48">
          <Button>Criar conta</Button>
        </div>

        <div className="mt-4 text-sm font-medium text-[#3D2C1E]">
          Já tem uma conta? <Link href="/login" className="font-bold hover:underline">Entrar</Link>
        </div>

      </div>
    </main>
  );
}