
import "./index.css"

interface BotaoProps
{
    titulo: string,
}
const BotaoSessao = (props:BotaoProps) =>
{
    return(
        <>
            <div className="btnlogar">
                <button >{props.titulo}</button>    
            </div>
        </>
    );
}

export default BotaoSessao;