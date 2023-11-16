import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const UserGroupsPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_8.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search Items, Customer etc"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
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
        </header>
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start p-[39px] md:px-5 w-[42%] md:w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
            size="txtGilroySemiBold24"
          >
            User Groups
          </Text>
          <div className="flex flex-col md:gap-10 gap-[308px] items-center justify-start mb-[30px] w-[96%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Rose J. Henry
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      6:15 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start mt-[5px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Kai Caudle
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      4:00 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 md:pr-10 sm:pr-5 pr-[280px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_1.png"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start mt-[5px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Carmelo Rousseau
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      3:45 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 md:pr-10 sm:pr-5 pr-[354px] w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_2.png"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start mt-[5px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Ali Comer
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      2:15 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_3.png"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col items-start justify-start mb-0.5 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Jacklyn Kovach
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      11:50 am
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_4.png"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col items-start justify-start mb-0.5 mt-[7px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Landon Mosby
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      7:50 am
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_profileimglarg_5.png"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Man Marin
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyRegular14"
                    >
                      6:30 am
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="cursor-pointer font-medium py-[17px] text-base text-center w-[502px]"
              shape="round"
              color="blue_A700"
            >
              Join Group
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGroupsPage;
