import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Captura de pantalla",
      img: "https://lh3.googleusercontent.com/pw/AP1GczM_l_26di161wPPTdw-ig6DtZHiuCZjPsPK85VJqFyubVQBJWvMk9xadA4PuHIQxluSiBcJe-gUfNtIA_pokzML-VDAGLDGwD79eRGR3huQxUZNJVmBp6ugawzjAzT0I07EkAuH4JgUBiERhdWXyEFz=w720-h720-s-no-gm?authuser=0",
      title: "Comprar Foto",
    },
    {
      id: "2",
      name: "Captura de pantalla",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPv_hpkb1pkzFXNWXZeN7zHEOuJ-h6Z06H1rRyJRAGnZuqxts8uMRY4b9xQktqOPW37OQ5iBGLXUCaBrURi34hsYUVCD7lv6ZM6_ZdwH3rx5CmDkYUXPUx8zfKNV25owR9szL4YkpkY4HPrIdam5cCY=w735-h919-s-no-gm?authuser=0",
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
