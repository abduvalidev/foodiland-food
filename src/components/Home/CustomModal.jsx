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
      <Modal 
      className="p-5"
        open={open}
        onClose={handleClose}
      >
        <Box className="bg-black rounded-3xl aspect-[768/500] max-w-3xl mx-auto mt-10 md:mt-16 xl:mt-20 p-5">
            <iframe
              className="w-full h-full object-cover rounded-2xl"
              src="https://www.youtube.com/embed/1gWivt5tNdA?si=6Hb-hyv702Pqg3Ix"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </Box>
      </Modal>
    </div>
  );
}
