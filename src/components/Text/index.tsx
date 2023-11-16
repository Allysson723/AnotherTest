import React from "react";

const sizeClasses = {
  txtGilroySemiBold16Black90003: "font-gilroy font-semibold",
  txtRobotoRomanSemiBold2571: "font-roboto font-semibold",
  txtGilroySemiBold16Black90001: "font-gilroy font-semibold",
  txtGilroySemiBold10Bluegray900: "font-gilroy font-semibold",
  txtGilroyRegular14Black900: "font-gilroy font-normal",
  txtSFProTextRegular15: "font-normal font-sfprotext",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroyMedium100: "font-gilroy font-medium",
  txtSFProTextRegular11: "font-normal font-sfprotext",
  txtInterSemiBold24: "font-inter font-semibold",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray300: "font-gilroy font-normal",
  txtGilroyMedium32: "font-gilroy font-medium",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroyMedium24Black900: "font-gilroy font-medium",
  txtSaralaBold24: "font-bold font-sarala",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtGilroyRegular16Bluegray900: "font-gilroy font-normal",
  txtGilroyMedium24Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium18Bluegray700: "font-gilroy font-medium",
  txtGilroySemiBold10Bluegray400: "font-gilroy font-semibold",
  txtGilroySemiBold18Black90001: "font-gilroy font-semibold",
  txtGilroyMedium24Black90002: "font-gilroy font-medium",
  txtGilroyMedium24Black90001: "font-gilroy font-medium",
  txtGilroyBold18Gray90003: "font-bold font-gilroy",
  txtGilroyMedium12Black900: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray800: "font-gilroy font-medium",
  txtGilroyMedium12Red700: "font-gilroy font-medium",
  txtGilroySemiBold24BlueA700: "font-gilroy font-semibold",
  txtGilroySemiBold14Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium12Bluegray300: "font-gilroy font-medium",
  txtGilroyBold24Bluegray900: "font-bold font-gilroy",
  txtGilroySemiBold12: "font-gilroy font-semibold",
  txtGilroyMedium14Black90001: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold10: "font-gilroy font-semibold",
  txtGilroyMedium14Black90003: "font-gilroy font-medium",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyRegular16BlueA700: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold12Bluegray400: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtGilroyBold40: "font-bold font-gilroy",
  txtRobotoRegular12: "font-normal font-roboto",
  txtGilroyRegular12Bluegray300: "font-gilroy font-normal",
  txtGilroyRegular14Black90004: "font-gilroy font-normal",
  txtGilroyMedium14Bluegray300: "font-gilroy font-medium",
  txtGilroyMedium18Bluegray400: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium14Bluegray40090: "font-gilroy font-medium",
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroySemiBold24Bluegray80001: "font-gilroy font-semibold",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyRegular18Bluegray400: "font-gilroy font-normal",
  txtRobotoRomanSemiBold16: "font-roboto font-semibold",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroySemiBold20Bluegray300: "font-gilroy font-semibold",
  txtGilroyMedium16Gray900: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray900: "font-gilroy font-normal",
  txtGilroyMedium16Bluegray700: "font-gilroy font-medium",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtGilroyMedium16Bluegray300: "font-gilroy font-medium",
  txtGilroySemiBold24Black900: "font-gilroy font-semibold",
  txtRobotoRomanSemiBold24: "font-roboto font-semibold",
  txtHelveticaNeue24: "font-helveticaneue font-normal",
  txtGilroyMedium14BlueA700: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroySemiBold18Bluegray400: "font-gilroy font-semibold",
  txtGilroySemiBold30: "font-gilroy font-semibold",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroySemiBold12BlueA700: "font-gilroy font-semibold",
  txtGilroyMedium14WhiteA700: "font-gilroy font-medium",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroySemiBold16Gray90004: "font-gilroy font-semibold",
  txtGilroyRegular12Bluegray400: "font-gilroy font-normal",
  txtGilroyMedium14Bluegray600: "font-gilroy font-medium",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtGilroyBold16: "font-bold font-gilroy",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium18Black900: "font-gilroy font-medium",
  txtGilroyBold14: "font-bold font-gilroy",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroyMedium14Bluegray900: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray600: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray200: "font-gilroy font-medium",
  txtGilroyMedium12WhiteA700: "font-gilroy font-medium",
  txtGilroyMedium14Black900: "font-gilroy font-medium",
  txtGilroyMedium10: "font-gilroy font-medium",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroySemiBold36Black900: "font-gilroy font-semibold",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroyBold24BlueA700: "font-bold font-gilroy",
  txtGilroyMedium18Bluegray600: "font-gilroy font-medium",
  txtGilroyMedium18Bluegray200: "font-gilroy font-medium",
  txtGilroySemiBold20Black900: "font-gilroy font-semibold",
  txtGilroySemiBold18Gray90001: "font-gilroy font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
