import React from "react";
import CookerImage from "../../assets/cooker.svg";

function Cooker() {
  return (
    <section className="mt-8 md:mt-16 lg:mt-24 xl:mt-36">
      <div className="flex items-center gap-x-10">
        <div className="w-[45%]">
          <h2>Everyone can be a <br className="hidden lg:block"/> chef in their own kitchen</h2>
          <p className="mt-4 md:mt-6 lg:mb-2">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do  <br className="hidden lg:block"/>
            eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <button className="w-full xs:w-[180px] bg-black text-white rounded-2xl transition duration-300 hover:bg-black/80 capitalize text-center py-3 md:py-5 px-5 mt-4 md:mt-8 lg:mt-16">
            learn more
          </button>
        </div>

        <div className="w-[55%">
          <img src={CookerImage} alt="cooker" />
        </div>
      </div>
    </section>
  );
}

export default Cooker;
