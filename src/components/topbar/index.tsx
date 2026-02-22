import { HiOutlineBell } from "react-icons/hi";
import "./index.css"

interface TopBarProps{
    nomeSistema: string,
    logo       : string,
    instituicao: string,
    perfilImagem: string,
    usuario    : string,
};
const TopBar = (props:TopBarProps) =>
{
    return(
        <>
            <div className="headerContainer">
                <div className="container">
                    <div className="side">
                        <div>
                            <h5>{props.nomeSistema}</h5>
                        </div>
                        <div>
                            <img src={props.logo} alt="" className="imagem" />
                        </div>
                        <div>|</div>
                        <div>
                            {props.instituicao} 
                        </div>
                    </div>
                    <div className="side">
                        <div>
                            <HiOutlineBell size={40} color="white"/>
                        </div>
                        <div>
                            <img src={props.perfilImagem} alt="" className="imagem" />
                        </div>
                        <div>
                            {props.usuario}
                        </div>
                        <div>
                            <select >
                                <option></option>
                                <option>Livro 1</option>
                                <option>Livro 2</option>
                                <option>Livro 3</option>
                                <option>Livro 4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;