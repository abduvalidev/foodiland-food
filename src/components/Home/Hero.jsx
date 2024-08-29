import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Heroimage from "../../assets/bakedChicken.jpg";
import Hotrecipes from "../../assets/hotRecipes.svg";
import TimerSvg from "../../assets/timer.svg";
import ForkKnife from "../../assets/forkKnife.svg";
import JohnSmith from "../../assets/johnSmith.jpg";
import Abduvali from "../../assets/abduvali.jpg";
import PlayCircle from "../../assets/playCircle.svg";
import Badge from "../../assets/badge.svg";

export default function Hero() {
  const cardsHero = [
    {
      bg: Heroimage,
      title: "Spicy delicious chicken wings",
      description:
        "Lorem ipsum  sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      user: {
        name: "John Smith",
        img: JohnSmith,
        date: {
          day: "15",
          month: "March",
          year: "2022",
        },
      },
    },
    {
      bg: Heroimage,
      title: "Spicy delicious chicken wings",
      description:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      user: {
        name: "Abduvali Kozimov",
        img: Abduvali,
        date: {
          day: "30",
          month: "January",
          year: "2024",
        },
      },
    },
    {
      bg: Heroimage,
      title: "Spicy delicious chicken wings",
      description:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod",
      user: {
        name: "John Smith",
        img: JohnSmith,
        date: {
          day: "15",
          month: "March",
          year: "2022",
        },
      },
    },
    {
      bg: Heroimage,
      title: "Spicy delicious chicken wings",
      description:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      user: {
        name: "Abduvali Kozimov",
        img: Abduvali,
        date: {
          day: "30",
          month: "January",
          year: "2024",
        },
      },
    },
  ];

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        className="mySwiper items-center pt-5 lg:pt-10"
        centeredSlides={true}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
          1280: {
            slidesPerView: 1.1,
            // spaceBetween: 20,
          },
          1536: {
            slidesPerView: 1.15,
          },
          1670: {
            slidesPerView: 1.3,
          },
          1920: {
            slidesPerView: 1.6,
          },
        }}
        onSlideChange={(swiper) => {
          if (swiper.width >= 1280) {
            const allSlides = swiper.slides;
            allSlides.forEach((slide) => {
              slide.style.transform = "scaleY(0.9)";
            });
            swiper.slides[swiper.activeIndex].style.transform = "scaleY(1)";
          } else {
            const allSlides = swiper.slides;
            allSlides.forEach((slide) => {
              slide.style.transform = "scaleY(1)";
            });
          }
        }}
      >
        {cardsHero.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="w-full max-w-base mx-auto px-5 md:px-7 xl:px-5 xxl:px-10">
              <div className="w-full relative bg-brand-gray-200 grid lg:grid-cols-2 rounded-3xl overflow-hidden">
                <div className="flex flex-col justify-between gap-4 p-5 lg:p-8 xl:p-12">
                  <div>
                    <div className="drob-shadow w-max bg-white flex items-center gap-x-2 rounded-full px-5 py-2.5">
                      <img src={Hotrecipes} alt="iLL" />
                      <p className="font-semibold text-sm">Hot Recipes</p>
                    </div>
                    <h1 className="mt-6 md:mt-8">{card.title}</h1>
                    <p className="text-black/60 line-clamp-3 mt-4 md:mt-6">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-x-4 mt-4 md:mt-8">
                      <div className="md:w-max rounded-full bg-black/5 flex items-center gap-x-2 px-2.5 py-1.5">
                        <img
                          src={TimerSvg}
                          className="w-4 md:w-6 h-4 md:h-6"
                          alt="svg"
                        />
                        <span className="font-medium text-black/60 text-sm">
                          30 Minutes
                        </span>
                      </div>
                      <div className="md:w-max rounded-full bg-black/5 flex items-center gap-x-2 px-2.5 py-1.5">
                        <img
                          src={ForkKnife}
                          className="w-4 md:w-6 h-4 md:h-6"
                          alt="svg"
                        />
                        <span className="font-medium text-black/60 text-sm">
                          Chicken
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col xs:flex-row xs:items-center justify-between gap-4">
                    <div className="flex items-center gap-x-4">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={card.user.img}
                        alt="john"
                      />
                      <div>
                        <h5 className="font-bold ">{card.user.name}</h5>
                        <div className="font-medium text-black/60 text-sm">
                          {card.user.date.day} {card.user.date.month}{" "}
                          {card.user.date.year}
                        </div>
                      </div>
                    </div>
                    <button className="w-full xs:w-max bg-black rounded-2xl flex items-center justify-center gap-x-4 transition duration-300 hover:bg-black/80 hover:shadow-md py-3 md:py-5 px-5 md:px-10">
                      <span className="font-semibold text-white text-sm tracking-[-2%]">
                        View Recipes
                      </span>
                      <img src={PlayCircle} alt="play" />
                    </button>
                  </div>
                </div>
                <div className="aspect-video sm:aspect-[16/6] lg:aspect-[660/640] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={card.bg}
                    alt="bg-image"
                  />
                </div>
                <div className="hidden xl:block w-full absolute top-12">
                  <img className="w-36 h-36 mx-auto" src={Badge} alt="badge" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
