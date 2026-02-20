import InputUsuario from "../../input/email/index"
import InputSenha from "../../input/senha/index"
import BotaoSessao from "../../botoes/sessao/index";

import "./index.css"
import logo from"../../../IMG/a317b56fbd850e90c8a3c9c61bf319e13531038e(2).png"

const Formulario = () =>
{
    return(
        <>
        <div className="corpoFormulario">
            <div className="subcorpo">
                <h1 className="logo">
                    <img src={logo} alt="" />
                </h1>
                <form action="">
                    <InputUsuario/>
                    <br />
                    <InputSenha />
                    <br />
                    <div className="esqueceuSen">
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span>Lembrar</span>
                        </div>
                        <div>
                            <a href="">Esqueceu a senha?</a>
                        </div>
                    </div>
                    <br />
                    <BotaoSessao titulo="Entrar"/>
                    <div className="cadastrase">Não é membro? <a href="">Cadastra-se agora</a></div>
                </form>
            </div>
        </div>
        </>
    );
}


export default Formulario;