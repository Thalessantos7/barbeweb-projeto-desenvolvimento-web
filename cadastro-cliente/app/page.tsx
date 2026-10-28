import Button from "./components/button.component";
import Input from "./components/input.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <div className="grid grid-cols-2 gap-x-24 gap-y-6 w-full max-w-4xl mb-10">
          
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
        
        <div className="w-48">
          <Button>Registrar-se</Button>
        </div>
      </div>
    </main>
  );
}