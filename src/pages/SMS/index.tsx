import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const SMSPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[350px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50_01 border-blue_gray-100 border-r border-solid flex flex-col gap-[35px] items-center justify-end p-2.5 w-full">
            <Img
              className="h-[35px] mt-3.5 w-1/2"
              src="images/img_group10392_39.svg"
              alt="Group10392"
            />
            <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroySemiBold24Black900"
              >
                Message
              </Text>
              <div className="bg-white-A700 border border-blue_gray-300 border-solid flex flex-row items-center justify-between mt-4 p-[15px] rounded-lg w-full">
                <Text
                  className="text-base text-blue_gray-200"
                  size="txtGilroyMedium16Bluegray200"
                >
                  Search people or message
                </Text>
                <Img
                  className="h-5 mt-0.5 w-5"
                  src="images/img_search_blue_A200.svg"
                  alt="search"
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-start mt-6 w-full">
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_8.png"
                    alt="ProfileImgLarg"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_2.png"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_3.png"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_4.png"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_5.png"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col gap-[13px] items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_6.png"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_7.png"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_72X72.png"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_1.png"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-10 mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_8.png"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_8.png"
                    alt="ProfileImgLarg Twelve"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    10:05 am
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start pl-[3px] py-[3px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[21px] w-[95%] md:w-full">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg Thirteen"
              />
              <div className="flex flex-col gap-[9px] items-start justify-start ml-4 md:ml-[0] pt-[5px] w-[11%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtGilroySemiBold18"
                  >
                    Rose J. Henry
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-300 text-sm"
                  size="txtGilroyRegular14Bluegray300"
                >
                  @rosie
                </Text>
              </div>
              <Img
                className="h-6 md:ml-[0] ml-[824px] md:mt-0 mt-3.5 w-6"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </div>
            <Line className="bg-blue_gray-100 h-px mt-6 w-full" />
            <div className="flex flex-col items-start justify-start my-[29px] w-[95%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[3px] w-[23%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group9972.svg')" }}
                >
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Hi Jake, how are you?
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtGilroyRegular14"
                >
                  Yesterday, 2:01pm
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[646px] mt-[30px] w-[37%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[372px] items-center justify-start p-2 w-full"
                  style={{
                    backgroundImage: "url('images/img_group10282.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[106px] h-[356px] items-center justify-end p-4 rounded-[5px] w-[356px]"
                    style={{
                      backgroundImage: "url('images/img_rectangle12.png')",
                    }}
                  >
                    <Button
                      className="flex h-14 items-center justify-center mt-[134px] rounded-[50%] w-14"
                      shape="circle"
                      size="2xl"
                      variant="gradient"
                      color="black_900_66_black_900_66"
                    >
                      <Img
                        className="h-8"
                        src="images/img_playsolid.svg"
                        alt="playSolid"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[70px] rounded-sm text-base text-center"
                      size="sm"
                      variant="gradient"
                      color="black_900_66_black_900_66"
                    >
                      01:54
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-end justify-end w-[22%] md:w-full">
                  <Text
                    className="mt-1.5 text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    2:01 pm
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[30px] w-[31%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-14 items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group9972.svg')" }}
                >
                  <div className="flex flex-row gap-4 items-center justify-start w-[89%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_playsolid_blue_A700.svg"
                      alt="playSolid One"
                    />
                    <div className="h-4 relative w-[59%]">
                      <div className="absolute h-1.5 inset-[0] justify-center m-auto overflow-hidden w-full">
                        <div className="w-full h-full absolute bg-blue_gray_200 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-blue_A700  rounded-[3px]"
                          style={{ width: "38%" }}
                        ></div>
                      </div>
                      <div className="absolute bg-white-A700 border-[3px] border-blue-A700 border-solid h-4 inset-y-[0] left-[32%] my-auto rounded-[50%] w-4"></div>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18Bluegray400"
                    >
                      01:54
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtGilroyRegular14"
                >
                  3:02 pm
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[459px] mt-[30px] w-[56%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group9970.svg')" }}
                >
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Great I will write later the exact time and place. See you
                    soon!
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-end w-[13%] md:w-full">
                  <Text
                    className="mt-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    3:02 pm
                  </Text>
                  <Img
                    className="h-4 mb-[3px] ml-1 w-4"
                    src="images/img_airplane.svg"
                    alt="airplane One"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-2 items-center justify-between md:ml-[0] ml-[3px] mt-[145px] w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-3 rounded-md">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user_24X24.svg"
                      alt="user"
                    />
                    <Text
                      className="ml-4 md:ml-[0] md:mt-0 mt-1.5 text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      Your message....
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[733px] w-6"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                    <Img
                      className="h-6 ml-4 md:ml-[0] w-6"
                      src="images/img_microphone.svg"
                      alt="microphone"
                    />
                  </div>
                </div>
                <Button
                  className="border border-blue_gray-100 border-solid flex h-12 items-center justify-center w-12"
                  shape="round"
                  color="white_A700"
                  size="2xl"
                >
                  <Img className="h-6" src="images/img_send.svg" alt="send" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SMSPage;
