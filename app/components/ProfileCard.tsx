"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface Profile {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
  grid: number;
}

const ProfileCard: React.FC<Profile> = ({
  name,
  position,
  description,
  imageSrc,
  grid,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    document.body.style.overflow = isExpanded ? "auto" : "hidden";
  };

  const characterLimit = 80; // Character limit for the description

  const truncateDescription = (text: string, limit: number) => {
    if (text.length <= limit) return text;

    const truncated = text.slice(0, limit);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex === -1) return truncated + "...";

    return truncated.slice(0, lastSpaceIndex) + "...";
  };

  return (
    <div className="flex flex-col items-center justify-between gap-3 p-4 m-4 bg-white rounded-lg">
      <img
        className="mb-4 rounded-full w-36 aspect-square"
        src={imageSrc}
        alt={`${name} Foto Profil`}
      />
      <h2 className="text-xl font-bold text-center">{name}</h2>
      <h3 className="text-lg text-center text-emerald-500">{position}</h3>
      <p
        className={`text-sm h-full lg:h-24 text-justify ${
          grid === 4 ? "w-4/5 lg:w-full" : "w-4/5"
        }`}
      >
        {description.length > characterLimit ? (
          <>
            {truncateDescription(description, characterLimit)}
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
        <div className="fixed z-50 inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
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
