import React, { useState } from "react";
import CardImag1 from "../../assets/burgeer.png";
import CardImag2 from "../../assets/fish.png";
import CardImag3 from "../../assets/breakfastt.png";
import CardImag4 from "../../assets/healthy.png";
import CardImag5 from "../../assets/cardmeat.png";
import CardImag6 from "../../assets/breakfastt.png";
import CardImag7 from "../../assets/sweet.png";
import CardImag8 from "../../assets/snak.png";
import CardImag9 from "../../assets/noodles.png";
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
      img: CardImag3,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      dishName: "Breakfast",
    },
    {
      img: CardImag4,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      dishName: "Healthy",
    },
    {
      img: CardImag5,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      dishName: "Meat",
    },
    {
      img: CardImag6,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
    {
      img: CardImag7,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      dishName: "Snack",
    },
    {
      img: CardImag8,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      dishName: "Sweet",
    },
    {
      img: CardImag9,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      dishName: "Snack",
    },
  ];

  const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
      setLiked(!liked);
    };

    return (
      <div className="bg-white flex items-center justify-center w-8 md:w-12 h-8 md:h-12 rounded-full absolute z-10 top-12 right-9">
        <svg
          className={`w-6 h-6 cursor-pointer ${
            liked ? "text-red-500" : "text-[#DBE2E5]"
          }`}
          onClick={toggleLike}
          xmlns="http://www.w3.org/2000/svg"
          fill={liked ? "red" : "#DBE2E5"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
    );
  };

  return (
    <section id="recipe" className="mt-8 md:mt-16 lg:mt-32 xl:mt-44">
      <div className="text-center">
        <h2>Simple and tasty recipes</h2>
        <p className="mt-4 md:mt-6">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-8 md:mt-16 lg:mt-24">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-brand-gray-200/0 to-brand-gray-200/100 relative rounded-[30px] p-4 space-y-4 md:space-y-6 group transition duration-300 hover:shadow-lg"
          >
            <LikeButton />
            <div className="aspect-[16/7] lg:aspect-[368/250] overflow-hidden rounded-2xl">
              <img
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110 select-none"
                src={card.img}
                alt="img"
              />
            </div>
            <h4 className="font-semibold sm:text-lg lg:text-2xl line-clamp-2 px-2">
              {card.title}
            </h4>
            <div className="flex items-center gap-x-4 lg:gap-x-6 md:pb-4 px-2">
              <div className="flex items-center gap-x-2.5">
                <img src={TimerSvg} alt="time" />
                <span className="font-medium text-black/60 text-sm">
                  30 Minutes
                </span>
              </div>
              <div className="flex items-center gap-x-2.5">
                <img src={ForkKnife} alt="fork" />
                <span className="font-medium text-black/60 text-sm">
                  {card.dishName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
