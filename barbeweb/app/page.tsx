import Button from "./components/button.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* O mt-64 simula o espaço que os inputs vão ocupar e empurra o botão para baixo */}
      <div className="w-48 mt-64">
        <Button>Registrar-se</Button>
      </div>
    </main>
  );
}