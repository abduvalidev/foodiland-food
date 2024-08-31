import React from "react";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Recipes from "../components/Home/Recipes";
import Cooker from "../components/Home/Cooker";
import CheckOut from "../components/Home/CheckOut";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-container">
      <Categories />
      <Recipes />
      <Cooker />
      <CheckOut />
      </div>
    </div>
  );
}
