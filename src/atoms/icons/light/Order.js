import React from "react";

const Order = (props) => {
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
        d="M20.7181 20.3275L18.2511 22.7945L17.1853 21.7367C17.0927 21.6441 16.967 21.5922 16.8361 21.5923C16.7052 21.5924 16.5796 21.6445 16.4871 21.7372C16.3946 21.8298 16.3427 21.9554 16.3428 22.0863C16.3429 22.2173 16.395 22.3428 16.4876 22.4353L17.8978 23.8445C17.9903 23.937 18.1158 23.989 18.2466 23.989C18.3775 23.989 18.5029 23.937 18.5955 23.8445L21.4188 21.0252C21.5087 20.9321 21.5584 20.8075 21.5573 20.6781C21.5561 20.5487 21.5043 20.425 21.4128 20.3335C21.3213 20.242 21.1975 20.1901 21.0682 20.189C20.9388 20.1879 20.8142 20.2376 20.7211 20.3275H20.7181Z"
        fill="currentColor"
      />
      <path
        d="M22.4057 17.9028V11.2309C22.4057 11.1 22.3537 10.9745 22.2611 10.882C22.1686 10.7895 22.0431 10.7375 21.9123 10.7375H18.4584V7.28361C18.4584 6.10586 17.9905 4.97635 17.1577 4.14355C16.3249 3.31075 15.1954 2.8429 14.0177 2.8429C12.8399 2.8429 11.7104 3.31075 10.8776 4.14355C10.0448 4.97635 9.57694 6.10586 9.57694 7.28361V10.7375H6.12305C5.99219 10.7375 5.86669 10.7895 5.77416 10.882C5.68162 10.9745 5.62964 11.1 5.62964 11.2309V23.4873C5.63094 24.5549 6.05569 25.5784 6.81069 26.3332C7.56569 27.088 8.58928 27.5125 9.65687 27.5135H18.9518C20.0686 27.5126 21.158 27.1672 22.0713 26.5244C22.9846 25.8816 23.6774 24.9726 24.0551 23.9216C24.4329 22.8706 24.4771 21.7286 24.182 20.6514C23.8868 19.5743 23.2665 18.6145 22.4057 17.9028ZM10.5638 7.28361C10.5638 6.36758 10.9277 5.48907 11.5754 4.84134C12.2231 4.19361 13.1016 3.82972 14.0177 3.82972C14.9337 3.82972 15.8122 4.19361 16.4599 4.84134C17.1076 5.48907 17.4715 6.36758 17.4715 7.28361V10.7375H10.5638V7.28361ZM9.65687 26.5267C8.85092 26.5259 8.07818 26.2055 7.50819 25.6357C6.9382 25.0659 6.61751 24.2932 6.61646 23.4873V11.7243H9.57694V12.8019C9.24773 12.9183 8.97026 13.1474 8.79358 13.4485C8.6169 13.7497 8.55238 14.1037 8.61143 14.4478C8.67048 14.792 8.84929 15.1042 9.11626 15.3292C9.38323 15.5543 9.72117 15.6778 10.0704 15.6778C10.4195 15.6778 10.7575 15.5543 11.0244 15.3292C11.2914 15.1042 11.4702 14.792 11.5293 14.4478C11.5883 14.1037 11.5238 13.7497 11.3471 13.4485C11.1704 13.1474 10.893 12.9183 10.5638 12.8019V11.7243H17.4715V12.8019C17.1423 12.9183 16.8649 13.1474 16.6882 13.4485C16.5115 13.7497 16.447 14.1037 16.506 14.4478C16.5651 14.792 16.7439 15.1042 17.0109 15.3292C17.2778 15.5543 17.6158 15.6778 17.965 15.6778C18.3141 15.6778 18.6521 15.5543 18.919 15.3292C19.186 15.1042 19.3648 14.792 19.4239 14.4478C19.4829 14.1037 19.4184 13.7497 19.2417 13.4485C19.065 13.1474 18.7876 12.9183 18.4584 12.8019V11.7243H21.4188V17.2575C20.1961 16.6311 18.7811 16.4924 17.46 16.8692C16.1389 17.2461 15.01 18.1104 14.3017 19.2876C13.5934 20.4648 13.3584 21.8669 13.6442 23.2107C13.93 24.5545 14.7152 25.7397 15.8413 26.5267H9.65687ZM10.0704 13.698C10.1679 13.698 10.2633 13.7269 10.3445 13.7811C10.4256 13.8353 10.4889 13.9124 10.5262 14.0026C10.5636 14.0927 10.5733 14.1919 10.5543 14.2876C10.5352 14.3834 10.4883 14.4713 10.4192 14.5403C10.3502 14.6093 10.2623 14.6563 10.1666 14.6753C10.0709 14.6944 9.97169 14.6846 9.88153 14.6472C9.79137 14.6099 9.71431 14.5467 9.66009 14.4655C9.60588 14.3844 9.57694 14.289 9.57694 14.1914C9.57694 14.0605 9.62892 13.935 9.72146 13.8425C9.81399 13.75 9.93949 13.698 10.0704 13.698ZM17.965 13.698C18.0625 13.698 18.1579 13.7269 18.2391 13.7811C18.3202 13.8353 18.3835 13.9124 18.4208 14.0026C18.4582 14.0927 18.4679 14.1919 18.4489 14.2876C18.4298 14.3834 18.3829 14.4713 18.3138 14.5403C18.2448 14.6093 18.1569 14.6563 18.0612 14.6753C17.9655 14.6944 17.8663 14.6846 17.7761 14.6472C17.686 14.6099 17.6089 14.5467 17.5547 14.4655C17.5005 14.3844 17.4715 14.289 17.4715 14.1914C17.4715 14.0605 17.5235 13.935 17.6161 13.8425C17.7086 13.75 17.8341 13.698 17.965 13.698ZM18.9518 26.5267C18.0735 26.5267 17.2149 26.2663 16.4846 25.7783C15.7544 25.2904 15.1852 24.5968 14.8491 23.7854C14.513 22.9739 14.425 22.0811 14.5964 21.2196C14.7677 20.3582 15.1907 19.567 15.8117 18.9459C16.4328 18.3249 17.224 17.9019 18.0854 17.7306C18.9469 17.5593 19.8397 17.6472 20.6512 17.9833C21.4626 18.3194 22.1561 18.8886 22.6441 19.6189C23.132 20.3491 23.3925 21.2077 23.3925 22.086C23.3912 23.2633 22.9229 24.3921 22.0904 25.2246C21.2579 26.0571 20.1291 26.5254 18.9518 26.5267Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Order;
