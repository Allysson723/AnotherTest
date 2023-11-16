import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const NotesPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_23.svg"
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
          <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Payments
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[61%] md:w-full">
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
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[43%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Analytics
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
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
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] rounded-lg w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[32%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_1.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Notes
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_24X24.svg"
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
            <div className="flex flex-1 flex-col gap-[57px] items-center justify-start w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtGilroySemiBold18Gray90001"
                  >
                    Notes
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[151px] pr-5 py-[19px]"
                    leftIcon={
                      <Img
                        className="h-6 ml-5 mr-2 my-4"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    shape="round"
                    color="blue_A700"
                  >
                    <div className="font-medium text-left text-lg">
                      Add Note
                    </div>
                  </Button>
                </div>
                <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer flex flex-1 items-center justify-center min-w-[237px] pr-[35px] py-[22px] w-full"
                    leftIcon={
                      <Img
                        className="h-6 ml-[35px] mr-4 w-[24pxpx] my-5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                    }
                    shape="round"
                    color="blue_50"
                  >
                    <div className="!text-blue_gray-900 font-medium sm:pr-5 text-left text-xl">
                      All Notes
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex flex-1 items-center justify-center min-w-[237px] pr-[35px] py-[22px] w-full"
                    leftIcon={
                      <Img
                        className="h-6 ml-[35px] mr-4 w-[24pxpx] my-5"
                        src="images/img_star_1.svg"
                        alt="star"
                      />
                    }
                    shape="round"
                    color="blue_50"
                  >
                    <div className="!text-blue_gray-900 font-medium sm:pr-5 text-left text-xl">
                      Favourites
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex flex-1 items-center justify-center min-w-[237px] pr-[35px] py-[22px] w-full"
                    leftIcon={
                      <Img
                        className="h-6 ml-[35px] mr-4 w-[24pxpx] my-5"
                        src="images/img_eyeslash_outline.svg"
                        alt="eye-slash/Outline"
                      />
                    }
                    shape="round"
                    color="blue_50"
                  >
                    <div className="!text-blue_gray-900 font-medium sm:pr-5 text-left text-xl">
                      Hidden
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex flex-1 items-center justify-center min-w-[237px] pr-[35px] py-[22px] w-full"
                    leftIcon={
                      <Img
                        className="h-6 ml-[35px] mr-4 w-[24pxpx] my-5"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                    }
                    shape="round"
                    color="blue_50"
                  >
                    <div className="!text-blue_gray-900 font-medium sm:pr-5 text-left text-xl">
                      Trash
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Recently Added
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-3 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-3 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-3 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-3 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-2 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-2 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-2 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-2 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-2 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-2 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-2 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-50 flex flex-1 flex-col items-start justify-end p-4 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14"
                        >
                          20 APR
                        </Text>
                        <Text
                          className="mt-[17px] text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Exploration ideas
                        </Text>
                        <div className="flex flex-row font-roboto gap-[7px] items-center justify-between mt-2 rounded-[5px] w-full">
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[47px]"
                            size="txtRobotoRegular12"
                          >
                            Design
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-[5px] py-1 rounded-[5px] text-blue_gray-400 text-xs w-[74px]"
                            size="txtRobotoRegular12"
                          >
                            Productivity
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[22px] justify-center px-1.5 py-1 rounded-[5px] text-blue_gray-400 text-xs w-6"
                            size="txtRobotoRegular12"
                          >
                            +1
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-2 text-black-900_04 text-sm"
                          size="txtGilroyRegular14Black90004"
                        >
                          <>
                            Ticket App
                            <br />
                            Travel Website
                            <br />
                            Digital marketing
                            <br />
                            Website....
                          </>
                        </Text>
                      </div>
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

export default NotesPage;
