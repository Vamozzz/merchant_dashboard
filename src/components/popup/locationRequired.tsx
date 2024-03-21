import React, { useState } from "react";
import "./popup.css";
import "../../index.css";
import CustomInput from "../customInput/customInput";
import OTPInput from "react-otp-input";
import OtpInput from "../otp/otpInput";
import ButtonComponent from "../button/buttonComponent";
import location from "../../assets/images/locationimage.svg";

const LocationRequired = () => {
  return (
    <div className=" lg:max-w-[700px] w-[90%] lg:w-auto m-auto p-4 sm:p-8 bg-white shadow-2xl lg:p-10 rounded-2xl text-center centre text-poppins">
      <div className="flex flex-col items-center text-center ">
        <p className="font-medium text-[30px]">Location Required</p>
        <p className="font-normal  text-[16px] text-[#6A798A]">
          In order to proceed, we need your current location.
        </p>
        <img
          src={location}
          alt={location}
          width={100}
          height={100}
          className="m-4"
        />
      </div>
      <ButtonComponent
        buttonText="Share Location"
        customStyle={{ borderRadius: 5 }}
      />
    </div>
  );
};

export default LocationRequired;
