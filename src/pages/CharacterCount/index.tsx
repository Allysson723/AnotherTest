import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CharacterCountPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[82px] justify-start mx-auto pb-[47px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_6.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
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
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="ml-[9px] text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      Orders
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_901.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Text
                    className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    Categories
                  </Text>
                  <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="ml-4 text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_901.svg"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
                <Img
                  className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[86px] md:px-5 w-[68%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Catalogue
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[50px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
              <Text
                className="md:text-5xl text-[100px] text-amber-500"
                size="txtGilroyMedium100"
              >
                4.0
              </Text>
              <div className="flex flex-row items-center justify-evenly mt-4 w-[96%] md:w-full">
                <Img className="h-6 w-6" src="images/img_star.svg" alt="star" />
                <Img
                  className="h-6 w-6"
                  src="images/img_star.svg"
                  alt="star One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_star.svg"
                  alt="star Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_star.svg"
                  alt="star Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_star_24X24.svg"
                  alt="star Four"
                />
              </div>
              <Text
                className="mt-[23px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                size="txtGilroyMedium24Bluegray400"
              >
                2.2k reviews{" "}
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-end py-[5px] w-[78%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtGilroyMedium18Black900"
                >
                  Excellent
                </Text>
                <Img
                  className="h-px"
                  src="images/img_group9980.svg"
                  alt="Group9980"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[27px] w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtGilroyMedium18Black900"
                >
                  Good
                </Text>
                <Img
                  className="h-px"
                  src="images/img_group9980_bluegray_100.svg"
                  alt="Group9980 One"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-7 w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtGilroyMedium18Black900"
                >
                  Average
                </Text>
                <Img
                  className="h-px"
                  src="images/img_group9980_bluegray_100_1X600.svg"
                  alt="Group9980 Two"
                />
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-[23px] w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtGilroyMedium18Black900"
                >
                  Below Average
                </Text>
                <Img
                  className="h-px"
                  src="images/img_group9980_1X600.svg"
                  alt="Group9980 Three"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[21px] w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtGilroyMedium18Black900"
                >
                  Poor
                </Text>
                <Img
                  className="h-px"
                  src="images/img_group9980_1.svg"
                  alt="Group9980 Four"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] items-start justify-start mt-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/img_ellipse31.png"
                alt="EllipseThirtyOne"
              />
              <Text
                className="ml-4 md:ml-[0] text-black-900 text-lg"
                size="txtGilroySemiBold18Black900"
              >
                Jane Cooper
              </Text>
              <Img
                className="h-8 md:ml-[0] ml-[757px] w-8"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </div>
            <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-[24%] md:w-full">
              <div className="flex flex-row items-center justify-evenly w-[43%]">
                <Img
                  className="h-4 w-4"
                  src="images/img_star.svg"
                  alt="star Five"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_star.svg"
                  alt="star Six"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_star.svg"
                  alt="star Seven"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_star.svg"
                  alt="star Eight"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_star_24X24.svg"
                  alt="star Nine"
                />
              </div>
              <Text
                className="text-blue_gray-400 text-sm"
                size="txtGilroyRegular14"
              >
                10 June 2022
              </Text>
            </div>
            <Text
              className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
              size="txtGilroyMedium14"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis et
              consequat nisi id id aliquam quis. Scelerisque at morbi arcu nibh
              faucibus duis facilisis nunc. Dolor non semper elementum diam
              dictum faucibus. Tellus euismod in euismod eget. Adipiscing sed
              vitae sagittis metus orci, platea. Aliquam donec in nec dignissim
              nec pulvinar morbi.{" "}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start mt-[57px] w-full">
            <Text
              className="text-black-900 text-lg"
              size="txtGilroySemiBold18Black900"
            >
              Write your review
            </Text>
            <div className="flex flex-row items-center justify-center md:ml-[0] ml-[350px] mt-4 w-[28%] md:w-full">
              <Img
                className="h-[50px] w-[50px]"
                src="images/img_star.svg"
                alt="star Ten"
              />
              <Img
                className="h-[50px] ml-1 w-[50px]"
                src="images/img_star.svg"
                alt="star Eleven"
              />
              <Img
                className="h-[50px] ml-1 w-[50px]"
                src="images/img_star.svg"
                alt="star Twelve"
              />
              <Img
                className="h-[50px] ml-1 w-[50px]"
                src="images/img_star.svg"
                alt="star Thirteen"
              />
              <Img
                className="h-[50px] ml-1 w-[50px]"
                src="images/img_star_24X24.svg"
                alt="star Fourteen"
              />
            </div>
            <div className="bg-white-A700 border border-blue_gray-300 border-solid flex flex-col gap-[7px] justify-start mt-4 rounded-md w-full">
              <Line className="bg-blue_gray-100_01 h-px mr-[687px] w-[29%]" />
              <div className="h-24 md:h-[88px] ml-1.5 md:ml-[0] relative w-full">
                <Text
                  className="absolute inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-400 text-sm top-[0] w-full"
                  size="txtGilroyMedium14"
                >
                  <>
                    Krafton has been dropping hints about the BGMI iOS version
                    for a few days. In the social media post that announced
                    special rewards on 50 million downloads dated August 5,
                    2021, the caption clearly stated &quot;We are preparing for
                    all Indian players to receive rewards regardless of their OS
                    [apple emoji].&quot; Additionally, Krafton also shared a
                    reveal poster that has the Apple mascot in it. While
                    speculations about Battlegrounds Mobile India release date
                    have been made in the past, Krafton might have revealed the
                    date accidentally.
                  </>
                </Text>
                <div className="absolute bottom-[0] md:h-2 h-3 right-[0] w-[11px]">
                  <Img
                    className="absolute h-2 inset-y-[0] my-auto right-[0] w-2"
                    src="images/img_basetextarea.svg"
                    alt="baseTextarea"
                  />
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold md:ml-[0] ml-[718px] mt-[19px] py-[17px] text-base text-center w-[248px]"
              shape="round"
              color="blue_A700"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterCountPage;
