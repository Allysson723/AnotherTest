import React from "react";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AudioMusicPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group.svg"
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
        <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-6 items-center justify-start md:mt-0 mt-[50px] w-[64%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between py-[7px] w-full">
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroySemiBold24"
                >
                  Album Name
                </Text>
              </div>
              <Img
                className="h-6 w-6"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </div>
            <Img
              className="h-[509px] md:h-auto object-cover rounded-md w-full"
              src="images/img_rectangle1224.png"
              alt="Rectangle1224"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col items-start justify-end pr-[7px] py-[7px]">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-800_01 sm:text-xl"
                      size="txtGilroySemiBold24Bluegray80001"
                    >
                      Tere Jaisa Yaar Kahan...
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_albumtitleic.svg"
                    alt="Albumtitleic"
                  />
                </div>
                <div className="flex flex-col gap-3 items-center justify-start pb-[3px] w-full">
                  <Img
                    className="h-6 w-full"
                    src="images/img_group1443.svg"
                    alt="Group1443"
                  />
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      04:10
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      09:00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between py-[5px] w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_minimize.svg"
                  alt="minimize"
                />
                <div className="flex flex-row items-center justify-center">
                  <Img
                    className="h-8 w-8"
                    src="images/img_stepbackwardo.svg"
                    alt="stepbackwardO"
                  />
                  <Img
                    className="h-[58px] ml-[35px] w-[58px]"
                    src="images/img_vector.svg"
                    alt="Vector"
                  />
                  <Img
                    className="h-8 ml-[35px] w-8"
                    src="images/img_skipforwardou.svg"
                    alt="skipforwardOu"
                  />
                </div>
                <Img
                  className="h-8 w-8"
                  src="images/img_repeatoutline.svg"
                  alt="repeatOutline"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-[30px] items-start justify-between w-[34%] md:w-full">
            <Line className="bg-blue_gray-100 h-[980px] sm:h-px sm:w-full w-px" />
            <div className="flex flex-col items-center justify-end sm:mt-0 mt-[30px]">
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20.png"
                      alt="RectangleTwenty"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start pr-1 pt-1">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Hum Nashe Mein Toh Nahin
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        03:28
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        Pritam, Arijit Singh, Tulsi Kumar
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_78X78.png"
                      alt="RectangleTwenty One"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="mt-2 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        01:43
                      </Text>
                      <Text
                        className="mt-[13px] text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu One"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_1.png"
                      alt="RectangleTwenty Two"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="mt-2 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        04:01
                      </Text>
                      <Text
                        className="mt-3 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu Two"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_78X78.png"
                      alt="RectangleTwenty Three"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="mt-2 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        01:43
                      </Text>
                      <Text
                        className="mt-[13px] text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu Three"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20.png"
                      alt="RectangleTwenty Four"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start pr-1 pt-1">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Hum Nashe Mein Toh Nahin
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        03:28
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        Pritam, Arijit Singh, Tulsi Kumar
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu Four"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_1.png"
                      alt="RectangleTwenty Five"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="mt-2 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        04:01
                      </Text>
                      <Text
                        className="mt-3 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu Five"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_1.png"
                      alt="RectangleTwenty Six"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="mt-2 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        04:01
                      </Text>
                      <Text
                        className="mt-3 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu Six"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_1.png"
                      alt="RectangleTwenty Seven"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="mt-2 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        04:01
                      </Text>
                      <Text
                        className="mt-3 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu Seven"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_78X78.png"
                      alt="RectangleTwenty Eight"
                    />
                    <div className="flex flex-col gap-2 items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        01:43
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icmoremenu.svg"
                      alt="icmoremenu Eight"
                    />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioMusicPage;
