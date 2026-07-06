import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import PostDetalis from "./pages/PostDetalis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/blog" element={<BlogPage />}/>
      <Route path="/blog/:id/:name" element={<PostDetalis />} />
    </Routes>
  );
}

export default App;