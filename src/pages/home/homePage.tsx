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
          <div className="first_row_first_item">
            <CardBContainer />
          </div>
          <div className="first_row_second_item">
            <CardAComponent {...settlementBalanceCardA} />
          </div>
          <div className="first_row_third_item">
            <CardAComponent {...walletBalanceCardA} />
          </div>
        </div>
        <div className="secondRow">
          <div className="second_row_first_item">
            <CardCComponent {...totalPayinCardC} />
          </div>

          <div className="second_row_second_item">
            <CardCComponent {...totalPayoutCardC} />
          </div>
          <div className="second_row_third_item">
            <CardCComponent {...totalSettlementCardC} />
          </div>
          <div className="second_row_fourth_item">
            <CardCComponent {...totalRefundCardC} />
          </div>
        </div>
        <div className="thirdRow">
          <div className="third_row_first_item">
            <CardDComponent {...upiTransactionDataCardD} />
          </div>
          <div className="third_row_second_item">
            <CardDComponent {...upiTransactionDataCardD} />
          </div>
          <div className="third_row_third_item">
            <CardDComponent {...upiTransactionDataCardD} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
