import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TimesheetManagementPage: React.FC = () => {
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
                  src="images/img_group_7.svg"
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
            <div className="flex flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-[42px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtGilroySemiBold24"
              >
                Recurring Appointments
              </Text>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Input
                  name="Dropdown"
                  placeholder="Fir, May 20, 2022"
                  className="!placeholder:text-blue_gray-900 !text-blue_gray-900 p-0 text-base text-left w-full"
                  wrapClassName="border border-blue-A700 border-solid flex sm:flex-1 sm:mt-0 my-[3px] sm:w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] mr-4 my-3"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                  }
                  shape="round"
                ></Input>
                <Button
                  className="cursor-pointer font-medium min-w-[106px] py-[17px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                >
                  Add Time
                </Button>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start pt-[7px] w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[17%] md:w-full">
                  <Text
                    className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtGilroyMedium24Black900"
                  >
                    Today:
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                    size="txtGilroyBold24BlueA700"
                  >
                    04:15:54
                  </Text>
                </div>
                <div className="bg-blue-50 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[266px] rounded-md w-full">
                  <div className="bg-blue-A700 h-3 rounded-md w-1/2"></div>
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[255px] w-[53%] md:w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-[5%]">
                    <Img
                      className="h-[5px] w-[4%]"
                      src="images/img_vector44.svg"
                      alt="VectorFortyFour"
                    />
                    <Text
                      className="text-blue_gray-400 text-xs"
                      size="txtGilroyMedium12"
                    >
                      6am
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1.5 items-center justify-start w-[6%]">
                    <Img
                      className="h-[5px] w-[4%]"
                      src="images/img_vector44.svg"
                      alt="VectorFortyFive"
                    />
                    <Text
                      className="text-blue_gray-400 text-xs"
                      size="txtGilroyMedium12"
                    >
                      12pm
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-center justify-start w-[5%]">
                    <Img
                      className="h-[5px] w-[4%]"
                      src="images/img_vector44.svg"
                      alt="VectorFortyFour One"
                    />
                    <Text
                      className="text-blue_gray-400 text-xs"
                      size="txtGilroyMedium12"
                    >
                      6pm
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray-50 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-[9px] w-full">
                    <Text
                      className="sm:mt-0 mt-1.5 text-base text-blue_gray-600"
                      size="txtGilroyMedium16Bluegray600"
                    >
                      Projects
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[380px] text-base text-blue_gray-600"
                      size="txtGilroyMedium16Bluegray600"
                    >
                      Time
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[348px] mr-[25px] text-base text-blue_gray-600"
                      size="txtGilroyMedium16Bluegray600"
                    >
                      Duration
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <List
                  className="flex flex-col gap-[23px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[93%] md:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-[31%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                          shape="circle"
                          color="blue_A700"
                          size="2xl"
                        >
                          <Img
                            className="h-6"
                            src="images/img_cut.svg"
                            alt="cut"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtGilroySemiBold16Bluegray900"
                          >
                            UI/UX Training
                          </Text>
                          <Text
                            className="mt-1 text-blue_gray-300 text-sm"
                            size="txtGilroyMedium14Bluegray300"
                          >
                            User Research
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[210px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        9:30 am - 5:50 pm{" "}
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[306px] text-base text-blue_gray-900"
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
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[93%] md:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-[31%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                          shape="circle"
                          color="blue_A700"
                          size="2xl"
                        >
                          <Img
                            className="h-6"
                            src="images/img_cut.svg"
                            alt="cut One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtGilroySemiBold16Bluegray900"
                          >
                            UI/UX Training
                          </Text>
                          <Text
                            className="mt-1 text-blue_gray-300 text-sm"
                            size="txtGilroyMedium14Bluegray300"
                          >
                            User Research
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[210px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        9:30 am - 5:50 pm{" "}
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[306px] text-base text-blue_gray-900"
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
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[93%] md:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-[31%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                          shape="circle"
                          color="blue_A700"
                          size="2xl"
                        >
                          <Img
                            className="h-6"
                            src="images/img_cut.svg"
                            alt="cut Two"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtGilroySemiBold16Bluegray900"
                          >
                            UI/UX Training
                          </Text>
                          <Text
                            className="mt-1 text-blue_gray-300 text-sm"
                            size="txtGilroyMedium14Bluegray300"
                          >
                            User Research
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[210px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        9:30 am - 5:50 pm{" "}
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[306px] text-base text-blue_gray-900"
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
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[93%] md:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-[31%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                          shape="circle"
                          color="blue_A700"
                          size="2xl"
                        >
                          <Img
                            className="h-6"
                            src="images/img_cut.svg"
                            alt="cut Three"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px]">
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtGilroySemiBold16Bluegray900"
                          >
                            UI/UX Training
                          </Text>
                          <Text
                            className="mt-1 text-blue_gray-300 text-sm"
                            size="txtGilroyMedium14Bluegray300"
                          >
                            User Research
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[210px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        9:30 am - 5:50 pm{" "}
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[306px] text-base text-blue_gray-900"
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
    </>
  );
};

export default TimesheetManagementPage;
