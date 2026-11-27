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
        <div id="fundo" className="pagina-fundo servicos-div">
            <div id="container" className="servicos-div2">
                <div id="topo" className="servicos-div3">
                    <span className="text-4xl ml-4 text-barbe-areia">Serviços:</span>
                </div>

                <div id="imagens" className="flex-1 flex flex-col">
                    <div id="primeiraLinha" className="servicos-div4">
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