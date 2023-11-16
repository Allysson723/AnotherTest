import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const CertificationTrackingPage: React.FC = () => {
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
                  src="images/img_group.svg"
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
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[507px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                      <Img
                        className="h-6 ml-[7px] w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[66%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bookmark.svg"
                        alt="bookmark"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
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
            <div className="flex flex-1 flex-col gap-[37px] items-start justify-start w-full">
              <Text
                className="text-gray-900_01 text-lg"
                size="txtGilroySemiBold18Gray90001"
              >
                Track Certificate
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136.png"
                      alt="Ellipse136"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-end pr-[5px] py-[5px]">
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Jane Cooper
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        MSc IT
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_62X62.png"
                      alt="Ellipse136 One"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-end pr-[5px] py-[5px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Robert Fox
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        BSc IT
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_1.png"
                      alt="Ellipse136 Two"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pr-[7px] pt-[7px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Brooklyn Simmons
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Design Course
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_2.png"
                      alt="Ellipse136 Three"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pr-[7px] pt-[7px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Floyd Miles
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Graphic Design
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136.png"
                      alt="Ellipse136 Four"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-end pr-[5px] py-[5px]">
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Jane Cooper
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        MSc IT
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_62X62.png"
                      alt="Ellipse136 Five"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-end pr-[5px] py-[5px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Robert Fox
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        BSc IT
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_1.png"
                      alt="Ellipse136 Six"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pr-[7px] pt-[7px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Brooklyn Simmons
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Design Course
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_2.png"
                      alt="Ellipse136 Seven"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pr-[7px] pt-[7px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Floyd Miles
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Graphic Design
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136.png"
                      alt="Ellipse136 Eight"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-end pr-[5px] py-[5px]">
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Jane Cooper
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        MSc IT
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_62X62.png"
                      alt="Ellipse136 Nine"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-end pr-[5px] py-[5px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Robert Fox
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        BSc IT
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_1.png"
                      alt="Ellipse136 Ten"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pr-[7px] pt-[7px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Brooklyn Simmons
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Design Course
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                      src="images/img_ellipse136_2.png"
                      alt="Ellipse136 Eleven"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pr-[7px] pt-[7px]">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Floyd Miles
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Graphic Design
                      </Text>
                    </div>
                    <div className="h-[62px] relative w-[62px]">
                      <div className="!w-[62px] h-[62px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[62px] h-[62px] m-auto overflow-visible"
                          value={74}
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#d6dae2" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-base text-blue_gray-900 w-max"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        75%
                      </Text>
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

export default CertificationTrackingPage;
