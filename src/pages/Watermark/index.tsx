import React from "react";

import { Button, Img, List, Text } from "components";

const WatermarkPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_34.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
              <div className="flex flex-row gap-3 items-center justify-between pl-[5px] py-[5px] w-[28%] sm:w-full">
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
              <div className="flex flex-row gap-[9px] items-center justify-center ml-6 pl-[5px] py-[5px] w-[28%] sm:w-full">
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
              <Text
                className="ml-8 mt-[11px] text-base text-gray-900"
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
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[1268px] mb-1.5 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[34px] items-center justify-start w-[76%] md:w-full">
            <div className="flex flex-col gap-[17px] items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32"
                >
                  Add a Watermark
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[105px] py-[17px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                >
                  Save
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col font-roboto h-[746px] items-end justify-end p-[60px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group10145.png')" }}
              >
                <div className="md:h-[618px] h-[81px] mb-[150px] mt-[395px] relative w-[22%]">
                  <div className="absolute bg-blue_gray-100_4c border border-dashed border-white-A700 flex flex-col items-end justify-end left-[0] p-[23px] sm:px-5 rounded-md top-[0]">
                    <Text
                      className="mr-0.5 mt-0.5 sm:text-[21.71px] md:text-[23.71px] text-[25.71px] text-gray-50_02"
                      size="txtRobotoRomanSemiBold2571"
                    >
                      Sunshine
                    </Text>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-4 right-[0] w-4"
                    src="images/img_minimize_16X16.svg"
                    alt="minimize"
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[100px] items-start justify-center w-[74%] md:w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-[6%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_music.svg"
                  alt="music"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12Bluegray400"
                >
                  Rotate
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-[5%] sm:w-full">
                <Img className="h-8 w-8" src="images/img_crop.svg" alt="crop" />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12Bluegray400"
                >
                  Crop
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-start w-[5%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_textfieldssol.svg"
                  alt="textfieldsSol"
                />
                <Text
                  className="text-blue-A700 text-xs"
                  size="txtGilroySemiBold12BlueA700"
                >
                  Text
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-[6%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_dashboard.svg"
                  alt="dashboard"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12Bluegray400"
                >
                  Splash
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-start w-[5%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_alarm.svg"
                  alt="alarm"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12Bluegray400"
                >
                  Blur
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-center justify-start w-[5%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_settings_32X32.svg"
                  alt="settings"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12Bluegray400"
                >
                  Adjust
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[33px] items-start justify-start md:mt-0 mt-1.5 w-[23%] md:w-full">
            <Text
              className="text-black-900 text-lg"
              size="txtGilroyMedium18Black900"
            >
              Fonts
            </Text>
            <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start p-4 rounded-md shadow-bs6 w-full">
              <List
                className="flex flex-col gap-6 items-center mb-[13px] rounded-[5px] w-full"
                orientation="vertical"
              >
                <div className="bg-blue_gray-100_02 flex flex-1 flex-col items-end justify-end p-[18px] rounded-[5px] w-full">
                  <div className="flex flex-col gap-[34px] justify-start mr-[5px] mt-[47px]">
                    <Text
                      className="mr-[55px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtRobotoRomanSemiBold24"
                    >
                      Sunshine
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[103px] text-base text-blue_gray-400"
                      size="txtRobotoRomanSemiBold16"
                    >
                      Roboto
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-100_02 flex flex-1 flex-col items-end justify-end p-[18px] rounded-[5px] w-full">
                  <div className="flex flex-col gap-[34px] justify-start mr-[5px] mt-12">
                    <Text
                      className="mr-[49px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtSaralaBold24"
                    >
                      Sunshine
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[109px] text-base text-blue_gray-400"
                      size="txtRobotoRomanSemiBold16"
                    >
                      Sarala
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-100_02 flex flex-1 flex-col items-end justify-end p-[18px] rounded-[5px] w-full">
                  <div className="flex flex-col gap-[33px] justify-start mr-[5px] mt-12">
                    <Text
                      className="mr-[55px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtHelveticaNeue24"
                    >
                      Sunshine
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[87px] text-base text-blue_gray-400"
                      size="txtRobotoRomanSemiBold16"
                    >
                      Helvetica
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-100_02 flex flex-1 flex-col items-end justify-end p-[18px] rounded-[5px] w-full">
                  <div className="flex flex-col gap-[34px] justify-start mr-[5px] mt-12">
                    <Text
                      className="mr-[51px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInterSemiBold24"
                    >
                      Sunshine
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[125px] text-base text-blue_gray-400"
                      size="txtRobotoRomanSemiBold16"
                    >
                      Inter
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatermarkPage;
