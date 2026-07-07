import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import logo from "/public/pago.png";


const HomePage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Bienvenidos nuevo mi sito web, Pueden buscar las fotos y me envian</h1>
      <img src={logo} alt="" width={400} className="pago" />
      <h2>Estoy editando después subo las fotos más tarde</h2>
    </div>
  );
};

export default HomePage;
