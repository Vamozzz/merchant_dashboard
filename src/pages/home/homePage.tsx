import React from "react";
import CardAComponent from "../../components/cards/cardA";
import {
  settlementBalanceCardA,
  totalPayinCardC,
  totalPayoutCardC,
  totalRefundCardC,
  totalSettlementCardC,
  upiTransactionDataCardD,
  walletBalanceCardA,
} from "../../constants/homeConstants";
import CardBContainer from "../../containers/cardContainer/cardBContainer";
import "./homePage.css";
import CardCComponent from "../../components/cards/cardC";
import CardDComponent from "../../components/cards/cardD";
function HomePage() {
  return (
    <div>
      <div className="homePageContainer">
        <div className="firstRow">
          <CardBContainer />
          <CardAComponent {...settlementBalanceCardA} />
          <CardAComponent {...walletBalanceCardA} />
        </div>
        <div className="secondRow">
          <CardCComponent {...totalPayinCardC} />
          <CardCComponent {...totalPayoutCardC} />
          <CardCComponent {...totalSettlementCardC} />
          <CardCComponent {...totalRefundCardC} />
        </div>
        <div className="thirdRow">
          <CardDComponent {...upiTransactionDataCardD} />
          <CardDComponent {...upiTransactionDataCardD} />
          <CardDComponent {...upiTransactionDataCardD} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
