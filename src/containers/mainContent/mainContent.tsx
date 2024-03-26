import React from "react";
import Layout from "../../layout/layout";
import Router from "../../routes/router";
import Home from "../../pages/home/home";

function MainContent() {
  return (
    <Layout>
      <div className="rounded-lg ">
        <Home />
      </div>
    </Layout>
  );
}

export default MainContent;
