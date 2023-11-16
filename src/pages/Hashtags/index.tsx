import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HashtagsPage: React.FC = () => {
  const [group10270value, setGroup10270value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group10392_26.svg"
                alt="Group10392"
              />
              <Input
                name="Group10270"
                placeholder="Search"
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 rounded-lg w-2/5 md:w-full"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
                size="2xl"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
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
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-start justify-end max-w-[944px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-7 items-start justify-start w-[35%] md:w-full">
            <Img
              className="h-[188px] md:h-auto rounded-[50%] w-[188px]"
              src="images/img_ellipse46.png"
              alt="EllipseFortySix"
            />
            <div className="flex flex-col items-start justify-start mt-7 rounded-md w-[34%]">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                size="txtGilroySemiBold28"
              >
                #nature
              </Text>
              <Text
                className="mt-8 text-blue_gray-900 text-lg"
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
              <Button
                className="cursor-pointer font-medium min-w-[108px] mt-6 text-center text-sm"
                shape="round"
                color="blue_A700"
                size="xl"
              >
                Follow
              </Button>
            </div>
          </div>
          <div className="flex mt-[61px] pt-1 relative w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start mt-auto w-[5%]">
              <Text
                className="text-base text-blue-A700"
                size="txtGilroyMedium16BlueA700"
              >
                Top
              </Text>
              <Line className="bg-blue-A700 h-0.5 w-full" />
            </div>
            <Text
              className="ml-[undefinedpx] text-base text-blue_gray-400 z-[1]"
              size="txtGilroyMedium16"
            >
              Recent
            </Text>
            <Line className="bg-blue_gray-100 h-px ml-[-47px] mr-auto mt-auto w-full z-[1]" />
          </div>
          <List
            className="flex flex-col gap-6 items-center mt-[23px] w-full"
            orientation="vertical"
          >
            <div className="flex-1 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
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
            <div className="flex-1 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
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
    </>
  );
};

export default HashtagsPage;
