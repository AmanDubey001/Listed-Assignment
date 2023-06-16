import Image from "next/image";
import React from "react";

const Card = ({ heading, image, numbers, color }) => {
  console.log(color);
  return (
    <div className={`p-4 rounded-xl ${color} relative`}>
      <Image
        className="text-right absolute right-8 top-4"
        src={image}
        width={25}
        height={25}
      />
      <h4 className="text-sm font-[400] text-black mt-4">{heading}</h4>
      <h1 className="text-3xl font-bold text-black tracking-wider">
        {numbers}
      </h1>
    </div>
  );
};

export default Card;
