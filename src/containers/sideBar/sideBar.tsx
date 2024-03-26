import React, { useState } from "react";
import { navConstants } from "../../constants/homeConstants";
import { navBarIcons } from "../../constants/imageConstans";
import "./sideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setOpen] = useState(true);
  const { AvatarCommonIcon, ToggleSidebarIcon } = navBarIcons;
  return (
    <nav
      className={`relative ${
        isOpen ? "w-[240px]" : "w-[70px]"
      } rounded-lg border-2 border-greyBorder animateSideBar `}
    >
      <div className="h-[164px] w-full flex flex-col items-center p-4 overflow-hidden">
        <AvatarCommonIcon style={{ height: 60, width: 60 }} />
        <div className={`animateSideBar ${isOpen ? " " : "opacity-0"} `}>
          <div className="font-semibold text-[18px] text-center text-textColor-textBlack text-nowrap">
            <p>Vaamoz Online</p>
          </div>
          <div className="text-textColor-textGrey2 text-center text-[14px] font-medium">
            <p>OCC903948</p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-start overflow-hidden my-4
        } `}
      >
        {/* gap-4  py-4 */}
        {navConstants.map((item) => (
          <Link
            to={`${item.navLink}`}
            key={item.id}
            className={`w-full py-2 ${
              isOpen ? "rounded-3xl px-5" : "rounded-full w-[60%]  mx-auto"
            }  ${item.isLink ? "hover:bg-[#EBEBFF] cursor-pointer" : ""} `}
          >
            <div
              className={`flex gap-3 items-center ${
                isOpen ? "" : "justify-center"
              } `}
            >
              {item?.navIcon && (
                <div>
                  <item.navIcon color="#6C54FF" />
                </div>
              )}
              {/* {item?.isLink ? (
                <Link
                  to={`/${item?.navLink}`}
                  className={` ${
                    item.isLink
                      ? `text-[16px] font-medium  `
                      : `text-[18px] font-semibold  `
                  } text-textColor-textBlack text-nowrap 
                ${isOpen ? "block" : "hidden"}
              `}
                >
                  {item?.navText}
                </Link>
              ) : (
                <p
                  className={` ${
                    item.isLink
                      ? `text-[16px] font-medium  `
                      : `text-[18px] font-semibold  `
                  } text-textColor-textBlack text-nowrap 
                ${isOpen ? "block" : "hidden"}
              `}
                >
                  {item?.navText}
                </p>
              )} */}

              {item.isLink ? (
                <Link
                  to={`${item.navLink}`}
                  className={`${
                    item.isLink
                      ? `text-[16px] font-medium`
                      : `text-[18px] font-semibold`
                  } text-textColor-textBlack text-nowrap ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {item.navText}
                </Link>
              ) : (
                <p
                  className={`${
                    item.isLink
                      ? `text-[16px] font-medium`
                      : `text-[18px] font-semibold`
                  } text-textColor-textBlack text-nowrap ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {item.navText}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
      <button
        className="absolute p-2 bg-white border rounded-full -right-4 top-32 border-greyBorder"
        onClick={(val) => {
          setOpen(!isOpen);
        }}
      >
        <ToggleSidebarIcon isOpen={isOpen} />
      </button>
    </nav>
  );
};
export default SideBar;
