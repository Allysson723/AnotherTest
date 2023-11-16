import React from "react";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AudioLibraryPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[30px] items-center justify-start mx-auto pb-8 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_1.svg"
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
        <div className="flex flex-col items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start pb-[17px] w-full">
            <div className="flex flex-col gap-2 items-start justify-start pt-[5px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[84%] md:w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtGilroySemiBold18Black900"
                >
                  Song Title
                </Text>
                <Text
                  className="md:ml-[0] ml-[343px] text-black-900 text-lg"
                  size="txtGilroySemiBold18Black900"
                >
                  Album Name
                </Text>
                <Text
                  className="md:ml-[0] ml-[130px] text-black-900 text-lg"
                  size="txtGilroySemiBold18Black900"
                >
                  Artist
                </Text>
                <Text
                  className="md:ml-[0] ml-[275px] text-black-900 text-lg"
                  size="txtGilroySemiBold18Black900"
                >
                  Duration
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="flex flex-col gap-[16.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[23%] md:w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20.png"
                      alt="RectangleTwenty"
                    />
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Hum Nashe Mein Toh Nahin
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[140px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Bhoolbhulaiya 2
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[120px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Pritam, Arijit Singh, Tulsi Kumar
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[99px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    03:28
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[223px] w-6"
                    src="images/img_icmoremenu.svg"
                    alt="icmoremenu"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[21%] md:w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_78X78.png"
                      alt="RectangleTwenty One"
                    />
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Chaand Baaliyan Song
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[169px] md:mt-0 mt-[33px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Chaand Baaliyan
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[108px] md:mt-0 mt-[34px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Aditya A
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[257px] md:mt-0 mt-8 text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    01:43
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[225px] md:mt-0 mt-[27px] w-6"
                    src="images/img_icmoremenu.svg"
                    alt="icmoremenu One"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-1/5 md:w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_1.png"
                      alt="RectangleTwenty Two"
                    />
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Gehraiyaan Title Track
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[174px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Gehraiyaan
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[150px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    OAFF, Savera, Lothika, Ankur Tewari
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[62px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    04:01
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[223px] w-6"
                    src="images/img_icmoremenu.svg"
                    alt="icmoremenu Two"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[21%] md:w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_78X78.png"
                      alt="RectangleTwenty Three"
                    />
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Chaand Baaliyan Song
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[169px] md:mt-0 mt-[33px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Chaand Baaliyan
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[108px] md:mt-0 mt-[34px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Aditya A
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[257px] md:mt-0 mt-8 text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    01:43
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[225px] md:mt-0 mt-[27px] w-6"
                    src="images/img_icmoremenu.svg"
                    alt="icmoremenu Three"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[23%] md:w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20.png"
                      alt="RectangleTwenty Four"
                    />
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Hum Nashe Mein Toh Nahin
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[140px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Bhoolbhulaiya 2
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[120px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Pritam, Arijit Singh, Tulsi Kumar
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[99px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    03:28
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[223px] w-6"
                    src="images/img_icmoremenu.svg"
                    alt="icmoremenu Four"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-1/5 md:w-full">
                    <Img
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      src="images/img_rectangle20_1.png"
                      alt="RectangleTwenty Five"
                    />
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Gehraiyaan Title Track
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[174px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Gehraiyaan
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[150px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    OAFF, Savera, Lothika, Ankur Tewari
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[62px] text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    04:01
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[223px] w-6"
                    src="images/img_icmoremenu.svg"
                    alt="icmoremenu Five"
                  />
                </div>
              </List>
            </div>
          </div>
          <Line className="bg-blue_gray-100 h-px mt-2 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-4 w-full">
            <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[23%] md:w-full">
              <Img
                className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                src="images/img_rectangle20.png"
                alt="RectangleTwenty Six"
              />
              <Text
                className="text-base text-blue_gray-900"
                size="txtGilroyMedium16Bluegray900"
              >
                Hum Nashe Mein Toh Nahin
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[140px] text-base text-blue_gray-400"
              size="txtGilroyRegular16"
            >
              Bhoolbhulaiya 2
            </Text>
            <Text
              className="md:ml-[0] ml-[120px] text-base text-blue_gray-400"
              size="txtGilroyRegular16"
            >
              Pritam, Arijit Singh, Tulsi Kumar
            </Text>
            <Text
              className="md:ml-[0] ml-[99px] text-base text-blue_gray-400"
              size="txtGilroyRegular16"
            >
              03:28
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[223px] w-6"
              src="images/img_icmoremenu.svg"
              alt="icmoremenu Six"
            />
          </div>
          <Line className="bg-blue_gray-100 h-px mt-4 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-4 w-full">
            <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-1/5 md:w-full">
              <Img
                className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                src="images/img_rectangle20_1.png"
                alt="RectangleTwenty Seven"
              />
              <Text
                className="text-base text-blue_gray-900"
                size="txtGilroyMedium16Bluegray900"
              >
                Gehraiyaan Title Track
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[174px] text-base text-blue_gray-400"
              size="txtGilroyRegular16"
            >
              Gehraiyaan
            </Text>
            <Text
              className="md:ml-[0] ml-[150px] text-base text-blue_gray-400"
              size="txtGilroyRegular16"
            >
              OAFF, Savera, Lothika, Ankur Tewari
            </Text>
            <Text
              className="md:ml-[0] ml-[62px] text-base text-blue_gray-400"
              size="txtGilroyRegular16"
            >
              04:01
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[223px] w-6"
              src="images/img_icmoremenu.svg"
              alt="icmoremenu Seven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioLibraryPage;
