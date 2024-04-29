import { cva } from "class-variance-authority";

const icon = cva("text-grey-400", {
  variants: {
    intent: {
      leftIcon: "mr-1",
      rightIcon: "ml-1",
    },
  },
});

const Icon = ({ intent, children }) => {
  return <div className={icon({ intent })}>{children}</div>;
};

export default Icon;
