import React from "react";

import { Button, Img, List, Text } from "components";

const MultiSelectPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_22.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
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
                    src="images/img_arrowdown_gray_901.svg"
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
                    src="images/img_arrowdown_gray_901.svg"
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
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16Gray900">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center"
                shape="round"
                color="blue_A700"
                size="3xl"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between w-full">
            <Text
              className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtGilroySemiBold32Black900"
            >
              Gallery
            </Text>
            <div className="flex flex-row gap-[30px] items-center justify-between w-[18%]">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtGilroySemiBold24"
              >
                4 Selected
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[79px] py-[17px] text-base text-center"
                shape="round"
                color="blue_A700"
              >
                Share
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end pt-[7px] w-[97%] md:w-full">
            <div className="flex flex-col gap-[23px] items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroySemiBold24Black900"
              >
                Recent
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-1 grid grid-cols-2 w-1/4 md:w-full"
                  orientation="horizontal"
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full"
                    style={{
                      backgroundImage: "url('images/img_rectangle10.png')",
                    }}
                  >
                    <div className="bg-black-900_4c md:h-10 h-[150px] p-[54px] md:px-10 sm:px-5 relative w-[150px]">
                      <Img
                        className="absolute h-10 inset-[0] justify-center m-auto w-10"
                        src="images/img_checkmark_20X20.svg"
                        alt="checkmark"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full"
                    style={{
                      backgroundImage: "url('images/img_rectangle11.png')",
                    }}
                  >
                    <div className="bg-black-900_4c md:h-10 h-[150px] p-[54px] md:px-10 sm:px-5 relative w-[150px]">
                      <Img
                        className="absolute h-10 inset-[0] justify-center m-auto w-10"
                        src="images/img_checkmark_20X20.svg"
                        alt="checkmark One"
                      />
                    </div>
                  </div>
                </List>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2448.png')" }}
                >
                  <div className="bg-black-900_4c flex flex-col gap-7 h-[150px] items-center justify-end pt-1 px-1 w-[150px]">
                    <Img
                      className="h-10 mt-[49px] w-10"
                      src="images/img_checkmark_20X20.svg"
                      alt="checkmark Two"
                    />
                    <Img
                      className="h-[27px] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera"
                    />
                  </div>
                </div>
                <Img
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  src="images/img_rectangle10.png"
                  alt="RectangleTen"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  src="images/img_rectangle11.png"
                  alt="RectangleEleven"
                />
                <div
                  className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2448.png')" }}
                >
                  <Img
                    className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                    src="images/img_videocamera.svg"
                    alt="videocamera One"
                  />
                </div>
                <Img
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  src="images/img_rectangle11.png"
                  alt="RectangleEleven One"
                />
                <div
                  className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2448.png')" }}
                >
                  <Img
                    className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                    src="images/img_videocamera.svg"
                    alt="videocamera Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[23px] items-start justify-start mt-[77px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroySemiBold24Black900"
              >
                Last Week
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle10_150X150.png"
                    alt="RectangleTen One"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2452.png')",
                    }}
                  >
                    <div className="bg-black-900_4c flex flex-col gap-7 h-[150px] items-center justify-end pt-1 px-1 w-[150px]">
                      <Img
                        className="h-10 mt-[49px] w-10"
                        src="images/img_checkmark_20X20.svg"
                        alt="checkmark Three"
                      />
                      <Img
                        className="h-[27px] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera Three"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle11_150X150.png"
                    alt="RectangleEleven Two"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle10_150X150.png"
                    alt="RectangleTen Two"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2452.png')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera Four"
                    />
                  </div>
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle11_150X150.png"
                    alt="RectangleSeventeen"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle10_150X150.png"
                    alt="RectangleTen Three"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2452.png')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera Five"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-1 w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle14.png"
                    alt="RectangleFourteen"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle12.png"
                    alt="RectangleTwelve"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle13.png"
                    alt="RectangleThirteen"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle14.png"
                    alt="RectangleSixteen"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle12.png"
                    alt="RectangleFifteen"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle13.png"
                    alt="RectangleEighteen"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle14.png"
                    alt="RectangleTwenty"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle12.png"
                    alt="RectangleNineteen"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end mt-[70px] pt-2.5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtGilroySemiBold24Black900"
                >
                  A Month Ago
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle23.png"
                    alt="RectangleTwentyThree"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle21.png"
                    alt="RectangleTwentyOne"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2450.png')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera Six"
                    />
                  </div>
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle23.png"
                    alt="RectangleTwentyFive"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle21.png"
                    alt="RectangleTwentyFour"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2450.png')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera Seven"
                    />
                  </div>
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle21.png"
                    alt="RectangleTwentySix"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2450.png')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera Eight"
                    />
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

export default MultiSelectPage;
