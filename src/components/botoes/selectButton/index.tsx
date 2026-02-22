import { useState } from "react";
import type { ReactNode } from "react";
import BotaoIcone from "../botaoIcone";

type SelectButtonProps = {
    titulo: string;
    icone: ReactNode[];
    itens: string[];
    open: boolean;             // estado controlado externamente
    onToggle: () => void;      // função chamada ao clicar no botão
};

export function SelectButton({ titulo, itens,icone, open, onToggle }: SelectButtonProps) {
  

  return (
    <div style={{ width: "100%" , marginBottom: "3px"}}>
      {/* BOTÃO PRINCIPAL */}
      <button
        onClick={onToggle} 
        style={styles.mainButton}
      >
        {titulo}
      </button>
      {/* LISTA */}
      {open && (
        <div style={styles.listaBotoes}>
          {itens.map((item, index) => (
            <BotaoIcone
              key={item}
              texto={item}
              icone={icone[index]} // pega o ícone correspondente
              onClick={() => alert(`Clicou em ${item}!`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  mainButton: {
   
    width: "100%",
    padding: "12px 20px",
    border: "none",
    fontsize: "10px",
    background: "#223EA6",
    color: "white",
    marginbottom: "-10px",
    cursor: "pointer",
    textAlign: "left" as const,
  },
  listaBotoes: {
    margin: "3px 0px 0px 0px",
  },
};