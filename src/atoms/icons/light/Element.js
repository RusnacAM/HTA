import React from "react";

const Element = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      {...props}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 11.25V26.25M3.75 7.5L10 11.25H20L26.25 7.5H3.75ZM10 11.25V26.25V11.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 7.5L10 3.75H20L26.25 7.5V22.5L20 26.25H10L3.75 22.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Element;
