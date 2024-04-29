import { cva } from "class-variance-authority";

const container = cva("flex flex-col gap-2 w-fit", {
  variants: {
    fullWidth: {
      true: "w-full",
    },
  },
});

const InputContainer = ({ fullWidth, children }) => {
  return <div className={container({ fullWidth })}>{children}</div>;
};

export default InputContainer;
