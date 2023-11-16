import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const FriendListPage: React.FC = () => {
  const [group10337value, setGroup10337value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_2.svg"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Products
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Resouces
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-[5px] text-base text-gray-900"
                size="txtGilroyMedium16Gray900"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
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
        <div className="flex flex-col items-center justify-start max-w-[1268px] mb-[308px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="flex md:flex-1 flex-row items-start justify-between md:mt-0 mt-3 pt-1 w-[21%] md:w-full">
                <div className="flex flex-col gap-[19px] items-center justify-start">
                  <Text
                    className="text-base text-blue-A700"
                    size="txtGilroyMedium16BlueA700"
                  >
                    All Friends
                  </Text>
                  <Line className="bg-blue-A700 h-0.5 w-full" />
                </div>
                <Text
                  className="mt-[3px] text-base text-blue_gray-400"
                  size="txtGilroyMedium16"
                >
                  Recently Added
                </Text>
              </div>
              <Input
                name="Group10337"
                placeholder="Search Friends"
                value={group10337value}
                onChange={(e) => setGroup10337value(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 rounded-lg md:w-full"
                suffix={
                  group10337value?.length > 0 ? (
                    <CloseSVG
                      className="mt-[17px] mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      onClick={() => setGroup10337value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      className="mt-[17px] mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      src="images/img_search_blue_A200.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
                size="2xl"
              ></Input>
            </div>
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                  <div className="flex flex-col items-center justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Rose J. Henry
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      24 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[190px] sm:mt-0 my-[13px] w-6"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Kai Caudle
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      12 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[194px] w-6"
                    src="images/img_user.svg"
                    alt="user One"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_1.png"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Carmelo Rousseau
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      14 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 ml-36 sm:ml-[0] w-6"
                    src="images/img_user.svg"
                    alt="user Two"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_2.png"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Ali Comer
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      10 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 ml-48 sm:ml-[0] w-6"
                    src="images/img_user.svg"
                    alt="user Three"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_3.png"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-1.5">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Jacklyn Kovach
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      09 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[170px] sm:mt-0 my-[13px] w-6"
                    src="images/img_user.svg"
                    alt="user Four"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_4.png"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Landon Mosby
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      05 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[179px] sm:mt-0 my-[13px] w-6"
                    src="images/img_user.svg"
                    alt="user Five"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_5.png"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Man Marin
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      31 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[194px] w-6"
                    src="images/img_user.svg"
                    alt="user Six"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_6.png"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-[9px] items-center justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Benito Nickel
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      50 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[189px] w-6"
                    src="images/img_user.svg"
                    alt="user Seven"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_7.png"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-1.5">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Angelyn Weiner
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      35 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[169px] sm:mt-0 my-[13px] w-6"
                    src="images/img_user.svg"
                    alt="user Eight"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex flex-col items-center justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Rose J. Henry
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      24 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[190px] sm:mt-0 my-[13px] w-6"
                    src="images/img_user.svg"
                    alt="user Nine"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Kai Caudle
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      12 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[194px] w-6"
                    src="images/img_user.svg"
                    alt="user Ten"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_1.png"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Carmelo Rousseau
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      14 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 ml-36 sm:ml-[0] w-6"
                    src="images/img_user.svg"
                    alt="user Eleven"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_2.png"
                    alt="ProfileImgLarg Twelve"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Ali Comer
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      10 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 ml-48 sm:ml-[0] w-6"
                    src="images/img_user.svg"
                    alt="user Twelve"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_3.png"
                    alt="ProfileImgLarg Thirteen"
                  />
                  <div className="flex flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-1.5">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Jacklyn Kovach
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      09 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[170px] sm:mt-0 my-[13px] w-6"
                    src="images/img_user.svg"
                    alt="user Thirteen"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_4.png"
                    alt="ProfileImgLarg Fourteen"
                  />
                  <div className="flex flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Landon Mosby
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      05 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[179px] sm:mt-0 my-[13px] w-6"
                    src="images/img_user.svg"
                    alt="user Fourteen"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_5.png"
                    alt="ProfileImgLarg Fifteen"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Man Marin
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      31 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[194px] w-6"
                    src="images/img_user.svg"
                    alt="user Fifteen"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_6.png"
                    alt="ProfileImgLarg Sixteen"
                  />
                  <div className="flex flex-col gap-[9px] items-center justify-start ml-4 sm:ml-[0]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Benito Nickel
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      50 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[189px] w-6"
                    src="images/img_user.svg"
                    alt="user Sixteen"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_7.png"
                    alt="ProfileImgLarg Seventeen"
                  />
                  <div className="flex flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-1.5">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Angelyn Weiner
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      35 Mutual friends
                    </Text>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[169px] sm:mt-0 my-[13px] w-6"
                    src="images/img_user.svg"
                    alt="user Seventeen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendListPage;
