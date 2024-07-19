"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type ImageSliderProps = {
  images: { id: number; nama_file: string }[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
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
    <div className="relative w-full h-80">
      <div className="relative w-full overflow-hidden rounded-md h-80">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                className="object-cover w-full rounded-md h-80"
                src={`https://oms-api-dev.khalifahdev.biz.id/api/public/file/${image.nama_file}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
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
            src={`https://oms-api-dev.khalifahdev.biz.id/api/public/file/${image.nama_file}`}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
