import React from "react";

const Clock = (props) => {
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
        d="M14.953 27.7028C7.96371 27.7028 2.25024 21.9893 2.25024 15C2.25024 8.01071 7.96371 2.29724 14.953 2.29724C21.9423 2.29724 27.6558 8.01071 27.6558 15C27.7112 21.9893 21.9978 27.7028 14.953 27.7028ZM14.953 3.62853C8.68483 3.62853 3.63701 8.73182 3.63701 14.9445C3.63701 21.1572 8.7403 26.2605 14.953 26.2605C21.1657 26.2605 26.269 21.1572 26.269 14.9445C26.269 8.73182 21.2212 3.62853 14.953 3.62853Z"
        fill="currentColor"
      />
      <path
        d="M18.9469 21.4901L14.2319 16.7751V8.17712H15.7296V16.1649L20.0009 20.4361L18.9469 21.4901Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Clock;
