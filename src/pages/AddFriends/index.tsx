import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AddFriendsPage: React.FC = () => {
  const [group10337value, setGroup10337value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-2.5">
              <Img
                className="h-[35px]"
                src="images/img_group10392_6.svg"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Products
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Resouces
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-[5px] text-base text-gray-900"
                size="txtGilroyMedium16Gray900"
              >
                Request a demo
              </Text>
            </div>
            <Img
              className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[392px] rounded-[50%] w-14"
              src="images/img_profileimglarg.png"
              alt="ProfileImgLarg"
            />
          </div>
        </header>
        <div className="flex flex-col gap-8 items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtGilroySemiBold24Black900"
            >
              People you may know
            </Text>
            <Input
              name="Group10337"
              placeholder="Search Friends"
              value={group10337value}
              onChange={(e) => setGroup10337value(e)}
              className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid flex sm:flex-1 rounded-lg sm:w-full"
              suffix={
                group10337value?.length > 0 ? (
                  <CloseSVG
                    className="mt-[17px] mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                    onClick={() => setGroup10337value("")}
                    fillColor="#bac1ce"
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                ) : (
                  <Img
                    className="mt-[17px] mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                    src="images/img_search_blue_A200.svg"
                    alt="search"
                  />
                )
              }
              shape="round"
              size="2xl"
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[228px] md:h-auto object-cover w-[228px]"
                  src="images/img_profileimglarg.png"
                  alt="Rectangle1339"
                />
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-[13px] items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[7px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Rose J. Henry
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="Rectangle1340"
                  />
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Kai Caudle
                  </Text>
                  <Text
                    className="mt-[19px] text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                    src="images/img_rectangle1340.png"
                    alt="Rectangle1340 One"
                  />
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-3.5 items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[7px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Jane Cooper
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                    src="images/img_profileimglarg_2.png"
                    alt="Rectangle1340 Two"
                  />
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Wade Warren
                  </Text>
                  <Text
                    className="mt-[18px] text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                    src="images/img_profileimglarg_3.png"
                    alt="Rectangle1340 Three"
                  />
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Leslie Alexander
                  </Text>
                  <Text
                    className="mt-[19px] text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                    src="images/img_profileimglarg_4.png"
                    alt="Rectangle1340 Four"
                  />
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-3.5 items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[7px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="sm"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-start rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                    style={{
                      backgroundImage:
                        "url('images/img_profileimglarg_50X50.png')",
                    }}
                  >
                    <Img
                      className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                      src="images/img_rectangle1341.png"
                      alt="Rectangle1341"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Robert Fox
                  </Text>
                  <Text
                    className="mt-[18px] text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="sm"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-start rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                    style={{
                      backgroundImage: "url('images/img_rectangle1340.png')",
                    }}
                  >
                    <Img
                      className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                      src="images/img_rectangle1341_228X228.png"
                      alt="Rectangle1341 One"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-3.5 items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[7px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Jane Cooper
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="sm"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-start rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                    style={{
                      backgroundImage: "url('images/img_profileimglarg_2.png')",
                    }}
                  >
                    <Img
                      className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                      src="images/img_rectangle1341_1.png"
                      alt="Rectangle1341 Two"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Jacob Jones
                  </Text>
                  <Text
                    className="mt-[18px] text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="sm"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-start rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[228px] relative rounded-tl-md rounded-tr-md w-[228px]"
                    style={{
                      backgroundImage: "url('images/img_profileimglarg_3.png')",
                    }}
                  >
                    <Img
                      className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-tl-md rounded-tr-md w-[228px]"
                      src="images/img_rectangle1341_2.png"
                      alt="Rectangle1341 Three"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md w-full">
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Devon Lane
                  </Text>
                  <Text
                    className="mt-[18px] text-blue_gray-400 text-lg"
                    size="txtGilroyRegular18Bluegray400"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg"
                      shape="round"
                      color="blue_gray_100"
                      size="sm"
                    >
                      Add Friend
                    </Button>
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

export default AddFriendsPage;
