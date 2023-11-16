import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const SpellcheckPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[350px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="h-[1103px] md:h-[983px] relative w-full">
            <div className="absolute bg-gray-50 border-blue_gray-100 border-r border-solid h-[1080px] md:h-[35px] inset-[0] justify-center m-auto p-[42px] md:px-10 sm:px-5 w-full">
              <Img
                className="absolute h-[35px] inset-x-[0] mx-auto top-[4%] w-[47%]"
                src="images/img_group_30.svg"
                alt="Group"
              />
            </div>
            <div className="absolute bottom-[0] flex flex-col gap-6 inset-x-[0] items-start justify-start mx-auto w-[87%]">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroySemiBold24Black900"
              >
                Message
              </Text>
              <div className="bg-white-A700 border border-blue_gray-300 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-md w-full">
                <Img
                  className="h-5 my-1 w-5"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="text-base text-blue_gray-200"
                  size="txtGilroyMedium16Bluegray200"
                >
                  Search people or message
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Design Group
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Rose J. Henry
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_1.png"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Kai Caudle
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_2.png"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Ali Comer
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_3.png"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Jacklyn Kovach
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_4.png"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Landon Mosby
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_5.png"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Man Marin
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_6.png"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Benito Nickel
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_7.png"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_8.png"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Anton Ligon
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_9.png"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Carmelo Rousseau
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Design Group
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg Twelve"
                  />
                  <div className="flex flex-col items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Design Group
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex-1 sm:h-[1045px] h-[1081px] md:h-[1228px] md:px-5 relative w-full">
          <div className="flex flex-row h-full items-start justify-center ml-auto mr-[238px] mt-[328px] w-[6%]">
            <Text
              className="mt-[3px] text-blue_gray-400 text-xs"
              size="txtGilroyRegular12Bluegray400"
            >
              2:01pm
            </Text>
            <Img
              className="h-4 ml-1 w-4"
              src="images/img_airplane.svg"
              alt="airplane"
            />
          </div>
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto py-6 w-full">
            <div className="flex flex-col gap-[29px] items-center justify-start mb-[27px] w-full">
              <div className="flex flex-col gap-6 justify-start w-full">
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[50px] w-[15%] md:w-full">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg Thirteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end py-[3px] w-[65%]">
                    <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Rose J. Henry
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-300 text-sm"
                        size="txtGilroyRegular14Bluegray300"
                      >
                        @rosie
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-col gap-[55px] items-center justify-start w-[91%] md:w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-1/4 md:w-full">
                    <div className="h-[53px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-5 left-[0] w-[11%]"
                        src="images/img_polygon1.svg"
                        alt="PolygonOne"
                      />
                      <Button
                        className="absolute cursor-pointer font-medium h-full inset-y-[0] min-w-[228px] my-auto py-[15px] right-[0] rounded-[10px] text-center text-lg"
                        color="indigo_50"
                      >
                        Hi Jake, how are you?
                      </Button>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Yesterday, 2:01pm
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[472px] mt-9 text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Today
                  </Text>
                  <div className="flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[607px] mt-[30px] w-[39%] md:w-full">
                    <div className="md:h-[356px] h-[372px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-5 right-[0] w-[7%]"
                        src="images/img_polygon1_blue_50.svg"
                        alt="PolygonOne One"
                      />
                      <div className="absolute bg-blue-50 md:h-[356px] h-[372px] inset-[0] justify-center m-auto p-2 rotate-[180deg] rounded-[10px] w-[372px] sm:w-full">
                        <Img
                          className="h-[356px] m-auto object-cover rounded-[5px] w-[356px]"
                          src="images/img_rectangle12_356X356.png"
                          alt="RectangleTwelve"
                        />
                        <Button
                          className="absolute bottom-[6%] cursor-pointer font-medium min-w-[70px] right-[6%] rounded-[3px] text-base text-center"
                          size="sm"
                          variant="gradient"
                          color="black_900_66_black_900_66"
                        >
                          01:54
                        </Button>
                        <Button
                          className="absolute flex h-14 inset-[0] items-center justify-center m-auto rounded-[50%] w-14"
                          shape="circle"
                          size="2xl"
                          variant="gradient"
                          color="black_900_66_black_900_66"
                        >
                          <Img
                            className="h-8"
                            src="images/img_offer.svg"
                            alt="offer"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row items-end justify-end w-1/5 md:w-full">
                      <Text
                        className="mt-1.5 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        2:01pm
                      </Text>
                      <Img
                        className="h-6 ml-1 w-6"
                        src="images/img_airplane.svg"
                        alt="airplane One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-[30px] w-[29%] md:w-full">
                    <div className="md:h-[52px] h-[53px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-5 left-[0] w-[9%]"
                        src="images/img_polygon1.svg"
                        alt="PolygonOne Two"
                      />
                      <div className="absolute bg-indigo-50 flex flex-col h-full inset-[0] items-center justify-center m-auto p-2.5 rounded-[10px] w-[97%]">
                        <div className="flex flex-row gap-4 items-center justify-start w-[89%] md:w-full">
                          <Img
                            className="h-8 w-8"
                            src="images/img_playsolid.svg"
                            alt="playSolid"
                          />
                          <Img
                            className="h-3 w-[58%]"
                            src="images/img_group9690.svg"
                            alt="Group9690"
                          />
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyMedium14"
                          >
                            01:54
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      3:02 pm
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start md:ml-[0] ml-[400px] mt-[30px] pb-[3px] w-3/5 md:w-full">
                    <div className="h-[53px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-5 right-[0] w-[5%]"
                        src="images/img_polygon1_blue_50.svg"
                        alt="PolygonOne Three"
                      />
                      <Input
                        name="Frame2485"
                        placeholder="Great I will write later the exact time and place. See you soon!"
                        className="!placeholder:text-black-900 !text-black-900 font-medium justify-center p-0 rotate-[180deg] text-left text-lg w-full"
                        wrapClassName="absolute inset-[0] m-auto rounded-[10px] w-[99%]"
                        color="blue_50"
                        size="2xl"
                      ></Input>
                    </div>
                    <div className="flex flex-row items-start justify-end mt-[5px] w-[11%] md:w-full">
                      <Text
                        className="mt-[3px] text-blue_gray-400 text-xs"
                        size="txtGilroyRegular12Bluegray400"
                      >
                        3:02 pm
                      </Text>
                      <Img
                        className="h-4 ml-1 w-4"
                        src="images/img_airplane.svg"
                        alt="airplane Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-16 relative w-full">
                  <div className="bg-blue_gray-900 flex flex-row gap-3.5 items-center justify-center mb-[-14px] mx-auto p-1.5 rounded-md w-[15%] z-[1]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtGilroyMedium14WhiteA700"
                    >
                      Soon
                    </Text>
                    <Text
                      className="mt-[3px] text-sm text-white-A700"
                      size="txtGilroyMedium14WhiteA700"
                    >
                      soon
                    </Text>
                    <Text
                      className="text-sm text-white-A700"
                      size="txtGilroyMedium14WhiteA700"
                    >
                      soon!
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mt-auto mx-auto w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start mb-0.5 p-3 rounded-md">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Img
                          className="h-5 mb-0.5 w-5"
                          src="images/img_user_2.svg"
                          alt="user"
                        />
                        <Text
                          className="ml-4 md:ml-[0] md:mt-0 mt-[5px] text-blue_gray-900 text-sm"
                          size="txtGilroyMedium14Bluegray900"
                        >
                          Great I will write later the exact time and place. See
                          you s|
                        </Text>
                        <Img
                          className="h-5 mb-0.5 md:ml-[0] ml-[430px] w-5"
                          src="images/img_plus_20X20.svg"
                          alt="plus"
                        />
                        <Img
                          className="h-5 mb-0.5 ml-4 md:ml-[0] w-5"
                          src="images/img_microphone.svg"
                          alt="microphone"
                        />
                      </div>
                    </div>
                    <Button
                      className="border border-blue_gray-100 border-solid flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="white_A700"
                      size="3xl"
                    >
                      <Img
                        className="h-5"
                        src="images/img_send.svg"
                        alt="send"
                      />
                    </Button>
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

export default SpellcheckPage;
