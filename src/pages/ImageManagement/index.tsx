import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ImageManagementPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_35X162.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] md:mt-0 my-0.5 w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
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
                size="2xl"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="ml-0.5 text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      Products
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      Resouces
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown One"
                    />
                  </div>
                </List>
                <Text
                  className="text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                className="h-14 md:h-auto md:ml-[0] ml-[58px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[51px] items-start justify-start max-w-[944px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-7 items-center justify-start w-[35%] md:w-full">
            <Img
              className="h-[188px] md:h-auto rounded-[50%] w-[188px]"
              src="images/img_ellipse46.png"
              alt="EllipseFortySix"
            />
            <div className="flex flex-col gap-[29px] items-center justify-start pt-2.5 w-[34%]">
              <div className="flex flex-col gap-8 items-center justify-start">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                  size="txtGilroySemiBold28"
                >
                  #nature
                </Text>
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  <span className="text-colors font-gilroy text-left text-xl font-semibold">
                    38.5M
                  </span>
                  <span className="text-colors font-gilroy text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-colors4 font-gilroy text-left font-medium">
                    posts
                  </span>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium text-center text-sm w-[108px]"
                shape="round"
                color="blue_A700"
                size="xl"
              >
                Follow
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-end w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-[16%] md:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start p-2.5 w-[47px] md:w-full">
                    <Text
                      className="text-base text-blue-A700 w-auto"
                      size="txtGilroyMedium16BlueA700"
                    >
                      Top
                    </Text>
                  </div>
                  <Line className="bg-blue-A700 h-0.5 w-full" />
                </div>
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtGilroyMedium16"
                  >
                    Recent
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="flex flex-col items-center justify-end w-full">
              <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                <div className="flex-1 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-0 w-full">
                  <Img
                    className="h-[296px] md:h-auto object-cover w-[296px]"
                    src="images/img_rectangle10_296X296.png"
                    alt="RectangleTen"
                  />
                  <Img
                    className="h-[296px] md:h-auto object-cover w-[296px]"
                    src="images/img_rectangle11_296X296.png"
                    alt="RectangleEleven"
                  />
                  <Img
                    className="h-[296px] md:h-auto object-cover w-[296px]"
                    src="images/img_rectangle13_296X296.png"
                    alt="RectangleThirteen"
                  />
                </div>
                <div className="flex-1 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-0 w-full">
                  <Img
                    className="h-[296px] md:h-auto object-cover w-[296px]"
                    src="images/img_rectangle14_296X296.png"
                    alt="RectangleFourteen"
                  />
                  <Img
                    className="h-[296px] md:h-auto object-cover w-[296px]"
                    src="images/img_rectangle15.png"
                    alt="RectangleFifteen"
                  />
                  <Img
                    className="h-[296px] md:h-auto object-cover w-[296px]"
                    src="images/img_rectangle16.png"
                    alt="RectangleSixteen"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageManagementPage;
