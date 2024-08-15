"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type ImageSliderProps = {
  images: { id: number; nama_file: string }[];
  tipe: string;
  periode: string;
  akad: number;
  status: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  tipe,
  periode,
  akad,
  status,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-56 lg:h-72">
      <div className="relative w-full overflow-hidden rounded-md h-56 lg:h-72">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                className="object-cover w-full rounded-md h-56 lg:h-72"
                src={`${process.env.NEXT_PUBLIC_FILE_PATH}/images/${image.nama_file}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute right-8 top-6 font-bold text-white text-[10px] md:text-xs">
          <span
            className={`relative ${
              tipe === "Sukuk" ? "bg-[#FF1F00]" : "bg-emerald-light"
            }  px-4 md:px-8 py-1.5 rounded-md z-10`}
          >
            {tipe === "Sukuk"
              ? akad === 1
                ? "Sukuk Mudharabah"
                : akad === 2
                ? "Sukuk Musyarakah"
                : "Saham"
              : "Saham"}
          </span>
          <span className="relative bg-sky px-4 md:px-6 py-1.5 rounded-md z-0 -ml-2">
            {status === 1
              ? "Segera Terbit"
              : status === 3 || status === 4 || status === 5
              ? "Pendanaan Terpenuhi"
              : status === 6 || status === 7
              ? "Proyek Berakhir"
              : `${periode} Hari Lagi`}
          </span>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 p-1 text-black transform -translate-y-1/2 rounded-full top-1/2 bg-sky"
        >
          <ChevronLeft color="white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 p-1 text-black transform -translate-y-1/2 rounded-full top-1/2 bg-sky"
        >
          <ChevronRight color="white" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-[calc(20%-6px)] object-cover cursor-pointer rounded-md ${
              currentIndex === index ? "border-2 border-blue-500" : ""
            }`}
            src={`${process.env.NEXT_PUBLIC_FILE_PATH}/images/${image.nama_file}`}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
