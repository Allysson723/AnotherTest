import React from "react";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DynamicContentPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-start justify-end mx-auto sm:pl-5 pl-[35px] pt-[35px] w-full">
        <div className="flex flex-col items-center md:ml-[0] ml-[51px] sm:pr-5 pr-[86px] md:px-5 w-[97%] md:w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-2.5">
                <Img
                  className="h-[35px]"
                  src="images/img_group_15.svg"
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
              <Img
                className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[385px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end md:ml-[0] ml-[51px] md:px-5 w-[97%] md:w-full">
          <div className="md:h-[2778px] sm:h-[5335px] h-[919px] relative w-full">
            <Img
              className="h-[238px] mt-[121px] object-cover w-[30%]"
              src="images/img_rectangle2152.png"
              alt="Rectangle2152"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[69px] h-full inset-[0] items-start justify-center m-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[94%] md:w-full">
                <div className="flex flex-row gap-6 items-center justify-between w-1/4 md:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start p-2.5 w-full">
                      <Text
                        className="text-base text-blue-A700 w-auto"
                        size="txtGilroyMedium16BlueA700"
                      >
                        Home
                      </Text>
                    </div>
                    <Line className="bg-blue-A700 h-0.5 w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      TV Shows
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Movies
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Kids
                  </Text>
                </div>
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:w-full"
                  suffix={
                    inputfieldvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer h-5 ml-[35px] mr-3 my-4"
                        onClick={() => setInputfieldvalue("")}
                        fillColor="#bac1ce"
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                      />
                    ) : (
                      <Img
                        className="cursor-pointer h-5 ml-[35px] mr-3 my-4"
                        src="images/img_search_blue_A200.svg"
                        alt="search"
                      />
                    )
                  }
                  shape="round"
                  size="2xl"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-end w-full">
                <div className="flex flex-col md:gap-10 gap-[73px] justify-end w-full">
                  <div className="flex md:flex-col flex-row gap-7 items-center justify-end md:ml-[0] ml-[432px] mr-[86px] w-[62%] md:w-full">
                    <Img
                      className="h-[238px] sm:h-auto object-cover w-[49%] md:w-full"
                      src="images/img_rectangle2153.png"
                      alt="Rectangle2153"
                    />
                    <Img
                      className="h-[238px] sm:h-auto object-cover w-[49%] md:w-full"
                      src="images/img_rectangle2154.png"
                      alt="Rectangle2154"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <List
                      className="flex flex-col gap-[30px] items-center overflow-auto w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-[31px] items-start justify-start my-0 pt-[7px] w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[93%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            Based On Your Recent Search
                          </Text>
                          <Text
                            className="sm:mt-0 mt-[3px] text-base text-blue-A700"
                            size="txtGilroySemiBold16BlueA700"
                          >
                            View All
                          </Text>
                        </div>
                        <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between pb-[5px] w-full">
                          <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326.png"
                              alt="Rectangle1326"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_250X250.png"
                              alt="Rectangle1326 One"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_1.png"
                              alt="Rectangle1326 Two"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_2.png"
                              alt="Rectangle1326 Three"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_3.png"
                              alt="Rectangle1326 Four"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start my-0 pt-[9px] w-full">
                        <div className="flex flex-row md:gap-10 items-start justify-between w-[93%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            Library
                          </Text>
                          <Text
                            className="text-base text-blue-A700"
                            size="txtGilroySemiBold16BlueA700"
                          >
                            View All
                          </Text>
                        </div>
                        <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_4.png"
                              alt="Rectangle1326 One"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_5.png"
                              alt="Rectangle1326 One One"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_6.png"
                              alt="Rectangle1326 Two One"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_7.png"
                              alt="Rectangle1326 Three One"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_8.png"
                              alt="Rectangle1326 Four One"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start my-0 w-full">
                        <div className="flex flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            Podcasts
                          </Text>
                          <Text
                            className="text-base text-blue-A700 text-right"
                            size="txtGilroySemiBold16BlueA700"
                          >
                            View All
                          </Text>
                        </div>
                        <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_4.png"
                              alt="Rectangle1326 Two"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_5.png"
                              alt="Rectangle1326 One Two"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_6.png"
                              alt="Rectangle1326 Two Two"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_7.png"
                              alt="Rectangle1326 Three Two"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[250px] md:h-auto object-cover w-[250px]"
                              src="images/img_rectangle1326_9.png"
                              alt="Rectangle1326 Four Two"
                            />
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Lorem imsum
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
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

export default DynamicContentPage;
