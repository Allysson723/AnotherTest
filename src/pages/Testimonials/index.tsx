import React from "react";

import { Img, Input, PagerIndicator, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TestimonialsPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[431px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_31.svg"
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
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1268px] mx-auto pt-1.5 md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Testimonials
            </Text>
            <div className="flex flex-row gap-8 items-center justify-between w-[9%]">
              <Img
                className="h-10 w-10"
                src="images/img_file_40X40.svg"
                alt="file"
              />
              <Img
                className="h-10 w-10"
                src="images/img_clock_40X40.svg"
                alt="clock"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 2 },
                1050: { items: 3 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start mx-2.5 p-6 sm:px-5 rounded-md">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Img
                        className="h-20 md:h-auto object-cover w-20"
                        src="images/img_rectangle729.png"
                        alt="Rectangle729"
                      />
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-8 w-8"
                          src="images/img_star_32X32.svg"
                          alt="star"
                        />
                        <Img
                          className="h-8 w-8"
                          src="images/img_star_32X32.svg"
                          alt="star One"
                        />
                        <Img
                          className="h-8 w-8"
                          src="images/img_star_32X32.svg"
                          alt="star Two"
                        />
                        <Img
                          className="h-8 w-8"
                          src="images/img_airplane_32X32.svg"
                          alt="airplane"
                        />
                        <Img
                          className="h-8 w-8"
                          src="images/img_star_2.svg"
                          alt="star Three"
                        />
                      </div>
                    </div>
                    <Text
                      className="mt-[25px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroyMedium24Black90001"
                    >
                      Floyd Miles
                    </Text>
                    <Text
                      className="leading-[29.00px] mt-4 text-blue_gray-400 text-lg w-full"
                      size="txtGilroyRegular18Bluegray400"
                    >
                      “Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet. Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.
                    </Text>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue-A700 w-2" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100 w-2"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="flex h-2 justify-center w-14"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue-A700 w-2"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100 w-2"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block md:ml-[0] mx-[8.00px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[8.00px] sm:ml-[0]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
