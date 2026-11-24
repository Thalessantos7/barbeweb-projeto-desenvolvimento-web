interface imagemCardProps {
    backgroundImage: string;
    texto: string;
}

export function ImagemCard({ backgroundImage, texto }: imagemCardProps) {
    return (
         <div
            className="imagemCard-div"
            style={{ 
                backgroundImage: `linear-gradient(rgba(210, 180, 140, 0.45), rgba(210, 180, 140, 0.45)), url(${backgroundImage})`,
                backgroundBlendMode: 'dst-in'
            }}
        >
            <h1 className="imagemCard-h1">
                {texto}
            </h1>
        </div>
    )
}