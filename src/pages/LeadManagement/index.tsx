import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Switch, Text } from "components";

const LeadManagementPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] mt-[3px] w-[65%]"
                src="images/img_group_3.svg"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[507px] items-center justify-start mb-2 w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[66%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bookmark_24X24.svg"
                        alt="bookmark"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Track Certificate
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-2/5">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_24X24.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
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
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-8 w-full">
            <div className="flex flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="mb-0.5 mt-3.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32"
              >
                Settings
              </Text>
              <div className="flex flex-row font-opensans gap-6 items-center justify-between w-[13%]">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification One"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[35px] items-center justify-start w-full">
              <div className="border-b border-blue_gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[70%] md:w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      My Profile
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Notifications
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start p-2.5 w-full">
                      <Text
                        className="text-base text-blue-A700 w-auto"
                        size="txtGilroyMedium16BlueA700"
                      >
                        Language
                      </Text>
                    </div>
                    <Line className="bg-blue-A700 h-0.5 w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      General settings
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Theme
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Network
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[53%] md:w-full">
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyMedium16"
                >
                  Lorem ipsum
                </Text>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Lorem ipsum
                  </Text>
                  <Switch
                    onColor="#0061ff"
                    offColor="#eaecf0"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={true}
                    className="mb-0.5"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Lorem ipsum
                  </Text>
                  <Switch
                    onColor="#0061ff"
                    offColor="#eaecf0"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={true}
                    className="mb-0.5"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Lorem ipsum
                  </Text>
                  <Switch
                    onColor="#0061ff"
                    offColor="#eaecf0"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={false}
                    className="mb-0.5"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Add a Language
                  </Text>
                  <Img
                    className="h-6 mb-0.5 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
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

export default LeadManagementPage;
