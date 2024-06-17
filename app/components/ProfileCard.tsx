import React from "react";

interface Profile {
  name: string;
  position: string;
  description: string;
}

const ProfileCard: React.FC<Profile> = ({ name, position, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img
        className="rounded-full"
        src="https://i.pinimg.com/236x/69/47/ae/6947ae53e2807e7e041d14ae17cc0c01.jpg"
        alt="Board"
      />
      <h2 className="text-2xl font-bold">{name}</h2>
      <h3 className="text-xl text-emerald-light">{position}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
