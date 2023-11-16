import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const AuditTrailPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] w-[65%]"
                src="images/img_group_35X162.svg"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[527px] items-center justify-start mb-[70px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-[33%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_home.svg"
                        alt="home"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-[24%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Me
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-[42%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_24X24.svg"
                        alt="user One"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        My Team
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-center justify-start w-[45%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clipboardnotes.svg"
                        alt="clipboardnotes"
                      />
                      <Text
                        className="text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Audit Trail
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_24X24.svg"
                        alt="settings"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
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
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[30px] items-start justify-start md:mt-0 mt-8 w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="header-row mt-[9px] mb-3.5">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                    size="txtGilroySemiBold28"
                  >
                    Audit Trail
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 sm:hidden items-end justify-start md:ml-[0] ml-[813px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 sm:hidden items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center justify-start w-4/5 md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <div className="flex flex-col items-start justify-end pr-1 py-1">
                  <Text
                    className="mt-[3px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    System Audit
                  </Text>
                  <div className="flex flex-row gap-8 items-start justify-start mt-1 w-[97%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-300"
                      size="txtGilroyMedium16Bluegray300"
                    >
                      10:00 AM
                    </Text>
                    <Text
                      className="text-base text-blue_gray-300"
                      size="txtGilroyMedium16Bluegray300"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-base text-blue_gray-300"
                      size="txtGilroyMedium16Bluegray300"
                    >
                      Lorem Ipsum
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright_bluegray_400.svg"
                  alt="arrowright"
                />
              </div>
              <List
                className="flex flex-col gap-[9.25px] items-center mt-[35px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Audio & Music
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_bluegray_400.svg"
                      alt="arrowright One"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="mt-1 text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Finance & Payment
                    </Text>
                    <Img
                      className="h-6 mb-0.5 w-6"
                      src="images/img_arrowright_bluegray_400.svg"
                      alt="arrowright Two"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Games
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_bluegray_400.svg"
                      alt="arrowright Three"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Photos & Videos
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_bluegray_400.svg"
                      alt="arrowright Four"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
              </List>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[18px] w-full">
                <Text
                  className="mt-1 text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Security & Privacy Music
                </Text>
                <Img
                  className="h-6 mb-0.5 w-6"
                  src="images/img_arrowright_bluegray_400.svg"
                  alt="arrowright Five"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditTrailPage;
