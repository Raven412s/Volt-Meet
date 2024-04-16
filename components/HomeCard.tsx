import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  title: string;
  description: string;
  img: string;
  className: string;
  handleClick: () => void;
}

const HomeCard = ({
  title,
  description,
  img,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "bg-orange-1 flex flex-col px-4 py-6 justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[15px] cursor-pointer ",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px] ">
        <Image
          src={img}
          height={27}
          width={27}
          alt="addMeeting"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl  ">{title}</h1>
        <p className=" font-normal text-lg ">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
