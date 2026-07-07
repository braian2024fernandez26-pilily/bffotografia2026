import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Estoy editando después subo las fotos más tarde",
      img: "https://photos.fife.usercontent.google.com/pw/AP1GczOSTGyU63n8LlVTV0Oxz2w4Ou00IWDN-Ioj0oQ2bDYmlhDG9LzQ_hIl=w360-h240-s-no-gm?authuser=0",
      // title: "Comprar Foto",
    },
  //   {
  //     id: "2",
  //     name: "Captura de pantalla",
  //     img: "",
  //     title: "Comprar Foto",
  //   },
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
