import React from "react";

interface Profile {
  name: string;
  position: string;
  description: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const ProfileCard: React.FC<Profile> = ({ name, position, description }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-3 p-4 m-4 border rounded-lg min-h-[300px] max-h-[1200px] bg-white">
      <img
        className="rounded-full mb-4"
        src="https://i.pinimg.com/236x/69/47/ae/6947ae53e2807e7e041d14ae17cc0c01.jpg"
        alt="Board"
      />
      <h2 className="text-2xl text-center font-bold">{name}</h2>
      <h3 className="text-xl text-center text-emerald-500">{position}</h3>
      <p className="line-clamp-6 text-center">
        {truncateText(description, 500)}
      </p>
    </div>
  );
};

export default ProfileCard;
