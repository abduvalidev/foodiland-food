import React from "react";
import ProfileImage from "../../assets/abduvali.jpg";
import Rectangle from "../../assets/rectangle.jpg";
import Rectangle3 from "../../assets/rectangle3.jpg";
import Rectangle4 from "../../assets/rectangle4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-creative";

export default function CheckOut() {
  const cards = [
    {
      user: {
        name: "kozimov_abduvali",
        profile: ProfileImage,
        location: "Andijan, Uzbekistan",
      },
      postImages: [Rectangle, Rectangle3, Rectangle4],
    },
    {
      user: {
        name: "Foodieland.",
        profile: Rectangle,
        location: "Tokyo, Japan",
      },
      postImages: [Rectangle3, Rectangle4, Rectangle],
    },
  ];

  return (
    <>
      <section className="mt-8 md:mt-16 lg:mt-24 xl:mt-40">
        <div className="w-container">
          <div className="text-center">
            <h2>Check out @foodieland on Instagram</h2>
            <p className="mt-4 md:mt-6">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5 md:gap-7 lg:gap-10 mt-4 md:mt-8 lg:mt-16 xl:mt-20 mb-20">
            {cards.map((card, index) => (
              <div key={index}>
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-x-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={card.user.profile}
                        alt="instagram"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="font-semibold text-[10px] text-brand-gray-800 flex items-center gap-x-2">
                        <strong>{card.user.name}</strong>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="none"
                        >
                          <path
                            fill="#3897F0"
                            fillRule="evenodd"
                            d="m4.347.374.953.62L6.438.988l.466 1.038.96.609-.169 1.125.48 1.031-.751.855-.154 1.127-1.094.314-.74.864-1.089-.327-1.089.327-.74-.864-1.093-.314-.154-1.127L.52 4.79 1 3.76.83 2.634l.961-.609.466-1.038 1.137.008.953-.621Zm1.012 2.72L3.837 4.712l-.502-.533a.31.31 0 0 0-.45.424l.727.772a.31.31 0 0 0 .45 0L5.81 3.52a.31.31 0 0 0-.45-.424Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </h6>
                      <p className="text-[8px] text-brand-gray-800">
                        {card.user.location}
                      </p>
                    </div>
                  </div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: ["-20%", 0, -1],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    pagination={{
                      type: 'fraction',
                    }}
                    modules={[Pagination, EffectCreative]}
                    className="mySwiper3"
                  >
                    {card.postImages.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="max-w-72 aspect-square overflow-hidden select-none">
                          <img
                            className="w-full h-full object-cover"
                            src={image}
                            alt="post"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
