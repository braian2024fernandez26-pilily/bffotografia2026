import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import logo from "/public/pago.png";


const HomePage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Bienvenidos nueva mi sito web, Pueden buscar fotos me enviame</h1>
      <img src={logo} alt="" width={400} className="pago" />
      <h2>Estoy editando después subio las fotos más tarde</h2>
    </div>
  );
};

export default HomePage;
