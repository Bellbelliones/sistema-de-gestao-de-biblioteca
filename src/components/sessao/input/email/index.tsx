import { AiOutlineMail } from "react-icons/ai";
import "./index.css";

const InputEmail = () => {
  return (
    <div className="organizaCorpoInput">
        <div className="corpoInput">
            <div><AiOutlineMail size={22} /></div>
            <div><input type="email" placeholder={"E-mail"}/></div>
        </div>
    </div>
  );
}

export default InputEmail;
