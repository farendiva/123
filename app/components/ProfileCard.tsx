import React from "react";

interface Profile {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const ProfileCard: React.FC<Profile> = ({
  name,
  position,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col justify-between items-center gap-3 p-4 m-4 rounded-lg  bg-white">
      <img
        className="w-44 rounded-full mb-4 aspect-square"
        src={imageSrc}
        alt="Board"
      />
      <h2 className="text-2xl text-center font-bold">{name}</h2>
      <h3 className="text-xl text-center text-emerald-500">{position}</h3>
      <p className="line-clamp-6 text-center">{description}</p>
    </div>
  );
};

export default ProfileCard;
