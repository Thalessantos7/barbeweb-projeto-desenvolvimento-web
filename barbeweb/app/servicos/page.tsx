import Link from "next/link";
import { LogoBarbeWeb } from "../Components/logobarbeweb.component";
import { User } from "lucide-react";
import { ImagemCard } from "../Components/imagemCard.component";

import corteCabeloImg from "../Assets/imagensServicos/corteDeCabelo.jpg";
import sobrancelhaImg from "../Assets/imagensServicos/sobrancelha.png";
import barbaImg from "../Assets/imagensServicos/barba.png";
import alinhamentoImg from "../Assets/imagensServicos/alinhamento.png";

export default function VisualizacaoDeServicosPage() {
    //CONTÉM LINKS PRA DEFINIR NAS "hrefs"!
    return (
            <div id="fundo" className="pagina-fundo flex min-h-screen flex-col items-center py-12 px-10">
                <div id="container" className="flex flex-col w-383 h-248 max-w-full">
                    <div id="topo" className="flex justify-between items-center w-full mb-12">
                        <LogoBarbeWeb/>

                        <Link
                            href=""
                            className="bg-gray-300 hover:bg-gray-200 w-14 h-16 rounded-full flex items-center justify-center "
                        >
                            <User className="text-black w-7 h-8"/>
                        </Link>
                    </div>
                    <div id="subTopo" className="flex justify-between items-center w-full mb-12">
                        <span className="text-4xl ml-4 text-barbe-areia">Serviços:</span>

                        <Link
                            href=""
                            className="bg-gray-300 hover:bg-gray-200  px-4 py-4 rounded-full text-black items-center justify-center"
                        >
                            Agendamento
                        </Link>
                    </div>
                    <div id="imagens" className="flex-1 flex flex-col">
                        <div id="primeiraLinha" className="flex flex-row justify-between mb-8">
                            <a href="">
                                <ImagemCard backgroundImage={corteCabeloImg.src} texto="Corte de cabelo"/>
                            </a>
                            <a href="">
                                <ImagemCard backgroundImage={sobrancelhaImg.src} texto="Sobrancelha"/>
                            </a>
                            
                            
                        </div>
                        <div id="segundaLinha" className="flex flex-row justify-between">
                            <a href="">
                                <ImagemCard backgroundImage={barbaImg.src} texto="Barba"/>
                            </a>
                            <a href="">
                                <ImagemCard backgroundImage={alinhamentoImg.src} texto="Alinhamento capilar e redução de volume"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

    )
}