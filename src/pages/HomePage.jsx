import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import logo from "/public/pago.png";
import jineteada from "/public/jineteada.jpg";

const HomePage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Bienvenidos nuevo mi sito web, Pueden buscar las fotos y me envian</h1>
      <img src={jineteada} alt="" width={400} className="pago" />
      <img src={logo} alt="" width={400} className="pago" />
      <p>&copy; 2026 <b>BF Fotografia Gober,Castro</b></p>
      <p>Publicado: 7 de Julio</p>
    </div>
  );
};

export default HomePage;
