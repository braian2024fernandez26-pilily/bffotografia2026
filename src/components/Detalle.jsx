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
  img: "https://lh3.googleusercontent.com/pw/AP1GczOch6_dXuiuyadZEOqA5HcER-epRKxi9WvD2pGjh_0nvVZMwYt7RPxlckb9WYoaCDqKKevtItmXL3lgfyj7axGAT8TNsRDfkEOzrHcKA5t71pEVg1vHHy3x8xj1RB0-OVqZjOqcZufeYFX_F5tJxhjs=w1080-h720-s-no-gm?authuser=0"
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
  51: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
52: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
53: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
54: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
55: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
56: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
57: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
58: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
59: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
60: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
61: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
62: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
63: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
64: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
65: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
66: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
67: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
68: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
69: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
70: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
71: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
72: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
73: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

74: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
75: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
76: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
77: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},


78: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

79: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

80: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

81: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

82: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

83: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

84: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

85: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

86: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

87: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

88: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

89: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

90: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

91: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

92: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

93: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

94: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

95: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

96: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

97: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

98: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

99: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

100: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

101: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

102: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

103: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

104: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

105: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

106: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

107: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

108: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

109: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

110: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},

111: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
112: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
113: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
114: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
115: {
   titulo: "Comprar Foto",
   desc: "Captura de pantalla enviar por WhatsApp",
},
116: {
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
