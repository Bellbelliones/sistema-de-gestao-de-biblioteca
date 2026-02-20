import InputUsuario from "../../components/sessao/input/usuario"
import InputEmail from "../../components/sessao/input/email"
import InputSenha from "../../components/sessao/input/senha"
import InicarCom from "../../components/iniciarCom";
import BotaoSessao from "../../components/sessao/botoes/sessao";

import "./index.css"
import logo from"/logo.png"

const FormularioCadastro = () =>
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
                    <InputEmail />
                    <br />
                    <InputSenha />
                    <br />
                    <div className="iniciarCom">
                        <InicarCom />
                    </div>
                    <br />
                    <BotaoSessao titulo="Registar"/>
                </form>
            </div>
        </div>
        </>
    );
}


export default FormularioCadastro;