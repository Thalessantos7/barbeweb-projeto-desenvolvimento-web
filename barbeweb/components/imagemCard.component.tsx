interface imagemCardProps {
    backgroundImage: string;
    texto: string;
}

export function ImagemCard({ backgroundImage, texto }: imagemCardProps) {
    return (
         <div
            className="w-lg h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat bg-black"
            style={{ 
                backgroundImage: `linear-gradient(rgba(210, 180, 140, 0.45), rgba(210, 180, 140, 0.45)), url(${backgroundImage})`,
                backgroundBlendMode: 'dst-in'
            }}
        >
            <h1 className="text-white text-4xl text-center whitespace-pre-line">
                {texto}
            </h1>
        </div>
    )
}