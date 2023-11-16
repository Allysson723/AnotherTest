import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" } as const;
const variants = {
  fill: {
    blue_gray_300_87: "bg-blue_gray-300_87",
    white_A700: "bg-white-A700 text-blue_gray-400",
    red_A200_01: "bg-red-A200_01 shadow-bs",
    blue_gray_400: "bg-blue_gray-400 shadow-bs",
    blue_gray_50: "bg-blue_gray-50",
    gray_300: "bg-gray-300",
    gray_50_04: "bg-gray-50_04",
    red_400: "bg-red-400",
    blue_A200: "bg-blue-A200",
    indigo_50: "bg-indigo-50 text-black-900",
    blue_50: "bg-blue-50 text-blue-A700",
    blue_gray_100: "bg-blue_gray-100 text-blue_gray-400_01",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
  outline: {
    blue_gray_400:
      "border border-blue_gray-400 border-solid text-blue_gray-400",
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
  },
  gradient: { black_900_66_black_900_66: "bg-gradient  text-white-A700" },
} as const;
const sizes = {
  xs: "p-px",
  sm: "p-[5px]",
  md: "pl-[7px] py-[7px]",
  lg: "pr-2 py-2",
  xl: "pl-2 pr-[9px] py-[9px]",
  "2xl": "p-[11px]",
  "3xl": "p-3.5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
