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
    <div className="relative w-full h-64">
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                className="w-full h-64 object-cover rounded-xl"
                src={`https://oms-api-dev.khalifahdev.biz.id/api/public/file/${image.nama_file}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-sky text-black p-1 rounded-full"
        >
          <ChevronLeft color="white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-sky text-black p-1 rounded-full"
        >
          <ChevronRight color="white" />
        </button>
      </div>
      <div className="flex justify-center mt-2">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-1/4 object-cover cursor-pointer ${
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
