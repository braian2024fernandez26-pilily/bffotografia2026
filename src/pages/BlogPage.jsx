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
