import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DocumentOpenerPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_11.svg"
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
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[940px] mx-auto p-[50px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[323px] w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between pt-[5px] w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-xl"
                  size="txtGilroySemiBold20"
                >
                  Rashed Othman Salem
                </Text>
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroyMedium18Bluegray400"
                >
                  Webflow Developer
                </Text>
              </div>
              <Text
                className="text-blue_gray-400 text-lg"
                size="txtGilroyMedium18Bluegray400"
              >
                Dubai, U.A.E
              </Text>
            </div>
            <Text
              className="leading-[29.00px] mt-6 text-blue_gray-400 text-lg"
              size="txtGilroyMedium18Bluegray400"
            >
              <>
                As a candidate for the Webflow Developer position at 02100, I
                would like to introduce myself as an exceptional designer with a
                strong background in Webflow, I understand the impact that good
                design can have. In applying for this position, I am confident
                due to my recent job and freelance experience, as well as my
                education.
                <br />
                <br />
                As UI/UX Designer at Unseen Works DMCC, I created innovative,
                creative, and digital experiences using a variety of software
                and concepts. An enthusiast of Figma and web design, I excel in
                both. I&#39;ve always had a keen eye for how things fit together
                and do not. Other members of the team sought my advice on their
                designs.
                <br />
                <br />
                I’m applying for this position because I want a career in
                Webflow, I love how Webflow gave me the ability to bring designs
                to life. I realize that I don’t have a strong background in Html
                etc., but I’m willing to learn it to get the position.
              </>
            </Text>
            <div className="flex flex-col gap-[18px] items-start justify-start mt-[29px]">
              <Text
                className="text-blue_gray-900 text-xl"
                size="txtGilroySemiBold20"
              >
                Michele D.
              </Text>
              <Text
                className="text-blue_gray-400 text-lg"
                size="txtGilroyMedium18Bluegray400"
              >
                Director of Say It Now
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentOpenerPage;
