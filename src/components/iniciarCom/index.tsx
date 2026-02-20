import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import "./index.css"


const InicarCom = () =>
{
    return(
        <div className="container centralizar">
            <div className="subcontainer">
                <div>
                    <FcGoogle size={22} />
                </div>
                <div>
                    <FaFacebook size={20} color="#1877F2" />
                </div>
            </div>
            
        </div>
    );
}

export default InicarCom;