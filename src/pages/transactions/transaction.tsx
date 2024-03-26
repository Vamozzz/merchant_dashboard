import React from "react";
import TogglePayin from "../../components/toggles/togglePayin";
import "./transaction.css";

function Transaction() {
  return (
    <div className="transaction-grid">
      <TogglePayin />
    </div>
  );
}

export default Transaction;
