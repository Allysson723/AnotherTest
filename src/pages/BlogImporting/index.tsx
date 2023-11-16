import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Switch, Text } from "components";

import { CloseSVG } from "../../assets/images";

const BlogImportingPage: React.FC = () => {
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
                  src="images/img_group_2.svg"
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
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
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
                        src="images/img_user_24X24.svg"
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
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[28%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_instagram.svg"
                        alt="instagram"
                      />
                      <Text
                        className="mt-1 text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Blog
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
            <div className="flex flex-1 flex-col md:gap-10 gap-[100px] items-start justify-start md:mt-0 mt-8 w-full">
              <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                    <Text
                      className="mt-[7px] text-gray-900_01 text-lg"
                      size="txtGilroySemiBold18Gray90001"
                    >
                      Blog
                    </Text>
                    <div className="flex flex-row gap-4 items-end justify-between w-1/4">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Automated Publishing
                      </Text>
                      <div className="h-[29px] relative w-[21%]">
                        <Switch
                          onColor="#56c568"
                          offColor="#56c568"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="m-auto w-full"
                        />
                        <Switch
                          onColor="#56c568"
                          offColor="#56c568"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="absolute inset-[0] justify-center m-auto w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-col items-center justify-start outline outline-[2px] outline-blue-A700 p-6 sm:px-5 rounded-md w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_download.svg"
                      alt="download"
                    />
                    <Text
                      className="mt-[19px] text-blue_gray-600 text-lg"
                      size="txtGilroyMedium18Bluegray600"
                    >
                      Import Blogs From
                    </Text>
                    <Img
                      className="h-[69px] md:h-auto mt-3 object-cover w-[69px]"
                      src="images/img_wordpresslogo.png"
                      alt="wordpresslogo"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Workflow Automation
                  </Text>
                  <Text
                    className="leading-[29.00px] text-blue_gray-400 text-lg w-full"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    Workflow Automation refers to the design, execution, and
                    automation of processes based on workflow rules where human
                    tasks, data or files are routed between people or systems
                    based on pre-defined business rules. Using enterprise
                    workflow software, your business can save time and reduce
                    errors with automation.
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium py-[19px] text-center text-lg w-[504px]"
                shape="round"
                color="blue_A700"
              >
                Publish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogImportingPage;
