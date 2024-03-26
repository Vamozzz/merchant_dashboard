import React, { useState } from "react";
import "./popup.css";
import "../../index.css";
import CustomInput from "../customInputs/customInput";
import OTPInput from "react-otp-input";
import OtpInput from "../otp/otpInput";
import ButtonComponent from "../buttons/buttonComponent";
import verifiedOtp from "../../assets/images/verifiedOtp.svg";

const EmailOtp = () => {
  const [isValidated, setIsvalidated] = useState(false);
  const onOtpSubmit = () => {
    setIsvalidated(true);
  };
  return (
    <div className=" lg:max-w-[700px] w-[90%] lg:w-auto m-auto p-4 sm:p-8 bg-white shadow-2xl lg:p-10 rounded-2xl text-center centre text-poppins">
      {!isValidated ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-3 ">
            <p className="font-bold text-3xl text-[##292D32] ">Verify Email</p>
            <p className="font-normal text-base text-[#6A798A] ">
              We have sent you a 4 digit code. Please enter here to Verify your
              Email.
            </p>
          </div>
          <OtpInput />
          <div className="text-base font-normal text-[#6A798A]  text-wrap">
            <p>
              Didn’t Receive Code?
              <span className="text-[#6C54FF]"> Get a New one</span>
            </p>
          </div>
          <ButtonComponent
            buttonText="Verify and Continue"
            disabled={false}
            customStyle={{ borderRadius: 5, color: "white" }}
            onClick={onOtpSubmit}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center text-center ">
          <p className="font-medium text-[30px]">OTP Verified</p>
          <p className="font-normal  text-[16px] text-[#6A798A]">
            Your 6 digit code successfully verified.
          </p>
          <img src={verifiedOtp} alt={verifiedOtp} width={100} height={100} />
        </div>
      )}
    </div>
  );
};

export default EmailOtp;
