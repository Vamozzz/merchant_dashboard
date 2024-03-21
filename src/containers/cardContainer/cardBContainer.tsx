import React from "react";
import CardB from "../../components/cards/cardB";
import "./cardContainer.css";
import {
  sendMoneyCardB,
  invoiceLinkCardB,
  paymentLinkCardB,
} from "../../constants/homeConstants";

const CardBContainer = () => {
  return (
    <div className="flex flex-col gap-3 p-4 border border-white cardBContainer">
      <div className="font-bold text-[20px]">
        <p>Quick Send Links</p>
      </div>
      <div className="flex items-center justify-between sm:justify-start sm:gap-4">
        <CardB {...invoiceLinkCardB} />
        <CardB {...paymentLinkCardB} />
        <CardB {...sendMoneyCardB} />
      </div>
    </div>
  );
};

export default CardBContainer;
