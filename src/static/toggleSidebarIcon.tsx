import React, { FC } from "react";

interface icon {
  isOpen: boolean;
}

const ToggleSidebarIcon: FC<icon> = ({ isOpen }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66699 12.5001V7.50008C6.66699 3.33341 6.16699 1.66675 4.91699 1.66675L3.41699 2.50008C2.16699 2.50008 1.66699 3.33341 1.66699 7.50008V12.5001C1.66699 16.6667 2.16699 17.5001 3.41699 17.5001L4.91699 18.3334C6.16699 18.3334 6.66699 16.6667 6.66699 12.5001Z"
        fill="#6769FE"
      />
      <path
        d="M18.3073 12.5001V7.50008C18.3073 3.33341 16.6406 1.66675 12.474 1.66675H7.47396C3.30729 1.66675 1.64062 3.33341 1.64062 7.50008V12.5001C1.64062 16.6667 3.30729 18.3334 7.47396 18.3334H12.474C16.6406 18.3334 18.3073 16.6667 18.3073 12.5001Z"
        stroke="#6769FE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.64062 1.66675V18.3334"
        stroke="#6769FE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      {isOpen ? (
        <path
          d="M12.4751 7.86646L10.3418 9.99979L12.4751 12.1331"
          stroke="#6769FE"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      ) : (
        <path
          transform="rotate(180 11.40855 10.00005)"
          d="M12.4751 7.86646L10.3418 9.99979L12.4751 12.1331"
          stroke="#6769FE"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      )}
    </svg>
  );
};

export default ToggleSidebarIcon;
