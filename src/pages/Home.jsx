// src/pages/Home.jsx
import React from "react";
import IntroSection from "../components/IntroSection";
import ItemListContainer from "./ItemListContainer";

function Home() {
  return (
    <div>
      <ItemListContainer greeting="Bienvenidos a Experiencias Locales" />
    </div>
  );
}

export default Home;
