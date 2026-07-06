import React from "react";
import { useParams } from "react-router-dom";
import Detalle from "../components/Detalle";
import HeaderComponent from "../components/HeaderComponent";

function PostDetalis() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Detalle></Detalle>
    </div>
  );
}

export default PostDetalis;
