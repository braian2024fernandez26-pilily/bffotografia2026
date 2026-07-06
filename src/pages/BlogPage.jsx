import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
    {
      id: "1",
      name: "Captura de pantalla",
      img: "https://photos.google.com/share/AF1QipNFEvhexBBPxKsLB2kg94HdYfqjSIM05kJX4LcepNxpfQwmVMF6beG8iZaKm_LYGQ/photo/AF1QipMidDs8XwmAVMYpSyu6GGvnnZ6e9sLT4q97TQvY?key=amFsZlVxZzBUU09QWUtiMVBPVi00U3c1c09XeXFn",
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
