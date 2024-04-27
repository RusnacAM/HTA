import { cva } from "class-variance-authority";
import Dot from "../icons/filled/Dot";
import React from "react";
import { ButtonConfig } from "./Button.config";

const ButtonVariants = cva(
  ["h-fit", "font-montserrat", "font-semibold", "text-sm"],
  {
    variants: {
      ...ButtonConfig,
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
      corner: "rectangle",
      fullWidth: false,
      disabled: false,
    },
  }
);

export default function Button({
  className,
  btnType = "submit",
  intent,
  size,
  corner,
  fullWidth,
  disabled,
  btnIcon,
  setIcon = <Dot />,
  children,
  ...props
}) {
  return (
    <button
      type={btnType}
      className={ButtonVariants({
        intent,
        size,
        corner,
        fullWidth,
        disabled,
        className,
      })}
      {...props}
    >
      <span className="flex flex-row items-center justify-center gap-3">
        {btnIcon === "icon" && setIcon}
        {btnIcon === "left-icon" || btnIcon === "two-icon" ? setIcon : null}
        {children}
        {btnIcon === "right-icon" || btnIcon === "two-icon" ? setIcon : null}
      </span>
    </button>
  );
}
