import Link from "next/link";
import { User } from "lucide-react";
import { ImagemCard } from "@/components/imagemCard.component";

import corteCabeloImg from "../Assets/imagensServicos/corteDeCabelo.jpg";
import sobrancelhaImg from "../Assets/imagensServicos/sobrancelha.png";
import barbaImg from "../Assets/imagensServicos/barba.png";
import alinhamentoImg from "../Assets/imagensServicos/alinhamento.png";
import Menu from "@/components/menu.component";

export default function VisualizacaoDeServicosPage() {
    return (
        <div id="fundo" className="pagina-fundo flex min-h-screen flex-col items-center py-12 px-10">
            <div id="container" className="flex flex-col w-383 h-248 max-w-full">
                <div id="topo" className="flex justify-between items-center w-full mb-12">
                    <span className="text-4xl ml-4 text-barbe-areia">Serviços:</span>
                </div>

                <div id="imagens" className="flex-1 flex flex-col">
                    <div id="primeiraLinha" className="flex flex-row justify-between mb-8">
                        <a href="/horarios">
                            <ImagemCard backgroundImage={corteCabeloImg.src} texto="Corte de cabelo" />
                        </a>

                        <a href="/horarios">
                            <ImagemCard backgroundImage={sobrancelhaImg.src} texto="Sobrancelha" />
                        </a>
                    </div>

                    <div id="segundaLinha" className="flex flex-row justify-between">
                        <a href="/horarios">
                            <ImagemCard backgroundImage={barbaImg.src} texto="Barba" />
                        </a>

                        <a href="/horarios">
                            <ImagemCard backgroundImage={alinhamentoImg.src} texto="Alinhamento capilar e redução de volume" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}