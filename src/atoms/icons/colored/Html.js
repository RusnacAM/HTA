import React from "react";

const Html = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.36364 25.3594L2 2H28L25.6364 25.3594L14.9712 28"
        fill="#E34F26"
      />
      <path d="M15 26.9166L24.6499 24.6703L26.9167 3.08331H15" fill="#EF652A" />
      <path
        d="M15 11.9531H10.2393L9.92188 8.27148H15V4.7168H5.98633L6.93848 15.5713H15V11.9531ZM14.9365 21.2842L10.9375 20.2051L10.6836 17.3486H7.12891L7.57324 22.998L14.9365 25.0293V21.2842Z"
        fill="#EBEBEB"
      />
      <path
        d="M14.9365 11.9531V15.5713H19.3799L18.9355 20.2051L14.9365 21.2842V25.0293L22.2998 22.998L23.3154 11.9531H14.9365ZM14.9365 4.7168V8.27148H23.6328L23.9502 4.7168H14.9365Z"
        fill="white"
      />
    </svg>
  );
};

export default Html;
