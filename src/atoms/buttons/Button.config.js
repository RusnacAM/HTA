export const ButtonConfig = {
  intent: {
    primary: ["bg-primary-500", "text-grey-100"],
    light: ["bg-white", "text-grey-400"],
  },
  size: {
    small: ["py-1", "px-5"],
    medium: ["py-2.5", "px-5"],
    large: ["py-3.5", "px-5"],
    rounded: ["p-[10px]"],
  },
  fullWidth: {
    true: "w-full",
  },
  disabled: {
    true: ["bg-transparent", "border", "border-grey-400", "text-grey-400"],
  },
  corner: {
    rectangle: "rounded",
    rounded: "rounded-full",
  },
};
