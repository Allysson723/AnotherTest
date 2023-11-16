import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

const OnlinebackupPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50_01 flex flex-col justify-start p-6 sm:px-5 w-full">
            <Img
              className="h-[35px] md:ml-[0] ml-[43px] w-[65%]"
              src="images/img_group10392_35.svg"
              alt="Group10392"
            />
            <div className="flex flex-col gap-[41px] items-start justify-start mt-12 w-full">
              <div className="flex flex-row gap-2 items-end justify-start ml-2 md:ml-[0] w-[42%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_dollaraltsoli.svg"
                  alt="dollaraltSoli"
                />
                <Text
                  className="mt-[5px] text-base text-blue_gray-700"
                  size="txtGilroySemiBold16"
                >
                  Payments
                </Text>
              </div>
              <div className="flex flex-row items-start justify-start w-[72%] md:w-full">
                <Line className="bg-blue-A700 h-6 w-0.5" />
                <Img
                  className="h-6 ml-1.5 w-6"
                  src="images/img_minimize.svg"
                  alt="minimize"
                />
                <Text
                  className="ml-2 mt-[5px] text-base text-blue-A700"
                  size="txtGilroySemiBold16BlueA700"
                >
                  Data Management
                </Text>
              </div>
              <div className="flex flex-col gap-[41px] items-start justify-start ml-2 md:ml-[0] w-[42%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[96%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_checkmark_24X24.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="mt-1 text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Analytics
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-end justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                  <Text
                    className="mt-[5px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Messages
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[89%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="mt-[5px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[610px] w-[27%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_question.svg"
                alt="question"
              />
              <Text
                className="mt-[5px] text-base text-blue_gray-700"
                size="txtOpenSansRomanSemiBold16"
              >
                Help
              </Text>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:mt-0 mt-[49px] w-[71%] md:w-full">
              <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                  size="txtGilroySemiBold28"
                >
                  Data Management
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[780px] w-full">
                  <Input
                    name="itemsCounter"
                    placeholder="3 items"
                    className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-lg w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="blue_50"
                    size="xl"
                  ></Input>
                  <Button
                    className="cursor-pointer min-w-[100px] py-[17px] text-center text-lg"
                    shape="round"
                    color="blue_A700"
                  >
                    BACKUP
                  </Button>
                </div>
              </div>
              <List
                className="flex flex-col gap-[16.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Button
                    className="flex h-5 items-center justify-center md:mt-0 my-[17px] rounded-[2.5px] w-5"
                    color="blue_A700"
                    size="xs"
                  >
                    <Img
                      className="h-4"
                      src="images/img_checkmark.svg"
                      alt="checkmark One"
                    />
                  </Button>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Lorem ipsum
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[589px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    220MB
                  </Text>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Button
                    className="flex h-5 items-center justify-center md:mt-0 my-[17px] rounded-[2.5px] w-5"
                    color="blue_A700"
                    size="xs"
                  >
                    <Img
                      className="h-4"
                      src="images/img_checkmark.svg"
                      alt="checkmark Two"
                    />
                  </Button>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Lorem ipsum
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[589px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    220MB
                  </Text>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="bg-white-A700 border-[0.83px] border-blue_gray-50 border-solid h-5 md:mt-0 my-[17px] rounded-[2.5px] w-5"></div>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Lorem ipsum
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[589px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    220MB
                  </Text>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="bg-white-A700 border-[0.83px] border-blue_gray-50 border-solid h-5 md:mt-0 my-[17px] rounded-[2.5px] w-5"></div>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Lorem ipsum
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[589px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    220MB
                  </Text>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="bg-white-A700 border-[0.83px] border-blue_gray-50 border-solid h-5 md:mt-0 my-[17px] rounded-[2.5px] w-5"></div>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Lorem ipsum
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[589px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    220MB
                  </Text>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="bg-white-A700 border-[0.83px] border-blue_gray-50 border-solid h-5 md:mt-0 my-[17px] rounded-[2.5px] w-5"></div>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Lorem ipsum
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[589px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    220MB
                  </Text>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="bg-white-A700 border-[0.83px] border-blue_gray-50 border-solid h-5 md:mt-0 my-[17px] rounded-[2.5px] w-5"></div>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Lorem ipsum
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[589px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    220MB
                  </Text>
                </div>
              </List>
            </div>
            <div className="bg-gray-50_01 flex md:flex-1 flex-col items-start justify-start p-6 sm:px-5 w-[28%] md:w-full">
              <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                <Img
                  className="h-6 mb-0.5 w-6"
                  src="images/img_arrowleft_bluegray_900.svg"
                  alt="arrowleft"
                />
                <Text
                  className="mt-1 text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  My Profile
                </Text>
                <Img
                  className="h-6 mb-0.5 w-6"
                  src="images/img_share.svg"
                  alt="share"
                />
              </div>
              <div className="flex flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[62px] mt-8 w-[45%] md:w-full">
                <div className="border-[1.79px] border-blue-A700_01 border-solid flex flex-col h-[100px] items-center justify-start p-[7px] rounded-[50%] w-[100px]">
                  <Img
                    className="h-[85px] md:h-auto rounded-[50%] w-[85px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Michelle Rock
                </Text>
              </div>
              <div className="flex flex-col gap-[19px] items-start justify-start mt-[41px]">
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyRegular16"
                >
                  Mobile Number
                </Text>
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtGilroyMedium16Bluegray900"
                >
                  (808) 555-0111
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start mb-[658px] mt-[25px]">
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyRegular16"
                >
                  Email
                </Text>
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtGilroyMedium16Bluegray900"
                >
                  Michellerock@gmail.com
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlinebackupPage;
