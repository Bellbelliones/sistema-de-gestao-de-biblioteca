import { FiUser } from "react-icons/fi";
import "./index.css";

const InputUsuario = () => {
  return (
    <div className="organizaCorpoInput">
        <div className="corpoInput">
            <div><FiUser size={22} /></div>
            <div><input type="text" placeholder={"USUÁRIO"}/></div>
        </div>
    </div>
  );
}

export default InputUsuario;
