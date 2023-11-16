import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const InteractiveFAQsPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-20 items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_18.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="ml-0.5 text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text
                className="text-base text-gray-900"
                size="txtGilroyMedium16Gray900"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16Gray900">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center"
                shape="round"
                color="blue_A700"
                size="3xl"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start max-w-[940px] mb-[212px] mx-auto pt-[13px] md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-[63%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtGilroySemiBold36Black900"
            >
              Hello, how can we help?
            </Text>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <Input
                name="InputField"
                placeholder="Ask a question..."
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex sm:flex-1 sm:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="round"
                size="2xl"
              ></Input>
              <Button
                className="cursor-pointer font-medium min-w-[88px] sm:mt-0 mt-0.5 py-[17px] text-base text-center"
                shape="round"
                color="blue_A700"
              >
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-1.5 text-blue_gray-900 text-xl"
                    size="txtGilroySemiBold20"
                  >
                    What Is This App & How It Works?
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_menu_32X32.svg"
                    alt="menu"
                  />
                </div>
                <Text
                  className="leading-[26.00px] text-base text-blue_gray-400 w-[91%] sm:w-full"
                  size="txtGilroyRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                  augue at fringilla posuere ac, et diam. Augue pulvinar eget
                  purus, iaculis porta adipiscing pulvinar mi ante. Suspendisse
                  ullamcorper etiam natoque et blandit. Adipiscing lacus, vitae
                  morbi sed. Amet, enim vel nec ipsum ac sed. Nulla fermentum
                  turpis penatibus placerat.
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                <Text
                  className="mt-1.5 text-blue_gray-900 text-xl"
                  size="txtGilroySemiBold20"
                >
                  What Is This App & How It Works?
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus_32X32.svg"
                  alt="plus"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <Input
              name="Frame34747"
              placeholder="What Is This App & How It Works?"
              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
              wrapClassName="flex w-full"
              suffix={
                <Img
                  className="mt-px mb-[21px] h-8 ml-[35px]"
                  src="images/img_plus_32X32.svg"
                  alt="plus"
                />
              }
              color="blue_gray_100"
              size="xs"
              variant="underline"
            ></Input>
            <Input
              name="Frame34748"
              placeholder="What Is This App & How It Works?"
              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
              wrapClassName="flex w-full"
              suffix={
                <Img
                  className="mt-px mb-[21px] h-8 ml-[35px]"
                  src="images/img_plus_32X32.svg"
                  alt="plus"
                />
              }
              color="blue_gray_100"
              size="xs"
              variant="underline"
            ></Input>
            <Input
              name="Frame34749"
              placeholder="What Is This App & How It Works?"
              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
              wrapClassName="flex w-full"
              suffix={
                <Img
                  className="mt-px mb-[21px] h-8 ml-[35px]"
                  src="images/img_plus_32X32.svg"
                  alt="plus"
                />
              }
              color="blue_gray_100"
              size="xs"
              variant="underline"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveFAQsPage;
