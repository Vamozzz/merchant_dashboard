import React, { useState } from "react";
import "./toggle.css";
const TogglePayin = () => {
  const [isPayin, setPayin] = useState(false);
  return (
    <div className="">
      <div className="inline-block border-2 border-[#F2F2F2] rounded-full animate-5 font-bold text-[#B9B9B9] text-[14px] lg:text-[20px] ">
        <button
          onClick={() => setPayin(true)}
          className={`animate-5  p-2 px-10 rounded-[22px] ${
            isPayin ? "bg-[#6769FE] text-white" : "bg-white"
          }`}
        >
          <p>Payin</p>
        </button>
        <button
          onClick={() => setPayin(false)}
          className={`animate-5  p-2 px-10 rounded-[22px] ${
            isPayin ? "" : "bg-[#6769FE] text-white"
          }`}
        >
          <p>Payout</p>
        </button>
      </div>
    </div>
  );
};

export default TogglePayin;
