//Importações React
import { useState } from "react";

//submenus
import  TopBar  from "../../components/topbar";

//Botões
import BotaoIcone from "../../components/botoes/botaoIcone";
import { SelectButton } from "../../components/botoes/selectButton";

//icones
import { FiClipboard } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { RiBookOpenLine } from "react-icons/ri";
import { FaTh } from "react-icons/fa";
import { TbLayoutGrid } from "react-icons/tb"
import { RiHandCoinLine } from "react-icons/ri";
import { RiRefund2Line } from "react-icons/ri";
import { RiBook2Line } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { MdSettingsBackupRestore } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { RiBookmarkLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";

import "./index.css"

const HomePage = () =>
{
    //constantes para a vizualização das listbox
    const [aberto, setAberto] = useState<number | null>(null); // qual SelectButton está aberto

    const toggleButton = (index: number) => {
        setAberto(prev => (prev === index ? null : index)); // fecha se clicar no mesmo
    };
    //----------------
    //Designação dos botões
    const botoes = [
        {
        titulo: "GESTÃO DE ACERVO",
        itens: ["Livros", "Autores", "Categorias"],
        icones: [<RiBookOpenLine size={24} />, <RiGroupLine size={22} />, <TbLayoutGrid size={24}/>]
        },
        {
        titulo: "GESTÃO DE EMPRÉSTIMOS",
        itens: ["Empréstimo","Devoluções", "Reservas", "Renovação"],
        icones: [<FaHandsHoldingCircle />, <RiHandCoinLine />, <RiBookmarkLine />, <MdSettingsBackupRestore />]
        },
        {
        titulo: "GESTÃO DE RECURSOS",
        itens: ["---", "---", "---"],
        icones: [<FiClipboard />, <FiBarChart2 />, <RiMoneyDollarCircleLine />]
        }
    ]
    //----------------



    
    const itens = ["Apple", "Android", "Windows"];
    const icones = [<RiGroupLine />, <RiGroupLine />, <RiGroupLine />];
    return(
        <>
            <div className="header">
                <TopBar 
                    nomeSistema="Sistema Integrado de Gestão de Biblioteca"
                    logo="./logo.png"
                    instituicao="IPSTEC"
                    perfilImagem="./logo.png"
                    usuario="Nellma Basílio"
                />
            </div>
            <div className="main">
                <div className="aside">
                    <div className="botoesArea">
                        <BotaoIcone key={"DASHBOARD"} texto="DASHBOARD" icone={<FiBarChart2 size={22} />} onClick={() => alert("Clicou!")}/>
                        <BotaoIcone key={"RELATÓRIO"} texto="RELATÓRIO" icone={<FiClipboard size={22} />} onClick={() => alert("Clicou!")}/>

                        {botoes.map((botao, index) => (
                            <SelectButton
                                 key={botao.titulo}
                                titulo={botao.titulo}
                                itens={botao.itens}
                                icone={botao.icones}
                                open={aberto === index}       // apenas o botão selecionado abre
                                onToggle={() => toggleButton(index)}
                            />
                        ))}

                        <BotaoIcone key={"MULTAS"} texto="MULTAS" icone={<RiMoneyDollarCircleLine size={22} />} onClick={() => alert("Clicou!")}/>
                        <BotaoIcone key={"CONTROLE DE ACESSO"} texto="CONTROLE DE ACESSO" icone={<RiGroupLine size={22} />} onClick={() => alert("Clicou!")}/>
                    </div>
                    <div className="loginArea">
                        <div>
                            <img src="./logo.png" alt="" />
                        </div>
                        <div>
                            <RiLogoutBoxRLine size={20} color="#FFCC00"/>
                        </div>
                    </div>
                    
                </div>
                <div className="aside">2</div>
            </div>
            
        </>
    )
};

export default HomePage;

