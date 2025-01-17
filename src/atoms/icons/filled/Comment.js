import React from "react";

const Comment = (props) => {
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
        d="M6.5625 3.75C3.97367 3.75 1.875 5.84867 1.875 8.4375V17.8125C1.875 20.4013 3.97367 22.5 6.5625 22.5H7.5V26.1416C7.5 27.7204 9.3594 28.5641 10.5475 27.5244L16.2898 22.5H23.4375C26.0263 22.5 28.125 20.4013 28.125 17.8125V8.4375C28.125 5.84867 26.0263 3.75 23.4375 3.75H6.5625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Comment;
