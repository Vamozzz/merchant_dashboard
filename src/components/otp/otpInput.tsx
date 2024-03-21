import React, {
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import "./otpInput.css";

const OtpInput: React.FC<{ length?: number; onOtpSubmit?: () => void }> = ({
  length = 4,
  onOtpSubmit = () => {},
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // if (isNaN(parseInt(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
    // const combinedOtp = newOtp.join("").length === length;
  };
  // const validation =(value)=>{
  //   const regex=
  // if(vlaue)
  // }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRef.current[index - 1]
    ) {
      console.log("backspace is clicked");

      e.preventDefault();
      const newOtp = [...otp];
      // Clear the current input and move focus to the previous input
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) {
        inputRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => {
              inputRef.current[index] = input as HTMLInputElement;
            }}
            key={index}
            type="number"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="bg-[#EFF2F5] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] m-2 rounded-lg text-center spinner"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
