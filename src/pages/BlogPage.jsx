import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
id: "1",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOch6_dXuiuyadZEOqA5HcER-epRKxi9WvD2pGjh_0nvVZMwYt7RPxlckb9WYoaCDqKKevtItmXL3lgfyj7axGAT8TNsRDfkEOzrHcKA5t71pEVg1vHHy3x8xj1RB0-OVqZjOqcZufeYFX_F5tJxhjs=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "2",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMgPjd7bGjWh9NMmUNrZfsBrm5GDn9mxYV-rkRKcLkGjL9wePaXXP725tkjwV3G8zLy9RTjyAadLeP2hbGs77sQTBta4N77JzavlTswzNY8hG_qndO6SDbo3HRf9ARq1dwy9HykwwT1LmAGTGlLe3HX=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "3",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczP46NVwcVgp7EHZJuzAULJ4Rf-dOUZr2EUp9t_xPyOqB0Wh3uWezF8tu_ym9-aaTUj6GaCZRUqNSVPgxDTlij8xQapjOYjt3gStAqWmA30ChQGIBtcZCewJR3othF7SR0xHduTHMi7GS4a4XY9nHzsX=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "4",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMcjzyyNpSauenTngnhSbhpptIi4oEV-TUiClyqhnfiPpN6c3li6q1BPMUaPPBZNOD54s_Q2L9X-ptYhynj-FagTu4--yV7rJ305US4zbkMgkYQ7fG2VcEPzm1O55m0T1SZgu6p8ffLVCDCaTjFaTSM=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "5",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczM4vMjB-t_1-JJ-pUx4OM7TbiybGgPNiTr7E03Qpkyi45fIKNRXqI90D7ya5NblH5jWnilFb4OPviB138xrZpzWCNmb4QySSm9rSL1KIQ-xoBB1NeF1KgRJ7odlE0ysD9VEk3eSvZ22C8wVPOWS1YCs=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},

  ];

  const postCard = sordos.map((sord) => {
    return (
      <li key={sord.id}>
        <PostCard sord={sord}></PostCard>
      </li>
    );
  });
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      {postCard} 
    </div>
  );
};

export default BlogPage;
