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

3: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

4: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

5: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

6: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

7: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

8: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

9: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

10: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

11: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

12: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

13: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

14: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

15: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

16: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

17: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

18: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

19: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

20: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

21: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

22: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

23: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},


24: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

25: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

26: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

27: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

28: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

29: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

30: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
31: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

32: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
33: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
34: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
35: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
36: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
37: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
38: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
39: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
40: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
41: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
42: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
43: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
44: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
45: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
46: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
47: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
48: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
49: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
50: {
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
