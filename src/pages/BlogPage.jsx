import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Captura de pantalla",
      img: "/public/logo.png",
      title: "Comprar Foto",
    },
    {
      id: "2",
      name: "Captura de pantalla",
      img: "/public/skate.jpg",
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
