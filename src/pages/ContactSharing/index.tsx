import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const ContactSharingPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50_02 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[31px] items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50_01 flex flex-col justify-start p-6 sm:px-5 w-full">
            <Img
              className="h-[35px] md:ml-[0] ml-[43px] w-[65%]"
              src="images/img_group10392_14.svg"
              alt="Group10392"
            />
            <div className="flex flex-col gap-[42px] justify-start mt-12 w-full">
              <div className="flex flex-row items-start justify-start w-[49%] md:w-full">
                <Line className="bg-blue-A700 h-6 w-0.5" />
                <Img
                  className="h-6 ml-1.5 w-6"
                  src="images/img_minimize.svg"
                  alt="minimize"
                />
                <Text
                  className="ml-2 mt-[3px] text-base text-blue-A700"
                  size="txtGilroySemiBold16BlueA700"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-col gap-[41px] items-start justify-start ml-2 md:ml-[0] mr-[99px] w-[57%] md:w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-[73%] md:w-full">
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
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_walletoutline.svg"
                    alt="walletOutline"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Wallet & Cards
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[89%] md:w-full">
                  <Img className="h-6 w-6" src="images/img_car.svg" alt="car" />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Transactions
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[70%] md:w-full">
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
                <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
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
                <div className="flex flex-row gap-2 items-start justify-start w-[66%] md:w-full">
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
            <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[478px] w-[27%] md:w-full">
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
        <div className="flex-1 sm:h-[1075px] h-[1080px] md:h-[3682px] md:px-5 relative w-full">
          <Text
            className="absolute left-[0] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 top-[4%]"
            size="txtGilroySemiBold28"
          >
            Dashboard
          </Text>
          <div className="absolute font-opensans sm:h-[1075px] h-[1080px] md:h-[3682px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[3%] w-[98%]">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col gap-8 items-end justify-start w-full">
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                      <div className="md:h-9 h-[35px] mb-1 relative w-9">
                        <Img
                          className="absolute bottom-[0] h-8 left-[0] w-8"
                          src="images/img_notification_32X32.svg"
                          alt="notification"
                        />
                        <div className="absolute bg-red-700 border border-blue_gray-50 border-solid flex flex-col h-[18px] items-start justify-start p-0.5 right-[0] rounded-[50%] top-[0] w-[18px]">
                          <Text
                            className="mb-0.5 ml-0.5 md:ml-[0] text-white-A700 text-xs"
                            size="txtOpenSansRomanSemiBold12"
                          >
                            2
                          </Text>
                        </div>
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
                  <div className="flex md:flex-col flex-row font-gilroy gap-6 items-center justify-between w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col gap-[21px] items-center justify-end p-[21px] sm:px-5 rounded-md w-[64%] md:w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between mt-[3px] w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start mt-1.5 w-[32%]">
                          <Text
                            className="text-blue_gray-900 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            Spend Analysis
                          </Text>
                          <div className="flex flex-row items-start justify-evenly w-full">
                            <Img
                              className="h-4 mb-[3px] w-4"
                              src="images/img_arrowgrowthou.svg"
                              alt="arrowgrowthOu"
                            />
                            <Text
                              className="mt-0.5 text-black-900 text-sm"
                              size="txtGilroyRegular14Black900"
                            >
                              <span className="text-colors2 font-gilroy text-left font-normal">
                                88%
                              </span>
                              <span className="text-colors3 font-gilroy text-left font-normal">
                                {" "}
                                Compared to last week
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[13px] items-center justify-between w-[16%]">
                          <Text
                            className="text-blue_gray-600 text-sm"
                            size="txtGilroySemiBold14"
                          >
                            This Week
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                        <div className="flex flex-col items-start justify-end py-[3px] w-full">
                          <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between w-full">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              25k
                            </Text>
                            <Line className="bg-blue_gray-50 h-px sm:mt-0 my-1.5 w-[96%]" />
                          </div>
                          <div className="h-[183px] md:h-[218px] sm:h-[232px] mt-4 relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                                <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtGilroyRegular14Bluegray900"
                                  >
                                    20k
                                  </Text>
                                  <Line className="bg-blue_gray-50 h-px sm:mt-0 my-1.5 w-[96%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtGilroyRegular14Bluegray900"
                                  >
                                    15k
                                  </Text>
                                  <Line className="bg-blue_gray-50 h-px sm:mt-0 my-1.5 w-[96%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtGilroyRegular14Bluegray900"
                                  >
                                    10k
                                  </Text>
                                  <Line className="bg-blue_gray-50 h-px sm:mt-0 my-1.5 w-[96%]" />
                                </div>
                                <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-[99%] md:w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtGilroyRegular14Bluegray900"
                                  >
                                    5k
                                  </Text>
                                  <Line className="bg-blue_gray-50 h-px md:mt-0 my-1.5 w-[97%]" />
                                </div>
                                <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-[99%] md:w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtGilroyRegular14Bluegray900"
                                  >
                                    0k
                                  </Text>
                                  <Line className="bg-blue_gray-50 h-px md:mt-0 my-1.5 w-[97%]" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute md:h-[155px] h-[173px] right-[2%] top-[0] w-[91%] sm:w-full">
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[155px] inset-x-[0] items-end justify-start mx-auto p-[52px] md:px-10 sm:px-5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group9960.png')",
                                }}
                              >
                                <div className="bg-white-A700 border border-blue-A700 border-solid h-2 mb-[43px] mr-[131px] rounded-[50%] w-2"></div>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-[68px] items-center justify-start p-3 right-[26%] top-[0] w-[68px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group10405.svg')",
                                }}
                              >
                                <Text
                                  className="mb-1.5 mt-0.5 text-white-A700 text-xs"
                                  size="txtGilroyMedium12WhiteA700"
                                >
                                  <>
                                    $2311.65
                                    <br />5 May
                                  </>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[30px] mt-[18px] w-[96%] md:w-full">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Mon
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Tue
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Wed
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[71px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Thu
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[73px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Fri
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Sat
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Sun
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-lg w-[35%] md:w-full">
                      <div className="flex flex-row items-start justify-between mt-0.5 w-[99%] md:w-full">
                        <Text
                          className="mt-[5px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Expense Tracking
                        </Text>
                        <div className="flex flex-row gap-2 items-center justify-between mb-[5px] w-[31%]">
                          <Text
                            className="text-blue_gray-600 text-sm"
                            size="txtGilroySemiBold14"
                          >
                            This Month
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown One"
                          />
                        </div>
                      </div>
                      <div className="md:h-[193px] h-[200px] mt-[35px] relative w-[200px]">
                        <div className="absolute md:h-[130px] h-[200px] inset-y-[0] my-auto right-[0] w-[90%]">
                          <div className="absolute md:h-[130px] h-[200px] inset-y-[0] my-auto right-[0] w-[73%]">
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[100px] items-start justify-start p-[19px] right-[3%] top-[0]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group10418.svg')",
                              }}
                            >
                              <Text
                                className="mb-4 mt-[29px] text-base text-white-A700"
                                size="txtGilroySemiBold16WhiteA700"
                              >
                                24%
                              </Text>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[130px] inset-x-[0] items-center justify-center mx-auto p-[49px] md:px-10 sm:px-5 w-[130px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group10417.svg')",
                              }}
                            >
                              <Text
                                className="my-2 text-base text-white-A700"
                                size="txtGilroySemiBold16WhiteA700"
                              >
                                36%
                              </Text>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[2%] flex flex-col h-[95px] items-center justify-end left-[0] p-[25px] sm:px-5"
                            style={{
                              backgroundImage:
                                "url('images/img_group10416.svg')",
                            }}
                          >
                            <Text
                              className="mb-1.5 mt-5 text-base text-white-A700"
                              size="txtGilroySemiBold16WhiteA700"
                            >
                              12%
                            </Text>
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[158px] items-center justify-start left-[0] p-[35px] sm:px-5 top-[0]"
                          style={{
                            backgroundImage: "url('images/img_group10419.svg')",
                          }}
                        >
                          <Text
                            className="mb-[41px] mt-[31px] text-base text-white-A700"
                            size="txtGilroySemiBold16WhiteA700"
                          >
                            28%
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-center justify-start mt-[13px] w-[93%] md:w-full">
                        <div className="flex flex-row items-center justify-between pr-[3px] pt-[3px] rounded-sm w-full">
                          <div className="flex flex-row gap-2 items-center justify-start rounded-sm w-[23%]">
                            <div className="bg-blue-900 h-2 my-0.5 rounded-sm w-[32%]"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Travel
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-center mr-4 rounded-sm w-[27%]">
                            <div className="bg-blue-800 h-2 mb-[7px] rounded-sm w-[27%]"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Sports
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between pr-1 pt-1 rounded-sm w-full">
                          <div className="flex flex-row gap-2 items-start justify-start rounded-sm w-[31%]">
                            <div className="bg-blue-A700 h-2 mb-[7px] rounded-sm w-[23%]"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Shopping
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-start rounded-sm w-[32%]">
                            <div className="bg-blue-A200_01 h-2 my-0.5 rounded-sm w-[23%]"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Medicine
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-gilroy items-center justify-end p-[23px] sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                    <div className="flex flex-col items-center justify-start mt-1.5">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Income vs Spending Report
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 h-[22px] md:h-auto items-center justify-start mb-1 w-[71px]">
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtGilroySemiBold14"
                      >
                        Yearly
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown Two"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-10 rounded-[5px] w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start md:mt-0 mt-1">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        30K
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] text-blue_gray-900 text-sm"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        25K
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        20K
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] text-blue_gray-900 text-sm"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        15K
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[3px] text-blue_gray-900 text-sm"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        10K
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[9px] text-blue_gray-900 text-sm"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        5K
                      </Text>
                      <Text
                        className="ml-2 md:ml-[0] text-blue_gray-900 text-sm"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        0K
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[15px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-[187px] rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[87px] mt-[100px] rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Jan
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[25px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-20 mt-[82px] rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[162px] rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Feb
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[11px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-blue-A700 h-44 rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-44 rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Mar
                        </Text>
                      </div>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-2 md:ml-[0] ml-[30px] md:mt-0 mt-[5px] w-[14%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <div className="bg-blue-A700 h-[181px] rounded-[5px] w-[49%]"></div>
                            <div className="bg-blue-200 h-[84px] mt-[97px] rounded-[5px] w-[49%]"></div>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Apr
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <div className="bg-blue-A700 h-[55px] mt-[127px] rounded-[5px] w-[49%]"></div>
                            <div className="bg-blue-200 h-[182px] rounded-[5px] w-[49%]"></div>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            May
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[33px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-[118px] mt-9 rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[154px] rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Jun
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-6 rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-[163px] rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[105px] mt-[58px] rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Jul
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[83px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-[104px] rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[79px] mt-[25px] rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Aug
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[66px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-[121px] rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[79px] mt-[42px] rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Sep
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[33px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-[154px] rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[79px] mt-[75px] rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Oct
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[39px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-[148px] rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[141px] mt-[7px] rounded-[5px] w-[49%]"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          Nov
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[29px] rounded-[5px] w-[6%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <div className="bg-blue-A700 h-[187px] rounded-[5px] w-[49%]"></div>
                          <div className="bg-blue-200 h-[161px] mt-[26px] rounded-[5px] w-1/2"></div>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroySemiBold14Bluegray900"
                        >
                          Dec
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-center mt-[22px] rounded-sm w-1/5 md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start rounded-sm w-[38%]">
                      <div className="bg-blue-A700 h-2 my-0.5 rounded-sm w-[28%]"></div>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtGilroySemiBold14Bluegray900"
                      >
                        Income
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 rounded-sm w-[45%]">
                      <div className="bg-blue-200 h-2 mb-[7px] rounded-sm w-[24%]"></div>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtGilroySemiBold14Bluegray900"
                      >
                        Spending
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-50_01 flex flex-col font-gilroy h-full inset-y-[0] items-start justify-start my-auto p-6 sm:px-5 right-[0] w-[28%]">
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
                    alt="ProfileImgLarg One"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Michelle Rock
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start mt-[41px]">
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
              <div className="flex flex-col gap-[19px] items-start justify-start mb-[658px] mt-[25px]">
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

export default ContactSharingPage;
