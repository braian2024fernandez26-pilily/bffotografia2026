import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HeaderComponent.css";

const datosLocales = {
  1: {
    titulo: "Comprar Foto",
    desc: "Captura de pantalla enviar por WhatsApp",
  },
  2: {
    titulo: "Comprar Foto",
    desc: "Captura de pantalla enviar por WhatsApp",
  },
};

const Detalle = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const datosSeleccionados = datosLocales[id];
    setItem(datosSeleccionados);
  }, [id]);

  if (!item) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h1>{item.titulo}</h1>
      <p>{item.desc}</p>
      <img src={item.img} alt={item.titulo} className="foto" />
      <button>
        <a
          href="https://wa.me/543329326562?text=Te paso captura de pantalla"
          target="_blank"
        >
          3329326562
        </a>
      </button>
    </div>
  );
};

export default Detalle;
