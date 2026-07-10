import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Estoy editando después subo las fotos más tarde o mañana",
      img: "https://photos.google.com/share/AF1QipNyMdA-gdskrfQ-DGxPKZVBa7PSPjYl8PE3X1dz8YVZDCqR7Qqm4n3fSqQ0KYYqCQ/photo/AF1QipN1-fKBMNMLcNBoGbspLZMeuJGelPA2_rgjDt1o?key=bFFDVXNOS2F1LVZUMXFIRkNZU1BKZzBqeTBHRmtB",
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
