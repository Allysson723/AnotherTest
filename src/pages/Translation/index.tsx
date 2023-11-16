import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TranslationPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-[65px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_33.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-[24%] md:w-full">
            <Button
              className="border border-blue_gray-400 border-solid cursor-pointer flex items-center justify-center min-w-[111px] pr-4 py-[22px]"
              leftIcon={
                <Img
                  className="h-6 my-5 mx-4"
                  src="images/img_trash_24X24.svg"
                  alt="trash"
                />
              }
              shape="round"
              color="white_A700"
            >
              <div className="font-medium text-left text-xl">Text</div>
            </Button>
            <Button
              className="border border-blue_gray-400 border-solid cursor-pointer flex items-center justify-center min-w-[177px] pr-4 py-[22px]"
              leftIcon={
                <Img
                  className="h-6 my-5 mx-4"
                  src="images/img_file_3.svg"
                  alt="file"
                />
              }
              shape="round"
              color="white_A700"
            >
              <div className="font-medium text-left text-xl">Documents</div>
            </Button>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-end pt-4 shadow-bs1 w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[50px] w-[74%] md:w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-[32%] md:w-full">
                  <div className="flex flex-row gap-4 items-start justify-between w-[87%]">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start p-2.5 w-full">
                        <Text
                          className="text-base text-blue-A700 w-auto"
                          size="txtGilroyMedium16BlueA700"
                        >
                          English
                        </Text>
                      </div>
                      <Line className="bg-blue-A700 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        Sapnish
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        French
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown Two"
                  />
                </div>
                <Img
                  className="h-6 md:ml-[0] ml-[280px] md:mt-0 mt-2.5 w-6"
                  src="images/img_exchangeoutlin.svg"
                  alt="exchangeOutlin"
                />
                <div className="flex flex-row gap-4 items-center justify-between md:ml-[0] ml-[50px] w-[32%] md:w-full">
                  <div className="flex flex-row gap-4 items-start justify-between w-[87%]">
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        English
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start p-2.5 w-full">
                        <Text
                          className="text-base text-blue-A700 w-auto"
                          size="txtGilroyMedium16BlueA700"
                        >
                          Sapnish
                        </Text>
                      </div>
                      <Line className="bg-blue-A700 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        French
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown Three"
                  />
                </div>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[596px] items-start justify-start w-[44%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-200 text-lg"
                    size="txtGilroyMedium18Bluegray200"
                  >
                    Placeholder text
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_24X24.svg"
                    alt="close"
                  />
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-[12%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_microphone_24X24.svg"
                    alt="microphone"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_volume_24X24.svg"
                    alt="volume"
                  />
                </div>
              </div>
              <Line className="bg-blue_gray-100 h-[704px] md:h-px md:ml-[0] ml-[50px] md:w-full w-px" />
              <div className="bg-gray-50_02 flex flex-col md:gap-10 gap-[596px] items-start justify-end p-[25px] sm:px-5 w-[53%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[25px] mt-2.5 text-blue_gray-200 text-lg"
                  size="txtGilroyMedium18Bluegray200"
                >
                  Placeholder text
                </Text>
                <div className="flex flex-row sm:gap-10 items-center justify-between mb-[5px] md:ml-[0] ml-[25px] w-[96%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_volume_24X24.svg"
                    alt="volume One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_file_4.svg"
                    alt="file"
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

export default TranslationPage;
