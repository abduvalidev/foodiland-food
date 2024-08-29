import React from "react";
import Breakfast from "../../assets/breakfast.svg"
import Vegan from "../../assets/vegan.svg"
import Meat from "../../assets/meat.svg"
import Dessert from "../../assets/dessert.svg"
import Lunch from "../../assets/lunch.svg"
import Chocolate from "../../assets/chocolate.svg"

export default function Categories() {
  const cards = [
    {
      icon: Breakfast,
      title: "Breakfast",
    },
    {
      icon: Vegan,
      title: "Vegan",
    },
    {
      icon: Meat,
      title: "Meat",
    },
    {
      icon: Dessert,
      title: "Dessert",
    },
    {
      icon: Lunch,
      title: "Lunch",
    },
    {
      icon: Chocolate,
      title: "Chocolate",
    },
  ];
  return (
    <>
      <section className="mt-8 md:mt-16 lg:mt-32 xl:mt-40">
        <div className="max-w-base mx-auto px-5 md:px-7 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-center xs:text-left">
            <h2 className="w-full xs:w-auto heading-2">Categories</h2>
            <button className="w-full xs:w-auto bg-brand-gray-200 rounded-2xl px-5 md:px-7 py-3 md:py-5">
              <span className="font-semibold">View All Categories</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center gap-5 gap-y-7 md:gap-10 mt-8 md:mt-16 lg:mt-20">
            {cards.map((card, index) => (
              <div key={index} className="relative h-40 md:h-52 flex items-end">
                <img className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 absolute top-0 left-1/2 -translate-x-1/2 drop-shadow-right" src={card.icon} alt="icon" />
                <div className="w-full h-36 bg-gradient-to-b from-[#708246]/0 to-[#708246]/10 rounded-[30px] flex items-end py-5 md:py-8">
                  <h5 className="w-full font-semibold text-center md:text-lg line-clamp-1">{card.title}</h5>
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>
    </>
  );
}
