import React from "react";

const Sketch = (props) => {
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
        d="M6.875 11.8384V4.52587L15 3L23.125 4.52587V11.8384H6.875Z"
        fill="#FFD54F"
      />
      <path d="M6.875 11.8384L15 3L23.125 11.8384H6.875Z" fill="#FFECB3" />
      <path d="M2 11.8384L15 27.2759L28 11.8384H2Z" fill="#FFA000" />
      <path
        d="M6.875 11.8384L15 27.2759L23.125 11.8384H6.875Z"
        fill="#FFCA28"
      />
      <path
        d="M2 11.8384L6.875 4.52591V11.8384H2ZM23.125 4.52591V11.8384H28L23.125 4.52591Z"
        fill="#FFC107"
      />
    </svg>
  );
};

export default Sketch;
