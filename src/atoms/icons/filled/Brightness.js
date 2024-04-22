import React from "react";

const Brightness = (props) => {
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
        d="M22.4286 15.2857C22.4286 16.6984 22.0097 18.0794 21.2249 19.2541C20.4399 20.4287 19.3243 21.3443 18.0191 21.8848C16.714 22.4255 15.2779 22.567 13.8922 22.2913C12.5066 22.0157 11.2339 21.3354 10.235 20.3364C9.23601 19.3375 8.55571 18.0648 8.28011 16.6793C8.0045 15.2937 8.14595 13.8574 8.68657 12.5523C9.2272 11.2471 10.1427 10.1315 11.3174 9.34665C12.492 8.56178 13.873 8.14286 15.2857 8.14286C17.1801 8.14286 18.997 8.89541 20.3364 10.2349C21.676 11.5745 22.4286 13.3913 22.4286 15.2857ZM14.5714 5.28572H16C16.1894 5.28572 16.3711 5.21046 16.5051 5.07651C16.639 4.94255 16.7143 4.76086 16.7143 4.57143V1.71429C16.7143 1.52485 16.639 1.34316 16.5051 1.20921C16.3711 1.07525 16.1894 1 16 1H14.5714C14.382 1 14.2003 1.07525 14.0664 1.20921C13.9324 1.34316 13.8571 1.52485 13.8571 1.71429V4.57143C13.8571 4.76086 13.9324 4.94255 14.0664 5.07651C14.2003 5.21046 14.382 5.28572 14.5714 5.28572ZM16 25.2857H14.5714C14.382 25.2857 14.2003 25.361 14.0664 25.495C13.9324 25.6288 13.8571 25.8105 13.8571 26V28.8571C13.8571 29.0465 13.9324 29.2283 14.0664 29.3623C14.2003 29.4961 14.382 29.5714 14.5714 29.5714H16C16.1894 29.5714 16.3711 29.4961 16.5051 29.3623C16.639 29.2283 16.7143 29.0465 16.7143 28.8571V26C16.7143 25.8105 16.639 25.6288 16.5051 25.495C16.3711 25.361 16.1894 25.2857 16 25.2857ZM28.8571 13.8571H26C25.8106 13.8571 25.6289 13.9324 25.4949 14.0663C25.361 14.2003 25.2857 14.382 25.2857 14.5714V16C25.2857 16.1894 25.361 16.3711 25.4949 16.5051C25.6289 16.639 25.8106 16.7143 26 16.7143H28.8571C29.0466 16.7143 29.2283 16.639 29.3623 16.5051C29.4961 16.3711 29.5714 16.1894 29.5714 16V14.5714C29.5714 14.382 29.4961 14.2003 29.3623 14.0663C29.2283 13.9324 29.0466 13.8571 28.8571 13.8571ZM5.28571 16V14.5714C5.28571 14.382 5.21045 14.2003 5.07651 14.0663C4.94255 13.9324 4.76087 13.8571 4.57143 13.8571H1.71429C1.52485 13.8571 1.34316 13.9324 1.20921 14.0663C1.07526 14.2003 1 14.382 1 14.5714V16C1 16.1894 1.07526 16.3711 1.20921 16.5051C1.34316 16.639 1.52485 16.7143 1.71429 16.7143H4.57143C4.76087 16.7143 4.94255 16.639 5.07651 16.5051C5.21045 16.3711 5.28571 16.1894 5.28571 16ZM22.8571 8.71429C22.9236 8.78123 23.0026 8.83438 23.0896 8.87063C23.1766 8.9069 23.27 8.92558 23.3643 8.92558C23.4586 8.92558 23.552 8.9069 23.639 8.87063C23.726 8.83438 23.805 8.78123 23.8714 8.71429L25.8857 6.71429C25.9527 6.64788 26.0059 6.56888 26.042 6.48183C26.0783 6.39479 26.097 6.30143 26.097 6.20715C26.097 6.11285 26.0783 6.01949 26.042 5.93245C26.0059 5.84541 25.9527 5.76641 25.8857 5.70001L24.8857 4.70001C24.8193 4.63305 24.7403 4.57991 24.6533 4.54365C24.5663 4.50739 24.4729 4.48872 24.3786 4.48872C24.2843 4.48872 24.1909 4.50739 24.1039 4.54365C24.0169 4.57991 23.9379 4.63305 23.8714 4.70001L21.8571 6.71429C21.7901 6.78069 21.737 6.85969 21.7009 6.94673C21.6646 7.03378 21.6459 7.12713 21.6459 7.22143C21.6459 7.31572 21.6646 7.40908 21.7009 7.49612C21.737 7.58316 21.7901 7.66216 21.8571 7.72858L22.8571 8.71429ZM7.71428 21.8571C7.64788 21.7903 7.56888 21.7371 7.48184 21.7008C7.3948 21.6645 7.30144 21.6458 7.20714 21.6458C7.11285 21.6458 7.01948 21.6645 6.93244 21.7008C6.8454 21.7371 6.7664 21.7903 6.7 21.8571L4.68571 23.8571C4.61877 23.9235 4.56563 24.0025 4.52937 24.0895C4.4931 24.1767 4.47443 24.27 4.47443 24.3643C4.47443 24.4585 4.4931 24.552 4.52937 24.639C4.56563 24.726 4.61877 24.805 4.68571 24.8714L5.68571 25.8714C5.75211 25.9384 5.83111 25.9915 5.91815 26.0278C6.0052 26.064 6.09857 26.0827 6.19285 26.0827C6.28715 26.0827 6.38051 26.064 6.46755 26.0278C6.5546 25.9915 6.6336 25.9384 6.7 25.8714L8.71428 23.8571C8.78124 23.7907 8.83437 23.7117 8.87064 23.6247C8.9069 23.5377 8.92557 23.4443 8.92557 23.35C8.92557 23.2557 8.9069 23.1624 8.87064 23.0753C8.83437 22.9883 8.78124 22.9093 8.71428 22.8428L7.71428 21.8571ZM23.8571 21.8571C23.7907 21.7903 23.7117 21.7371 23.6247 21.7008C23.5377 21.6645 23.4443 21.6458 23.35 21.6458C23.2557 21.6458 23.1623 21.6645 23.0753 21.7008C22.9883 21.7371 22.9093 21.7903 22.8429 21.8571L21.8429 22.8571C21.7759 22.9235 21.7227 23.0025 21.6866 23.0895C21.6503 23.1767 21.6316 23.27 21.6316 23.3643C21.6316 23.4585 21.6503 23.552 21.6866 23.639C21.7227 23.726 21.7759 23.805 21.8429 23.8714L23.8571 25.8857C23.9236 25.9527 24.0026 26.0058 24.0896 26.0421C24.1766 26.0783 24.27 26.097 24.3643 26.097C24.4586 26.097 24.552 26.0783 24.639 26.0421C24.726 26.0058 24.805 25.9527 24.8714 25.8857L25.8714 24.8857C25.9384 24.8193 25.9916 24.7403 26.0277 24.6533C26.064 24.5663 26.0827 24.4728 26.0827 24.3785C26.0827 24.2843 26.064 24.191 26.0277 24.1038C25.9916 24.0168 25.9384 23.9378 25.8714 23.8714L23.8571 21.8571ZM6.71428 8.71429C6.78068 8.78123 6.85968 8.83438 6.94673 8.87063C7.03377 8.9069 7.12714 8.92558 7.22143 8.92558C7.31573 8.92558 7.40908 8.9069 7.49613 8.87063C7.58317 8.83438 7.66217 8.78123 7.72857 8.71429L8.72857 7.71429C8.85755 7.57891 8.92831 7.39833 8.92564 7.21136C8.92297 7.02439 8.84708 6.84593 8.71428 6.71429L6.71428 4.68572C6.64788 4.61876 6.56888 4.56562 6.48184 4.52936C6.3948 4.49311 6.30144 4.47443 6.20714 4.47443C6.11285 4.47443 6.01948 4.49311 5.93244 4.52936C5.8454 4.56562 5.7664 4.61876 5.7 4.68572L4.7 5.68572C4.63305 5.75212 4.57991 5.83112 4.54365 5.91816C4.50738 6.00521 4.48871 6.09856 4.48871 6.19286C4.48871 6.28715 4.50738 6.38051 4.54365 6.46755C4.57991 6.55459 4.63305 6.63359 4.7 6.70001L6.71428 8.71429Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Brightness;