import React from "react";

import { Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const KarmaPointsPage: React.FC = () => {
  const [group10337value, setGroup10337value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-2.5">
              <Img
                className="h-[35px]"
                src="images/img_group10392_29.svg"
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
            <Img
              className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[392px] rounded-[50%] w-14"
              src="images/img_profileimglarg.png"
              alt="ProfileImgLarg"
            />
          </div>
        </header>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1268px] mb-[216px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
            <div className="flex flex-col items-center justify-start md:mt-0 mt-3">
              <div className="flex flex-row items-start justify-between pt-1 w-[74%] md:w-full">
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyMedium16"
                >
                  Friends
                </Text>
                <div className="flex flex-col gap-5 items-center justify-start">
                  <Text
                    className="text-base text-blue-A700"
                    size="txtGilroyMedium16BlueA700"
                  >
                    Local
                  </Text>
                  <Line className="bg-blue-A700 h-0.5 w-full" />
                </div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyMedium16"
                >
                  Worldwide
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
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
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Rose J. Henry
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Kai Caudle
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_1.png"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-[9px] items-center justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[42%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Carmelo Rousseau
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-[97%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[73px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_2.png"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Ali Comer
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_3.png"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Jacklyn Kovach
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_4.png"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Landon Mosby
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_5.png"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Man Marin
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_6.png"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Benito Nickel
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_7.png"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Angelyn Weiner
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Rose J. Henry
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Kai Caudle
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_1.png"
                    alt="ProfileImgLarg Twelve"
                  />
                  <div className="flex flex-col gap-[9px] items-center justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[42%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Carmelo Rousseau
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-[97%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[73px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_2.png"
                    alt="ProfileImgLarg Thirteen"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Ali Comer
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_3.png"
                    alt="ProfileImgLarg Fourteen"
                  />
                  <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Jacklyn Kovach
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_4.png"
                    alt="ProfileImgLarg Fifteen"
                  />
                  <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Landon Mosby
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_5.png"
                    alt="ProfileImgLarg Sixteen"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Man Marin
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_6.png"
                    alt="ProfileImgLarg Seventeen"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Benito Nickel
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_7.png"
                    alt="ProfileImgLarg Eighteen"
                  />
                  <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-[41%] sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Angelyn Weiner
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray-400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly sm:ml-[0] ml-[78px] w-[22%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroySemiBold24BlueA700"
                    >
                      30
                    </Text>
                    <Text
                      className="leading-[22.00px] text-blue_gray-400 text-center text-sm"
                      size="txtGilroyMedium14"
                    >
                      <>
                        KARMA
                        <br />
                        POINTS
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KarmaPointsPage;
