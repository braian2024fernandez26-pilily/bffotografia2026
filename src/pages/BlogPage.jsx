import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Captura de pantalla",
      img: "https://photos.app.goo.gl/b21y7nK2c2axyUdU7",
      title: "Comprar Foto",
    },
    {
      id: "2",
      name: "Captura de pantalla",
      img: "https://photos.app.goo.gl/ZTVe1EQP84vdFG8s9",
      title: "Comprar Foto",
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
