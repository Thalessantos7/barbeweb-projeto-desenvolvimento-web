import Link from "next/link";

import barbaImg from "../Assets/imagensServicos/barba.png";
import Image from "next/image";

export default function PerfilPage() {
    //CONTÉM LINKS PRA DEFINIR NAS "hrefs"!
    return (
        <div id="fundo" className="pagina-fundo flex min-h-screen flex-col items-center py-12 px-10">
            <div id="container" className="flex flex-col w-383 h-248 max-w-full">
                <section id="topo" className="flex justify-between items-center w-full mb-12">
                    <span className="text-4xl ml-4 text-barbe-areia">Perfil</span>

                    <Link
                        href="/servicos"
                        className="whitespace-nowrap rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/30 sm:px-5 sm:text-sm"
                    >
                        &lt; Voltar
                    </Link>
                </section>

                <section id="imagem" className="flex justify-center items-center mb-12">
                    <div id="imgContainer" className="rounded-full overflow-hidden w-48 h-50 border-none">
                        <Image
                            src={barbaImg}
                            alt="imagem de perfil"
                            className="object-cover object-center"

                        />
                    </div>
                </section>

                <section id="infosPerfil" className="flex flex-col items-center gap-6">
                    <span id="nome" className="campoInfoPerfil">
                        Fulano de tal
                    </span>

                    <span id="email" className="campoInfoPerfil">
                        fulano@hotmail.com
                    </span>

                    <span id="senha" className="campoInfoPerfil">
                        senha: *******
                    </span>

                    <a href="" className="w-xl pl-8 mb-6">
                        <span id="mudarSenha" className="text-2xl text-barbe-escuro hover:text-barbe-areia">
                            <i>Mudar senha!</i>
                        </span>
                    </a>

                    <Link
                            href=""
                            className="bg-black hover:bg-gray-900 px-4 py-4 w-72 rounded-full text-white flex items-center justify-center"
                        >
                            Atualizar perfil
                    </Link>

                    <Link
                            href=""
                            className="bg-red-700 hover:bg-red-600 px-4 py-4 w-72 rounded-full text-white flex items-center justify-center"
                        >
                            Sair
                    </Link>
                </section>
            </div>
        </div>
    )
}