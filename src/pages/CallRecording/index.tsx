import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const CallRecordingPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] w-[65%]"
                src="images/img_group_3.svg"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[463px] items-center justify-start mb-[70px] w-full">
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
                        src="images/img_user_24X24.svg"
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
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_videocamera_24X24.svg"
                        alt="videocamera"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Inbox
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-[42%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_1.svg"
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
                    <div className="flex flex-row gap-2 items-center justify-start w-3/5">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call_24X24.svg"
                        alt="call"
                      />
                      <Text
                        className="text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Call Recording
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
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
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="header-row mt-[9px] mb-3.5">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                    size="txtGilroySemiBold28"
                  >
                    Call Recording
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 sm:hidden items-end justify-start md:ml-[0] ml-[752px] p-2 rounded-[50%] w-14">
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
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="border-b border-blue_gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] w-full">
                <div className="flex flex-row gap-6 items-center justify-start w-[26%] md:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start p-2.5 w-full">
                      <Text
                        className="text-base text-blue-A700 w-auto"
                        size="txtGilroyMedium16BlueA700"
                      >
                        All
                      </Text>
                    </div>
                    <Line className="bg-blue-A700 h-0.5 w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Incoming
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Outgoing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[15px] items-center justify-end pt-6 shadow-bs1 w-full">
                <div className="flex flex-col gap-[27px] justify-start pt-1 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[141px] w-[79%] md:w-full">
                    <Text
                      className="text-black-900 text-sm uppercase"
                      size="txtGilroyMedium14Black900"
                    >
                      Contact
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[300px] text-black-900 text-sm uppercase"
                      size="txtGilroyMedium14Black900"
                    >
                      Duration
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[364px] text-black-900 text-sm uppercase"
                      size="txtGilroyMedium14Black900"
                    >
                      Action
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <List
                  className="flex flex-col gap-[15px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_car.svg"
                          alt="car"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_1.svg"
                          alt="call One"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash One"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_2.svg"
                          alt="call Two"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut Two"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download Two"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Two"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_2.svg"
                          alt="call Three"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5 items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut Three"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download Three"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Three"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_2.svg"
                          alt="call Four"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut Four"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download Four"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Four"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_2.svg"
                          alt="call Five"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut Five"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download Five"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Five"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_2.svg"
                          alt="call Six"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5 items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut Six"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download Six"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Six"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_2.svg"
                          alt="call Seven"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5 items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut Seven"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download Seven"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Seven"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_2.svg"
                          alt="call Eight"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="mt-[3px] text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Angelyn Weiner
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            +91 1234567890
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5 items-center justify-end md:ml-[0] ml-[245px] pr-0.5 pt-0.5">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          00:00:00
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          31 Jan, 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[317px] w-[14%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_playcircleout.svg"
                          alt="playcircleOut Eight"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_download.svg"
                          alt="download Eight"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Eight"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallRecordingPage;
