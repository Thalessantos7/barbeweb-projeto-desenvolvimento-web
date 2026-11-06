type BotaoProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Botao({ children, onClick }: BotaoProps) {
  return (
    <button className="botao" onClick={onClick}>
      {children}
    </button>
  );
}