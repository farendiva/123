"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface Profile {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
}

const ProfileCard: React.FC<Profile> = ({
  name,
  position,
  description,
  imageSrc,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const limitWords = 20; // Word limit for the description

  // Function to truncate description to specified words
  const truncateDescription = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="flex flex-col items-center justify-between gap-3 p-4 m-4 bg-white rounded-lg">
      <img
        className="mb-4 rounded-full w-44 aspect-square"
        src={imageSrc}
        alt={`${name} Foto Profil`}
      />
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <h3 className="text-xl text-center text-emerald-500">{position}</h3>
      <p className="text-center">
        {description.split(" ").length > limitWords ? (
          <>
            {truncateDescription(description, limitWords)}
            <button
              className="font-bold text-sky hover:underline"
              onClick={toggleExpanded}
            >
              Baca Selengkapnya
            </button>
          </>
        ) : (
          description
        )}
      </p>

      {isExpanded && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative flex flex-col items-center justify-center w-full max-w-lg p-8 bg-white rounded-lg">
            <img
              className="mb-4 rounded-full w-44 aspect-square"
              src={imageSrc}
              alt={`${name} Foto Profil`}
            />
            <h2 className="text-2xl font-bold text-center">{name}</h2>
            <h3 className="text-xl text-center text-emerald-500">{position}</h3>
            <p className="mt-4">{description}</p>
            <button
              className="absolute top-0 right-0 p-2 text-gray-600 rounded-full hover:bg-slate-100"
              onClick={toggleExpanded}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
