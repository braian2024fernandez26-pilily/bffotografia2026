import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Estoy editando después subo las fotos más tarde",
      img: "https://photos.google.com/album/AF1QipMqgpQ-Lg9dx8pAF_33vqEx9pkySvT8VGcCB-ZL/photo/AF1QipO6P_jM9PuzDs0tvhEVMQP_jdsMPnQZHHOwkAFH",
      title: "Comprar Foto",
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
