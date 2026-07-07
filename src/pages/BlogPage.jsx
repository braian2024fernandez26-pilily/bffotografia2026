import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Estoy editando después subo las fotos más tarde",
      img: "https://lh3.googleusercontent.com/pw/AP1GczOoBo8-LNtw7sb0cMj5sTSz7qIFG6idGbNTpT5BseKBi-gqrLQBINrDaZJHbFmBHjpUZgZ1SyW5_27xJwHFq5Mc8Fy7PE7jBmn3ewQFrUHFkrQ1d5Lm2eno9qSzEZJ_4JfY8Ndxm4VtV9ifNUJghW2u=w360-h240-s-no-gm?authuser=0",
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
