import { FiLock } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";


import "./index.css";

const InputUsuario = () => {
  return (
    <div className="organizaCorpoInput">
        <div className="corpoInput">
            <div> <FiLock size={22} /></div>
            <div><input type="password" placeholder={"********"}/></div>
            <div><FiEyeOff size={22} /></div>
            

        </div>
    </div>
  );
}

export default InputUsuario;
