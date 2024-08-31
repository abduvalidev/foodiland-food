import React from "react";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Recipes from "../components/Home/Recipes";
import Cooker from "../components/Home/Cooker";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Recipes />
      <Cooker />
    </div>
  );
}
