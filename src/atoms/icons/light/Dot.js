import React from "react";

const Dot = (props) => {
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
        d="M27 15C27 17.1856 26.4638 19.1862 25.3928 21.0214C24.3174 22.8642 22.8642 24.3174 21.0214 25.3928C19.1862 26.4638 17.1856 27 15 27C12.8144 27 10.8138 26.4638 8.97863 25.3928C7.13576 24.3174 5.68262 22.8642 4.60718 21.0214C3.53623 19.1862 3 17.1856 3 15C3 12.8144 3.53623 10.8138 4.60718 8.97864C5.68262 7.13577 7.13576 5.68263 8.97863 4.60718C10.8138 3.53623 12.8144 3 15 3C17.1856 3 19.1862 3.53623 21.0214 4.60718C22.8642 5.68263 24.3174 7.13577 25.3928 8.97864C26.4638 10.8138 27 12.8144 27 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Dot;
