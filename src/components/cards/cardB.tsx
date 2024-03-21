import React, { FC } from "react";
import "../cards/cards.css";
import { CardInfoCardB } from "../../types/homeTypes";

const CardBComponent: FC<CardInfoCardB> = ({ title, Image1, Image2 }) => {
  return (
    <div className="relative flex items-center justify-center p-2 cardB">
      <div className="flex flex-col w-full justify-center items-center font-semibold text-white text-[14px]">
        <img src={Image1} alt="." height={30} width={30} />
        <p className="text-center">{title}</p>
      </div>
      {/* <div className="absolute rounded-full top-4 right-4 cardBContainerImageBorder ">
        {Image2 && <Image2 style={{ height: 30, width: 30 }} />}
      </div> */}
    </div>
  );
};

export default CardBComponent;
