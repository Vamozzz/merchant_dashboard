import React from "react";
import Layout from "../../layout/layout";
import HomePage from "../../pages/home/homePage";

function MainContent() {
  return (
    <Layout>
      <div className="rounded-lg ">
        <HomePage />
      </div>
    </Layout>
  );
}

export default MainContent;
