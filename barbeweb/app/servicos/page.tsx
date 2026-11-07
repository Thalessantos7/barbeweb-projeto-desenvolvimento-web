import Link from "next/link";
import { LogoBarbeWeb } from "../Components/logobarbeweb.component";
import { PaginaComFundo } from "../Components/paginacomfundo.component";
import { User } from "lucide-react";

export default function VisualizacaoDeServicosPage() {
    return (
            <div id="fundo" className="pagina-fundo flex min-h-screen flex-col items-center py-12 px-10">
                <div id="container" className="flex flex-col w-383 h-248 max-w-full">
                    <div id="topo" className="flex justify-between items-center w-full mb-12">
                        <LogoBarbeWeb/>

                        <Link
                            href="/perfil"
                            className="bg-gray-300 hover:bg-gray-200 w-14 h-16 rounded-full flex items-center justify-center "
                        >
                            <User className="text-black w-7 h-8"/>
                        </Link>
                    </div>
                    <div id="subTopo"></div>
                    <div id="imagens">
                        <div id="primeiraLinha"></div>
                        <div id="segundaLinha"></div>
                    </div>
                </div>
            </div>

    )
}