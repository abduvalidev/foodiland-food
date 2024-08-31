import React from "react";
import CardImag1 from "../../assets/burgeer.png";
import CardImag2 from "../../assets/cardmeat.png";
import TimerSvg from "../../assets/timer.svg";
import ForkKnife from "../../assets/forkKnife.svg";

export default function Recipes() {
  const cards = [
    {
      img: CardImag1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      dishName: "Snack",
    },
    {
      img: CardImag2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      dishName: "Fish",
    },
    {
      img: CardImag1,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      dishName: "Breakfast",
    },
    {
      img: CardImag1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      dishName: "Healthy",
    },
    {
      img: CardImag2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      dishName: 'Meat'
    },
    {
      img: CardImag1,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
    {
      img: CardImag1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      dishName: "Snack",
    },
    {
      img: CardImag2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      dishName: "Sweet",
    },
    {
      img: CardImag1,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      dishName: "Snack",
    },
  ];
  return (
    <section id="recipe" className="mt-8 md:mt-16 lg:mt-32 xl:mt-44">
      <div className="w-container">
        <div className="text-center">
          <h2>Simple and tasty recipes</h2>
          <p className="mt-4 md:mt-6">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mt-8 md:mt-16 lg:mt-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-brand-gray-200/0 to-brand-gray-200/100 relative rounded-[30px] p-4 space-y-4 md:space-y-6 group cursor-pointer transition duration-300 hover:shadow-lg"
            >
              <div className="bg-white w-8 md:w-12 h-8 md:h-12 rounded-full absolute z-10 top-12 right-9">

              </div>
              <div className="aspect-video md:aspect-[368/250] overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                  src={card.img}
                  alt="img"
                />
              </div>
              <h4 className="font-semibold text-lg md:text-2xl px-2">
                {card.title}
              </h4>
              <div className="flex items-center gap-x-4 lg:gap-x-6 pb-4 px-2">
                <div className="flex items-center gap-x-2.5">
                  <img src={TimerSvg} alt="time" />
                  <span className="font-medium text-black/60 text-sm">
                    30 Minutes
                  </span>
                </div>
                <div className="flex items-center gap-x-2.5">
                  <img src={ForkKnife} alt="fork" />
                  <span className="font-medium text-black/60 text-sm">{card.dishName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
