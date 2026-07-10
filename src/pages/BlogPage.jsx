import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Buenos dias, ubo las fotos la tarde",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPN5hcmQ3K9DTAmHTvTQvvxa4c7a1m7dTWHMEJrUpfqtaxq7pYq33iLk02ItsM3MBpHFUaltjv91iWvMicznNZFMEtfHINb8QUkihRzlawvlxjPRQZ0r5SOqfJpSJue91kY9WQqSSI7D6ND39U9ZAFY=w1388-h919-s-no-gm?authuser=0",
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
