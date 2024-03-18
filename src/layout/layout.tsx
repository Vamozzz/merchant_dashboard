import React, { FC, ReactNode } from "react";
import HeaderBar from "../containers/headerBar/headerBar";
import SideBar from "../containers/sideBar/sideBar";
import "./layout.css";

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="bg-[#FFFFFF] layoutModel lg:p-4 h-[100vh]">
      <div className="">
        <HeaderBar />
      </div>
      <div className="mainSection ">
        <div className=" sideBarSection  hidden lg:block ">
          <SideBar />
        </div>
        <div className="contentSection">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
