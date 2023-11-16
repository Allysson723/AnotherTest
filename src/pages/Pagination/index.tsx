import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PaginationPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_24.svg"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[89%] md:w-full">
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
            <div className="flex flex-1 flex-col md:gap-10 gap-[87px] items-end justify-start md:mt-0 mt-8 pt-[7px] w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtGilroySemiBold18Gray90001"
                >
                  Blogs
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 w-full">
                      <div className="md:h-[101px] h-[129px] relative rounded w-full">
                        <Img
                          className="absolute h-[101px] object-cover right-[0] rounded top-[0] w-[30%]"
                          src="images/img_rectangle19.png"
                          alt="RectangleNineteen"
                        />
                        <Text
                          className="absolute leading-[29.00px] left-[0] text-blue_gray-900 text-lg top-[0] w-[71%] sm:w-full"
                          size="txtGilroySemiBold18"
                        >
                          Battlegrounds Mobile India iOS release date
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-400_90 text-sm"
                          size="txtGilroyMedium14Bluegray40090"
                        >
                          <>
                            Krafton has been dropping hints about <br />
                            the BGMI iOS version for a few days.{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 w-full">
                      <div className="md:h-[101px] h-[129px] relative rounded w-full">
                        <Img
                          className="absolute h-[101px] object-cover right-[0] rounded top-[0] w-[30%]"
                          src="images/img_rectangle19.png"
                          alt="RectangleNineteen One"
                        />
                        <Text
                          className="absolute leading-[29.00px] left-[0] text-blue_gray-900 text-lg top-[0] w-[71%] sm:w-full"
                          size="txtGilroySemiBold18"
                        >
                          Battlegrounds Mobile India iOS release date
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-400_90 text-sm"
                          size="txtGilroyMedium14Bluegray40090"
                        >
                          <>
                            Krafton has been dropping hints about <br />
                            the BGMI iOS version for a few days.{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 w-full">
                      <div className="md:h-[101px] h-[129px] relative rounded w-full">
                        <Img
                          className="absolute h-[101px] object-cover right-[0] rounded top-[0] w-[30%]"
                          src="images/img_rectangle19.png"
                          alt="RectangleNineteen Two"
                        />
                        <Text
                          className="absolute leading-[29.00px] left-[0] text-blue_gray-900 text-lg top-[0] w-[71%] sm:w-full"
                          size="txtGilroySemiBold18"
                        >
                          Battlegrounds Mobile India iOS release date
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-400_90 text-sm"
                          size="txtGilroyMedium14Bluegray40090"
                        >
                          <>
                            Krafton has been dropping hints about <br />
                            the BGMI iOS version for a few days.{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 w-full">
                      <div className="md:h-[101px] h-[129px] relative rounded w-full">
                        <Img
                          className="absolute h-[101px] object-cover right-[0] rounded top-[0] w-[30%]"
                          src="images/img_rectangle19.png"
                          alt="RectangleNineteen Three"
                        />
                        <Text
                          className="absolute leading-[29.00px] left-[0] text-blue_gray-900 text-lg top-[0] w-[71%] sm:w-full"
                          size="txtGilroySemiBold18"
                        >
                          Battlegrounds Mobile India iOS release date
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-400_90 text-sm"
                          size="txtGilroyMedium14Bluegray40090"
                        >
                          <>
                            Krafton has been dropping hints about <br />
                            the BGMI iOS version for a few days.{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 w-full">
                      <div className="md:h-[101px] h-[129px] relative rounded w-full">
                        <Img
                          className="absolute h-[101px] object-cover right-[0] rounded top-[0] w-[30%]"
                          src="images/img_rectangle19.png"
                          alt="RectangleNineteen Four"
                        />
                        <Text
                          className="absolute leading-[29.00px] left-[0] text-blue_gray-900 text-lg top-[0] w-[71%] sm:w-full"
                          size="txtGilroySemiBold18"
                        >
                          Battlegrounds Mobile India iOS release date
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-400_90 text-sm"
                          size="txtGilroyMedium14Bluegray40090"
                        >
                          <>
                            Krafton has been dropping hints about <br />
                            the BGMI iOS version for a few days.{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 w-full">
                      <div className="md:h-[101px] h-[129px] relative rounded w-full">
                        <Img
                          className="absolute h-[101px] object-cover right-[0] rounded top-[0] w-[30%]"
                          src="images/img_rectangle19.png"
                          alt="RectangleNineteen Five"
                        />
                        <Text
                          className="absolute leading-[29.00px] left-[0] text-blue_gray-900 text-lg top-[0] w-[71%] sm:w-full"
                          size="txtGilroySemiBold18"
                        >
                          Battlegrounds Mobile India iOS release date
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-400_90 text-sm"
                          size="txtGilroyMedium14Bluegray40090"
                        >
                          <>
                            Krafton has been dropping hints about <br />
                            the BGMI iOS version for a few days.{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Button
                  className="flex h-8 items-center justify-center rounded w-8"
                  color="blue_gray_300_87"
                  size="sm"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="!text-blue-A700 border border-blue-A700 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                  color="white_A700"
                  size="2xl"
                >
                  1
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                  color="white_A700"
                  size="2xl"
                >
                  2
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-semibold font-sfprotext h-8 rounded text-center text-sm w-8"
                  color="white_A700"
                  size="2xl"
                >
                  ...
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                  color="white_A700"
                  size="2xl"
                >
                  9
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                  color="white_A700"
                  size="xl"
                >
                  10
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid flex h-8 items-center justify-center rounded w-8"
                  shape="round"
                  color="white_A700"
                  size="sm"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginationPage;
