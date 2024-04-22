import React from "react";

const Heart = (props) => {
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
        d="M15 25C14.7679 25 14.5714 24.9219 14.4107 24.7656L6.05357 16.9271C5.96429 16.8576 5.84152 16.7448 5.68527 16.5885C5.52902 16.4323 5.28125 16.148 4.94196 15.7357C4.60268 15.3234 4.29911 14.9002 4.03125 14.4661C3.76339 14.0321 3.52455 13.5069 3.31473 12.8906C3.10491 12.2743 3 11.6753 3 11.0938C3 9.18403 3.56696 7.69097 4.70089 6.61458C5.83482 5.53819 7.40179 5 9.40179 5C9.95536 5 10.5201 5.09332 11.096 5.27995C11.6719 5.46658 12.2076 5.71832 12.7031 6.03516C13.1987 6.352 13.625 6.64931 13.9821 6.92708C14.3393 7.20486 14.6786 7.5 15 7.8125C15.3214 7.5 15.6607 7.20486 16.0179 6.92708C16.375 6.64931 16.8013 6.352 17.2969 6.03516C17.7924 5.71832 18.3281 5.46658 18.904 5.27995C19.4799 5.09332 20.0446 5 20.5982 5C22.5982 5 24.1652 5.53819 25.2991 6.61458C26.433 7.69097 27 9.18403 27 11.0938C27 13.0122 25.9777 14.9653 23.933 16.9531L15.5893 24.7656C15.4286 24.9219 15.2321 25 15 25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Heart;
