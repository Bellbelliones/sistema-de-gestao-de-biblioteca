import React from "react";
import { Routes, Route } from "react-router-dom";
import FormularioLogin from "./pages/Login";
import FormularioCadastro from "./pages/CadastrarSe";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<FormularioLogin />} />
      <Route path="/cadastrar" element={<FormularioCadastro />} />
    </Routes>
  );
};

export default AppRoutes;