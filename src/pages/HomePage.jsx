import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import logo from "/public/pago.png";
import jineteada from "/public/jineteada.JPG";


const HomePage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Bienvenidos nuevo mi sito web, Pueden buscar las fotos y me envian</h1>
      <img src={jineteada} alt="" width={400} className="pago" />
      <img src={logo} alt="" width={400} className="pago" />
    </div>
  );
};

export default HomePage;
