import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { round: "rounded-md" } as const;
const variants = {
  fill: {
    blue_gray_50: "bg-blue_gray-50 text-blue_gray-400",
    white_A700: "bg-white-A700 text-black-900_01",
    blue_50: "bg-blue-50 text-blue_gray-900",
  },
  underline: {
    blue_gray_100: "border-b border-blue_gray-100 text-blue_gray-900",
  },
} as const;
const sizes = {
  xs: "pb-[21px] pt-[7px]",
  md: "pb-[9px] pl-[9px] pt-3.5",
  lg: "pb-[9px] pr-[9px] pt-[15px]",
  xl: "pl-4 pr-[17px] py-[17px]",
  "2xl": "pb-3 pt-[18px] px-3",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "md",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
