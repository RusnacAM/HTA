import React from "react";
import { cva } from "class-variance-authority";
import { InputConfig } from "./Input.config";
import Dot from "../icons/filled/Dot";
import InputContainer from "./components/InputContainer";
import Icon from "./components/Icon";

const input = cva(
  "flex items-center font-montserrat text-grey-400 font-medium focus:outline-1 focus:outline-grey-400",
  {
    variants: { ...InputConfig },
    defaultVariants: {
      intent: "default",
      size: "medium",
      border: false,
      fullWidth: false,
      corner: "rectangle",
      background: false,
    },
  }
);

export const Input = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    type,
    name,
    placeHolder = undefined,
    value = undefined,
    label = undefined,
    intent = "default",
    size,
    border,
    fullWidth,
    corner,
    background,
    icon = <Dot />,
    onChange,
    onBlur,
    onFocus
  } = props;

  return (
    <InputContainer fullWidth={fullWidth}>
      {label && (
        <label htmlFor={id} className="font-semibold text-grey-500 text-sm">
          {label}
        </label>
      )}
      <div
        className={input({
          intent,
          size,
          border,
          fullWidth,
          corner,
          background,
          className,
        })}
      >
        {intent !== "default" && <Icon intent={intent}>{icon}</Icon>}
        <input
          ref={ref}
          id={id}
          value={value}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeHolder}
          className="bg-transparent outline-0 w-full focus:ring-0 outline-none focus:outline-none"
        />
      </div>
    </InputContainer>
  );
});
