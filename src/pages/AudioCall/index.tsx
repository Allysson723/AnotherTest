import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const AudioCallPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto p-4 w-full">
        <header className="flex items-center justify-center mt-[19px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_35X162.svg"
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
                    src="images/img_arrowdown.svg"
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
                    src="images/img_arrowdown.svg"
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
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[54px] items-center justify-start w-[66%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-black-900 flex flex-col items-center justify-start rounded-md w-full">
                <div className="bg-gradient1  flex flex-col items-start justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between ml-1.5 md:ml-[0] w-full">
                    <Text
                      className="mt-[11px] text-lg text-white-A700"
                      size="txtGilroyRegular18"
                    >
                      3:00
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat md:h-6 h-[150px] p-2 relative rounded-[3px] w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group45.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[5%] h-6 right-[5%] w-6"
                        src="images/img_cut.svg"
                        alt="cut"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[347px] mt-6 w-[56%] md:w-full">
                    <div className="border border-blue_gray-400 border-solid flex flex-col h-[94px] items-center justify-end mt-[135px] p-2.5 rounded-[50%] w-[94px]">
                      <Img
                        className="h-[72px] md:h-auto mt-0.5 rounded-[50%] w-[72px]"
                        src="images/img_ellipse70.png"
                        alt="EllipseSeventy"
                      />
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start w-[35%]">
                      <div
                        className="bg-cover bg-no-repeat md:h-6 h-[150px] p-2 relative w-[150px]"
                        style={{
                          backgroundImage: "url('images/img_group46.png')",
                        }}
                      >
                        <Img
                          className="absolute bottom-[5%] h-6 right-[5%] w-6"
                          src="images/img_cut.svg"
                          alt="cut One"
                        />
                      </div>
                      <div
                        className="bg-cover bg-no-repeat md:h-6 h-[150px] p-2 relative w-[150px]"
                        style={{
                          backgroundImage: "url('images/img_group47.png')",
                        }}
                      >
                        <Img
                          className="absolute bottom-[5%] h-6 right-[5%] w-6"
                          src="images/img_cut.svg"
                          alt="cut Two"
                        />
                      </div>
                      <div
                        className="bg-cover bg-no-repeat md:h-6 h-[150px] p-2 relative w-[150px]"
                        style={{
                          backgroundImage: "url('images/img_group48.png')",
                        }}
                      >
                        <Img
                          className="absolute bottom-[5%] h-6 right-[5%] w-6"
                          src="images/img_cut.svg"
                          alt="cut Three"
                        />
                      </div>
                    </div>
                  </div>
                  <Text
                    className="ml-1.5 md:ml-[0] my-[11px] text-lg text-white-A700"
                    size="txtGilroyRegular18"
                  >
                    Hiba Nawab
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-[46%] md:w-full">
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] shadow-bs w-16"
                shape="circle"
                color="white_A700"
              >
                <Img
                  className="h-8"
                  src="images/img_videocamera.svg"
                  alt="videocamera"
                />
              </Button>
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] shadow-bs w-16"
                shape="circle"
                color="white_A700"
              >
                <Img
                  className="h-8"
                  src="images/img_microphoneoutl.svg"
                  alt="microphoneOutl"
                />
              </Button>
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] w-16"
                shape="circle"
                color="red_A200_01"
              >
                <Img className="h-8" src="images/img_call.svg" alt="call" />
              </Button>
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] w-16"
                shape="circle"
                color="blue_gray_400"
              >
                <Img className="h-8" src="images/img_volume.svg" alt="volume" />
              </Button>
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] shadow-bs w-16"
                shape="circle"
                color="white_A700"
              >
                <Img
                  className="h-8"
                  src="images/img_group9759.svg"
                  alt="Group9759"
                />
              </Button>
            </div>
          </div>
          <div className="bg-gray-50 border border-blue_gray-50 border-solid flex md:flex-1 flex-col items-start justify-start p-2 rounded-md w-[31%] md:w-full">
            <div className="border-b border-blue_gray-50 border-solid flex flex-row items-start justify-start md:ml-[0] ml-[22px] w-[89%] md:w-full">
              <div className="flex flex-col gap-1 items-center justify-start w-[166px]">
                <div className="flex flex-col items-center justify-center p-2.5 w-full">
                  <Text
                    className="text-base text-blue-A700 w-auto"
                    size="txtGilroyMedium16BlueA700"
                  >
                    Messages(4)
                  </Text>
                </div>
                <Line className="bg-blue-A700 h-0.5 w-full" />
              </div>
              <div className="flex flex-col items-center justify-center w-[166px]">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtGilroyMedium16"
                >
                  Participants
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col gap-4 md:ml-[0] ml-[22px] mt-[265px] w-[52%]"
              orientation="vertical"
            >
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_461.png"
                  alt="FourHundredSixtyOne"
                />
                <div className="flex flex-col gap-3 items-start justify-start mt-1">
                  <Text
                    className="text-black-900_03 text-xs"
                    size="txtGilroySemiBold12"
                  >
                    Jane Cooper
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_group46.png"
                  alt="FourHundredSixtyOne One"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="text-black-900_03 text-xs"
                    size="txtGilroySemiBold12"
                  >
                    Wade Warren
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_group45.png"
                  alt="FourHundredSixtyOne Two"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="text-black-900_03 text-xs"
                    size="txtGilroySemiBold12"
                  >
                    Cameron Williamson
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_group47.png"
                  alt="FourHundredSixtyOne Three"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="text-black-900_03 text-xs"
                    size="txtGilroySemiBold12"
                  >
                    Esther Howard
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_group48.png"
                  alt="FourHundredSixtyOne Four"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start mt-1">
                  <Text
                    className="text-black-900_03 text-xs"
                    size="txtGilroySemiBold12"
                  >
                    Brooklyn Simmons
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_461_28X28.png"
                  alt="FourHundredSixtyOne Five"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="text-black-900_03 text-xs"
                    size="txtGilroySemiBold12"
                  >
                    Leslie Alexander
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_461_1.png"
                  alt="FourHundredSixtyOne Six"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start mt-1">
                  <Text
                    className="text-black-900_03 text-xs"
                    size="txtGilroySemiBold12"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_461_2.png"
                  alt="FourHundredSixtyOne Seven"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="text-black-900_03 text-xs"
                    size="txtGilroySemiBold12"
                  >
                    Robert Fox
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-row gap-2 items-center justify-start mb-5 md:ml-[0] ml-[22px] mt-[30px] w-[89%] md:w-full">
              <Input
                name="Group9684"
                placeholder="Write a comment..."
                className="p-0 placeholder:text-blue_gray-400 text-left text-sm w-full white_A700_white_A700_00_border"
                wrapClassName="bg-transparent border border-solid flex w-[84%]"
                suffix={
                  <Img
                    className="h-5 ml-[35px] mr-4 my-3.5"
                    src="images/img_user.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="blue_gray_50"
                size="2xl"
              ></Input>
              <Button
                className="border border-solid flex h-12 items-center justify-center w-12 white_A700_white_A700_00_border2"
                shape="round"
                color="blue_gray_50"
                size="2xl"
              >
                <Img className="h-5" src="images/img_send.svg" alt="send" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioCallPage;
