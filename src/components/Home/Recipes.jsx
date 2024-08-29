import React from "react";
import CardImag1 from "../../assets/burgeer.png";
import CardImag2 from "../../assets/cardmeat.png";
import TimerSvg from "../../assets/timer.svg";

export default function Recipes() {
  const cards = [
    {
      img: CardImag1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
      img: CardImag2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    },
    {
      img: CardImag1,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
    {
      img: CardImag1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
      img: CardImag2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    },
    {
      img: CardImag1,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
    {
      img: CardImag1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
      img: CardImag2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    },
    {
      img: CardImag1,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
  ];
  return (
    <section className="mt-8 md:mt-16 lg:mt-32 xl:mt-44 pb-10">
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
            <div className="bg-gradient-to-b from-brand-gray-200/0 to-brand-gray-200/100 rounded-[30px] p-4 space-y-4 md:space-y-6">
              <div className="aspect-video md:aspect-[368/250] overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={card.img}
                  alt="img"
                />
              </div>
              <h4 className="font-semibold text-lg md:text-2xl px-2">
                {card.title}
              </h4>
              <div className="pb-4 px-2">
                <div className="flex items-center gap-x-2.5">
                  <img src={TimerSvg} alt="time" />
                  <span className="font-medium text-black/60 text-sm">
                    30 Minutes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
