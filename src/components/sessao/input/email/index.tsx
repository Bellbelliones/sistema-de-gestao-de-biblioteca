import { FiUser } from "react-icons/fi";
import "./index.css";

const InputSenha = () => {
  return (
    <div className="organizaCorpoInput">
        <div className="corpoInput">
            <div><FiUser size={22} /></div>
            <div><input type="email" placeholder={"USUÁRIO"}/></div>
        </div>
    </div>
  );
}

export default InputSenha;
