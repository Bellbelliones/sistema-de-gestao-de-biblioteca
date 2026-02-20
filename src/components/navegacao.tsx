// src/components/Navegacao.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Navegacao: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => navigate("/login")} style={{ marginRight: "10px" }}>
        Login
      </button>
      <button onClick={() => navigate("/cadastrar")}>
        Cadastrar-se
      </button>
    </div>
  );
};

export default Navegacao;