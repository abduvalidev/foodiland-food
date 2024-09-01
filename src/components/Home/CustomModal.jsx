import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PlayCircle from "../../assets/playCircle.svg";
export default function CustomModal({ open, handleOpen, handleClose }) {
  return (
    <div>
      <button
        className="w-full xs:w-max bg-black rounded-2xl flex items-center justify-center gap-x-4 transition duration-300 hover:bg-black/80 hover:shadow-md py-3 md:py-5 px-5 md:px-10"
        onClick={handleOpen}
      >
        <span className="font-semibold text-white text-sm tracking-[-2%]">
          View Recipes
        </span>
        <img src={PlayCircle} alt="play" />
      </button>
      <Modal className="p-5" open={open} onClose={handleClose}>
        <Box className="bg-white relative rounded-3xl aspect-[768/500] max-w-3xl mx-auto mt-10 md:mt-16 xl:mt-20 p-5">
          <button onClick={handleClose} className="absolute top-5 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="size-6"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <iframe
            className="mt-8 bg-gray-100 w-full h-full object-cover rounded-2xl"
            src="https://www.youtube.com/embed/YBQMdegMDR0?si=47VwsoWEEW-psCZu"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}
