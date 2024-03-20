import React, { useState } from "react";
import "./popup.css";
import "../../index.css";
import CustomInput from "../customInput/customInput";
import OTPInput from "react-otp-input";
import OtpInput from "../otp/otpInput";

const OtpPopup = () => {
  return (
    <div className="w-[90%] lg:w-auto m-auto p-4  bg-redColor-redPrime lg:p-10 rounded-2xl text-center centre text-poppins">
      <div className="flex flex-col items-center gap-3 ">
        <p className="font-bold text-3xl text-[##292D32] ">
          Verify Phone Number
        </p>
        <p className="font-normal text-base text-[#6A798A] lg:px-8">
          We have sent you a 4 digit code. Please enter here to Verify your
          Number.
        </p>
      </div>
      <OtpInput />
      <div>
        <p>Didn’t Receive Code? Get a New one</p>
      </div>
    </div>
  );
};

export default OtpPopup;
