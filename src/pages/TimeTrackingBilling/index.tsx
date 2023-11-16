import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TimeTrackingBillingPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_6.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
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
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
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
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[49%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Timesheets
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[38%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_chartlineoutl.svg"
                        alt="chartlineOutl"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Activity
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[81%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark_24X24.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Project management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[39%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Reports
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification One"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
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
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
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
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[39px] items-start justify-start md:mt-0 mt-[39px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtGilroySemiBold24"
              >
                Timesheets
              </Text>
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-row sm:gap-10 items-center justify-between p-[19px] rounded-md w-[49%] md:w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start ml-3">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyRegular18Bluegray400"
                    >
                      Worked this week
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue-A700"
                      size="txtGilroyMedium32"
                    >
                      32:52:18
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      40H Limit
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mr-3 w-[42%]">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                      <List
                        className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[26%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-20 md:h-auto object-cover rounded w-[73%]"
                            src="images/img_group9854.png"
                            alt="Group9854"
                          />
                          <div className="flex flex-col items-center justify-start rounded-lg w-full">
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtGilroyMedium10"
                            >
                              Mon
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-20 md:h-auto object-cover rounded w-[73%]"
                            src="images/img_group9854.png"
                            alt="Group9854 One"
                          />
                          <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtGilroyMedium10"
                            >
                              Tue
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="h-24 relative w-[41%]">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <div className="flex flex-col items-center justify-start pb-[3px] w-[27%]">
                              <Img
                                className="h-20 md:h-auto object-cover rounded w-[73%]"
                                src="images/img_group9854.png"
                                alt="Group9854 Two"
                              />
                              <div className="flex flex-col items-center justify-start mt-0.5 rounded-[5px] w-full">
                                <Text
                                  className="text-[10px] text-blue_gray-400"
                                  size="txtGilroyMedium10"
                                >
                                  Wed
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[27%]">
                              <Img
                                className="h-20 md:h-auto object-cover rounded w-[73%]"
                                src="images/img_group9854_blue_A701.png"
                                alt="Group9854 Three"
                              />
                              <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                                <Text
                                  className="text-[10px] text-blue-A700"
                                  size="txtGilroySemiBold10"
                                >
                                  Thu
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[27%]">
                              <Img
                                className="h-20 md:h-auto object-cover rounded w-[73%]"
                                src="images/img_group9854.png"
                                alt="Group9854 Four"
                              />
                              <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                                <Text
                                  className="h-2.5 text-[10px] text-blue_gray-400"
                                  size="txtGilroyMedium10"
                                >
                                  Fri
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-[65%]">
                          <div className="bg-blue-A700 flex flex-col items-center justify-start p-1 rounded-[3px] w-full">
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtGilroyMedium12WhiteA700"
                            >
                              7h30m
                            </Text>
                          </div>
                          <Img
                            className="h-1 w-[16%]"
                            src="images/img_corner.svg"
                            alt="Corner"
                          />
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[26%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gradient2  h-[78px] w-px" />
                          <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtGilroyMedium10"
                            >
                              Sat
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gradient2  h-[78px] w-px" />
                          <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtGilroyMedium10"
                            >
                              Sun
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-row sm:gap-10 items-center justify-between p-[19px] rounded-md w-[49%] md:w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start ml-3 mt-0.5">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyRegular18Bluegray400"
                    >
                      Earned this week
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue-A700"
                      size="txtGilroyMedium32"
                    >
                      $ 2500
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      -
                    </Text>
                  </div>
                  <Img
                    className="h-[78px] md:h-auto mr-3 object-cover"
                    src="images/img_group9845.png"
                    alt="Group9845"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtGilroySemiBold18Black900"
                >
                  Work Summary
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex flex-col gap-[23px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="bg-blue_gray-50 flex flex-row items-center justify-between p-[9px] w-full">
                        <Text
                          className="ml-[43px] text-base text-blue_gray-600"
                          size="txtGilroyMedium16Bluegray600"
                        >
                          Date
                        </Text>
                        <Text
                          className="mt-1.5 text-base text-blue_gray-600"
                          size="txtGilroyMedium16Bluegray600"
                        >
                          Projects
                        </Text>
                        <Text
                          className="text-base text-blue_gray-600"
                          size="txtGilroyMedium16Bluegray600"
                        >
                          Time
                        </Text>
                        <Text
                          className="mr-[25px] text-base text-blue_gray-600"
                          size="txtGilroyMedium16Bluegray600"
                        >
                          Duration
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="mr-1.5 text-base text-blue_gray-900"
                          size="txtGilroyBold16"
                        >
                          <span className="text-colors font-gilroy text-left font-bold">
                            7
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors font-gilroy text-left font-bold">
                            30
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="mr-[7px] text-base text-blue_gray-900"
                          size="txtGilroyBold16"
                        >
                          <span className="text-colors font-gilroy text-left font-bold">
                            7
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors font-gilroy text-left font-bold">
                            30
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="mr-[7px] text-base text-blue_gray-900"
                          size="txtGilroyBold16"
                        >
                          <span className="text-colors font-gilroy text-left font-bold">
                            7
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors font-gilroy text-left font-bold">
                            30
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="mr-[7px] text-base text-blue_gray-900"
                          size="txtGilroyBold16"
                        >
                          <span className="text-colors font-gilroy text-left font-bold">
                            7
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors font-gilroy text-left font-bold">
                            30
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="mr-[7px] text-base text-blue_gray-900"
                          size="txtGilroyBold16"
                        >
                          <span className="text-colors font-gilroy text-left font-bold">
                            7
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors font-gilroy text-left font-bold">
                            30
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="mr-[7px] text-base text-blue_gray-900"
                          size="txtGilroyBold16"
                        >
                          <span className="text-colors font-gilroy text-left font-bold">
                            7
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors font-gilroy text-left font-bold">
                            30
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="mr-[7px] text-base text-blue_gray-900"
                          size="txtGilroyBold16"
                        >
                          <span className="text-colors font-gilroy text-left font-bold">
                            7
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors font-gilroy text-left font-bold">
                            30
                          </span>
                          <span className="text-colors font-gilroy text-left text-xs font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTrackingBillingPage;
