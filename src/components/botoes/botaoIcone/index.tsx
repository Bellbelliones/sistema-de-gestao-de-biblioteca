import type { ReactNode } from "react";
import "./index.css"
type BotaoIconeProps =
{
    texto: string;
    icone: ReactNode;
    key: string;
    onClick?: () => void;
};

export default function BotaoIcone({texto, icone, key, onClick, }: BotaoIconeProps)
{
    return(
        <button className="botao-icone" key={key} onClick={onClick}>
            <span className="icone">{icone}</span>
            <span className="texto">{texto}</span>
        </button>
    )
}