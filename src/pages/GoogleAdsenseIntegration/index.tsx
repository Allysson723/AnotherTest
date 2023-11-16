import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const GoogleAdsenseIntegrationPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-start p-1.5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-4 mx-auto md:px-5 w-full">
              <Img
                className="h-[66px] md:h-auto md:mt-0 mt-1.5 object-cover"
                src="images/img_googleadsense.png"
                alt="Googleadsense"
              />
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                <Input
                  name="InputField"
                  placeholder="Search "
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:mt-0 my-1.5 w-2/5 md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
                      src="images/img_search_black_900.svg"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[95%] md:w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[39%] md:w-full">
                      <Img
                        className="h-6 ml-[7px] w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[37%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        My Ads
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[69%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Allow & Block Ads
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-4/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Performance Reports
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[55%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Optimization
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
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[63%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call_24X24.svg"
                        alt="call"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Send Feedback
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
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start md:mt-0 mt-[46px] w-full">
              <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between rounded-[7.37px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[26px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-blue-50_02 flex flex-col gap-[17px] items-center justify-center sm:ml-[0] p-[13px] rounded-[7.37px] w-full">
                    <Text
                      className="mt-[9px] text-blue_gray-300 text-xl"
                      size="txtGilroySemiBold20Bluegray300"
                    >
                      Running Ads
                    </Text>
                    <Text
                      className="mb-[21px] text-3xl sm:text-[26px] md:text-[28px] text-blue-A700"
                      size="txtGilroySemiBold30"
                    >
                      1.1k
                    </Text>
                  </div>
                  <div className="bg-blue-50_02 flex flex-col gap-[17px] items-center justify-center sm:ml-[0] p-3 rounded-[7.37px] w-full">
                    <Text
                      className="mt-[9px] text-blue_gray-300 text-xl"
                      size="txtGilroySemiBold20Bluegray300"
                    >
                      Today’s Earnings
                    </Text>
                    <Text
                      className="mb-[22px] text-3xl sm:text-[26px] md:text-[28px] text-blue-A700"
                      size="txtGilroySemiBold30"
                    >
                      $110
                    </Text>
                  </div>
                </List>
                <div className="bg-blue-50_02 flex flex-col gap-[17px] items-center justify-center p-[15px] rounded-[7.37px]">
                  <Text
                    className="mt-[7px] text-blue_gray-300 text-xl"
                    size="txtGilroySemiBold20Bluegray300"
                  >
                    Last 7 days
                  </Text>
                  <Text
                    className="mb-5 text-3xl sm:text-[26px] md:text-[28px] text-blue-A700"
                    size="txtGilroySemiBold30"
                  >
                    $110
                  </Text>
                </div>
                <div className="bg-blue-50_02 flex flex-col gap-[17px] items-center justify-center p-[15px] rounded-[7.37px]">
                  <Text
                    className="mt-[7px] text-blue_gray-300 text-xl"
                    size="txtGilroySemiBold20Bluegray300"
                  >
                    Total Earnings
                  </Text>
                  <Text
                    className="mb-5 text-3xl sm:text-[26px] md:text-[28px] text-blue-A700"
                    size="txtGilroySemiBold30"
                  >
                    $110
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                <List
                  className="flex flex-col gap-[30px] w-[49%]"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-col items-center justify-start my-0 p-5 rounded-[12px] w-full">
                    <div className="flex flex-col items-start justify-start mt-6 pb-1 w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-[3px] text-gray-900_03 text-lg"
                          size="txtGilroyBold18Gray90003"
                        >
                          Total Page Views
                        </Text>
                        <div className="flex flex-row gap-3 items-center justify-between w-[19%]">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-blue-A700"
                              size="txtGilroyRegular16BlueA700"
                            >
                              Month
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-blue_gray-300 text-xs"
                        size="txtGilroyRegular12Bluegray300"
                      >
                        No of total page views by month
                      </Text>
                      <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[99%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="leading-[16.00px] sm:mt-0 mt-[88px] rotate-[90deg] text-[10px] text-blue_gray-400 text-right"
                            size="txtGilroySemiBold10Bluegray400"
                          >
                            Page Views
                          </Text>
                          <div className="flex flex-col gap-[17px] items-start justify-start sm:mt-0 mt-8">
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              50K
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              40K
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              30K
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              20K
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              10K
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[11px] text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              0
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start">
                            <div className="md:h-[152px] h-[173px] relative w-full">
                              <div className="absolute md:h-[152px] h-[173px] inset-[0] justify-center m-auto w-full">
                                <div className="absolute bottom-[0] h-[152px] inset-x-[0] mx-auto w-full">
                                  <div className="h-[152px] m-auto w-full">
                                    <div className="h-[152px] m-auto w-full">
                                      <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] left-[10%] my-auto w-px" />
                                      <div className="absolute flex flex-col gap-[26px] inset-x-[0] items-center justify-start mx-auto top-[9%] w-full">
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[180deg] w-full" />
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[180deg] w-full" />
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[180deg] w-full" />
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[180deg] w-full" />
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[-180deg] w-full" />
                                      </div>
                                    </div>
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] left-[23%] my-auto w-px" />
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] left-[36%] my-auto w-px" />
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-[0] justify-center m-auto w-px" />
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] my-auto right-[36%] w-px" />
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] my-auto right-[23%] w-px" />
                                  </div>
                                  <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] my-auto right-[9%] w-px" />
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[23%] flex flex-col h-[58px] inset-x-[0] justify-start mx-auto p-2 w-[82%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group4544.svg')",
                                    }}
                                  >
                                    <div className="flex flex-col justify-start md:ml-[0] ml-[88px] mr-[42px] w-[56%] md:w-full">
                                      <div className="flex flex-row items-start justify-start w-full">
                                        <div className="bg-white-A700 border-[0.6px] border-blue-A700 border-solid h-[5px] mb-1.5 rounded-[50%] w-[5px]"></div>
                                        <div className="bg-blue-A700 border-[0.6px] border-blue-A700 border-solid h-2 mb-[5px] ml-11 rounded-[50%] w-2"></div>
                                        <div className="bg-white-A700 border-[0.6px] border-blue-A700 border-solid h-[5px] ml-[100px] mt-2 rounded-[50%] w-[5px]"></div>
                                      </div>
                                      <div className="bg-white-A700 border-[0.6px] border-blue-A700 border-solid h-[5px] md:ml-[0] ml-[106px] mr-[52px] rounded-[50%] w-[5px]"></div>
                                    </div>
                                    <div className="bg-white-A700 border-[0.6px] border-blue-A700 border-solid h-[5px] mb-[15px] md:ml-[0] ml-[39px] mr-[250px] rounded-[50%] w-[5px]"></div>
                                  </div>
                                </div>
                                <div className="absolute bg-white-A700 border-[0.6px] border-blue-A700 border-solid bottom-[19%] h-[5px] left-[10%] rounded-[50%] w-[5px]"></div>
                                <div className="absolute bg-white-A700 flex flex-col items-center justify-end p-1 right-[16%] shadow-bs4 top-[0] w-[37%]">
                                  <div className="flex flex-col items-start justify-start mt-1 pb-[3px] w-[85%] md:w-full">
                                    <Text
                                      className="text-black-900 text-xs"
                                      size="txtGilroyMedium12Black900"
                                    >
                                      Apr 01 - Apr 31
                                    </Text>
                                    <div className="flex flex-row gap-1.5 items-start justify-start mt-[11px] rounded-[0.8px] w-[42%] md:w-full">
                                      <div className="bg-blue-A700 h-1.5 mb-1.5 rounded-[0.8px] w-1.5"></div>
                                      <Text
                                        className="text-blue_gray-300 text-xs"
                                        size="txtGilroyMedium12Bluegray300"
                                      >
                                        29,535
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-evenly mt-2 w-full">
                                      <Img
                                        className="h-1.5 mt-1 w-[10%]"
                                        src="images/img_checkmark_6X10.svg"
                                        alt="checkmark"
                                      />
                                      <Text
                                        className="text-red-700 text-xs"
                                        size="txtGilroyMedium12Red700"
                                      >
                                        12.6% (4265 views)
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-white-A700 border-[0.6px] border-blue-A700 border-solid bottom-[32%] h-[5px] right-[8%] rounded-[50%] w-[5px]"></div>
                              <Img
                                className="absolute bottom-[0] h-[152px] inset-x-[0] mx-auto w-full"
                                src="images/img_group97.svg"
                                alt="GroupNinetySeven"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-between w-[86%] md:w-full">
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Jan
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Feb
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Mar
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Apr
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                May
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Jun
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Jul
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-end my-0 p-5 rounded-[12px] w-full">
                    <div className="flex flex-col items-start justify-start mt-6 pb-1 w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-gray-900_03 text-lg"
                          size="txtGilroyBold18Gray90003"
                        >
                          Total Site Views
                        </Text>
                        <div className="flex flex-row gap-3 items-center justify-between w-[19%]">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-blue-A700"
                              size="txtGilroyRegular16BlueA700"
                            >
                              Month
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown One"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-blue_gray-300 text-xs"
                        size="txtGilroyRegular12Bluegray300"
                      >
                        No of total Site views by month
                      </Text>
                      <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[99%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="leading-[16.00px] sm:mt-0 mt-[88px] rotate-[90deg] text-[10px] text-blue_gray-400 text-right"
                            size="txtGilroySemiBold10Bluegray400"
                          >
                            Page Views
                          </Text>
                          <div className="flex flex-col gap-[17px] items-start justify-start sm:mt-0 mt-8">
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              50K
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              40K
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              30K
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              20K
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              10K
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[11px] text-[10px] text-blue_gray-900"
                              size="txtGilroySemiBold10Bluegray900"
                            >
                              0
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start">
                            <div className="md:h-[152px] h-[173px] relative w-full">
                              <div className="absolute md:h-[152px] h-[173px] inset-[0] justify-center m-auto w-full">
                                <div className="absolute bottom-[0] h-[152px] inset-x-[0] mx-auto w-full">
                                  <div className="h-[152px] m-auto w-full">
                                    <div className="h-[152px] m-auto w-full">
                                      <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] left-[10%] my-auto w-px" />
                                      <div className="absolute flex flex-col gap-[26px] inset-x-[0] items-center justify-start mx-auto top-[9%] w-full">
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[180deg] w-full" />
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[180deg] w-full" />
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[180deg] w-full" />
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[180deg] w-full" />
                                        <Line className="bg-blue_gray-100 h-[0.6px] rotate-[-180deg] w-full" />
                                      </div>
                                    </div>
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] left-[23%] my-auto w-px" />
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] left-[36%] my-auto w-px" />
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-[0] justify-center m-auto w-px" />
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] my-auto right-[36%] w-px" />
                                    <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] my-auto right-[23%] w-px" />
                                  </div>
                                  <Line className="absolute bg-blue_gray-100 h-[152px] inset-y-[0] my-auto right-[9%] w-px" />
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[23%] flex flex-col h-[58px] inset-x-[0] justify-start mx-auto p-2 w-[82%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group4544.svg')",
                                    }}
                                  >
                                    <div className="flex flex-col justify-start md:ml-[0] ml-[88px] mr-[42px] w-[56%] md:w-full">
                                      <div className="flex flex-row items-start justify-start w-full">
                                        <div className="bg-white-A700 border-[0.6px] border-blue-A700 border-solid h-[5px] mb-1.5 rounded-[50%] w-[5px]"></div>
                                        <div className="bg-blue-A700 border-[0.6px] border-blue-A700 border-solid h-2 mb-[5px] ml-11 rounded-[50%] w-2"></div>
                                        <div className="bg-white-A700 border-[0.6px] border-blue-A700 border-solid h-[5px] ml-[100px] mt-2 rounded-[50%] w-[5px]"></div>
                                      </div>
                                      <div className="bg-white-A700 border-[0.6px] border-blue-A700 border-solid h-[5px] md:ml-[0] ml-[106px] mr-[52px] rounded-[50%] w-[5px]"></div>
                                    </div>
                                    <div className="bg-white-A700 border-[0.6px] border-blue-A700 border-solid h-[5px] mb-[15px] md:ml-[0] ml-[39px] mr-[250px] rounded-[50%] w-[5px]"></div>
                                  </div>
                                </div>
                                <div className="absolute bg-white-A700 border-[0.6px] border-blue-A700 border-solid bottom-[19%] h-[5px] left-[10%] rounded-[50%] w-[5px]"></div>
                                <div className="absolute bg-white-A700 flex flex-col items-center justify-end p-1 right-[16%] shadow-bs4 top-[0] w-[37%]">
                                  <div className="flex flex-col items-start justify-start mt-1 pb-[3px] w-[85%] md:w-full">
                                    <Text
                                      className="text-black-900 text-xs"
                                      size="txtGilroyMedium12Black900"
                                    >
                                      Apr 01 - Apr 31
                                    </Text>
                                    <div className="flex flex-row gap-1.5 items-start justify-start mt-[11px] rounded-[0.8px] w-[42%] md:w-full">
                                      <div className="bg-blue-A700 h-1.5 mb-1.5 rounded-[0.8px] w-1.5"></div>
                                      <Text
                                        className="text-blue_gray-300 text-xs"
                                        size="txtGilroyMedium12Bluegray300"
                                      >
                                        29,535
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-evenly mt-2 w-full">
                                      <Img
                                        className="h-1.5 mt-1 w-[10%]"
                                        src="images/img_checkmark_6X10.svg"
                                        alt="checkmark One"
                                      />
                                      <Text
                                        className="text-red-700 text-xs"
                                        size="txtGilroyMedium12Red700"
                                      >
                                        12.6% (4265 views)
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-white-A700 border-[0.6px] border-blue-A700 border-solid bottom-[32%] h-[5px] right-[8%] rounded-[50%] w-[5px]"></div>
                              <Img
                                className="absolute bottom-[0] h-[152px] inset-x-[0] mx-auto w-full"
                                src="images/img_group97.svg"
                                alt="GroupNinetySeven One"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-between w-[86%] md:w-full">
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Jan
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Feb
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Mar
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Apr
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                May
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Jun
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-900"
                                size="txtGilroySemiBold10Bluegray900"
                              >
                                Jul
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] w-[49%] md:w-full">
                  <div className="flex flex-col gap-[21px] items-center justify-start mt-0.5 pt-[5px] w-full">
                    <div className="flex flex-row items-center justify-between w-[83%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroySemiBold18Bluegray400"
                      >
                        Products
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroySemiBold18Bluegray400"
                      >
                        Customers
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[52px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                        <div className="flex flex-row gap-[13px] items-center justify-between w-[45%]">
                          <Img
                            className="h-[71px] md:h-auto object-cover"
                            src="images/img_image122.png"
                            alt="image122"
                          />
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Decoration lights
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroySemiBold14Bluegray900"
                          >
                            Michele Sams
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-[26px] w-[92%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-[49%]">
                            <Img
                              className="h-[71px] md:h-auto object-cover"
                              src="images/img_image123.png"
                              alt="image123"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroySemiBold14Bluegray900"
                              >
                                Men’s Casual Shirts
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Anne Juliet
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-blue_gray-100 w-full" />
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-[49%]">
                            <Img
                              className="h-[71px] md:h-auto object-cover"
                              src="images/img_image124.png"
                              alt="image124"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroySemiBold14Bluegray900"
                              >
                                Blutooth Handsfree
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Robin Mathew
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-blue_gray-100 w-full" />
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-[39%]">
                            <Img
                              className="h-[71px] md:h-auto object-cover"
                              src="images/img_image125.png"
                              alt="image125"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroySemiBold14Bluegray900"
                              >
                                Office Chairs
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Alex Costa
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-blue_gray-100 w-full" />
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-[49%]">
                            <Img
                              className="h-[71px] md:h-auto object-cover"
                              src="images/img_image124.png"
                              alt="image124 One"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroySemiBold14Bluegray900"
                              >
                                Blutooth Handsfree
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Robin Mathew
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
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

export default GoogleAdsenseIntegrationPage;
