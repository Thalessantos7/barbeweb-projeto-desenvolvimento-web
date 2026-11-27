import Link from "next/link";

import barbaImg from "../Assets/imagensServicos/barba.png";
import Image from "next/image";

export default function PerfilPage() {
    //CONTÉM LINKS PRA DEFINIR NAS "hrefs"!
    return (
        <div id="fundo" className="pagina-fundo perfil-div">
            <div id="container" className="perfil-div2">
                <section id="topo" className="perfil-section">
                    <span className="text-4xl ml-4 text-barbe-areia">Perfil</span>

                    <Link
                        href="servicos"
                        className="perfil-link"
                    >
                        &lt; Voltar
                    </Link>
                </section>

                <section id="imagem" className="fperfil-section2">
                    <div id="imgContainer" className="perfil-section2-div">
                        <Image
                            src={barbaImg}
                            alt="imagem de perfil"
                            className="object-cover object-center"

                        />
                    </div>
                </section>

                <section id="infosPerfil" className="perfil-section3">
                    <span id="nome" className="campoInfoPerfil">
                        Fulano de tal
                    </span>

                    <span id="email" className="campoInfoPerfil">
                        fulano@hotmail.com
                    </span>

                    <span id="senha" className="campoInfoPerfil">
                        senha: *******
                    </span>

                    <a href="cadastro/cliente" className="w-xl pl-8 mb-6">
                        <span id="mudarSenha" className="perfil-span">
                            <i>Mudar senha!</i>
                        </span>
                    </a>

                    <Link
                            href="cadastro/cliente"
                            className="perfil-link2"
                        >
                            Atualizar perfil
                    </Link>

                    <Link
                            href="/"
                            className="perfil-link3"
                        >
                            Sair
                    </Link>
                </section>
            </div>
        </div>
    )
}