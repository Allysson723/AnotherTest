import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PdfEditPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-gilroy justify-start mx-auto pb-[76px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_27.svg"
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
        <div className="flex md:h-[901px] h-[904px] justify-end md:ml-[0] ml-[168px] md:px-5 relative w-[73%] md:w-full">
          <div className="absolute bg-white-A700 border border-blue_gray-300 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-2 rounded-md top-[0] w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-1 md:ml-[0] pl-1 w-[49%] md:w-full">
              <div className="flex flex-col items-center justify-start rounded w-[27%] sm:w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Button
                    className="flex h-5 items-center justify-center rounded w-5"
                    color="gray_300"
                    size="xs"
                  >
                    <Img src="images/img_mobile.svg" alt="mobile" />
                  </Button>
                  <Img
                    className="h-5 w-5"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Img
                    className="h-5 w-5"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <Img
                    className="h-5 rounded w-5"
                    src="images/img_iconstypeunde.svg"
                    alt="IconsTypeunde"
                  />
                </div>
              </div>
              <Button
                className="flex h-7 items-center justify-center ml-7 sm:ml-[0] rounded w-7"
                color="gray_50_04"
                size="sm"
              >
                <Img className="h-5" src="images/img_link.svg" alt="link" />
              </Button>
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 ml-6 sm:ml-[0] w-[46%] sm:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-50_04 flex flex-col items-center justify-start p-1 rounded w-full">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_volume_20X20.svg"
                      alt="volume One"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_user_20X20.svg"
                      alt="user"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconstypeh3.svg"
                      alt="IconsTypehThree"
                    />
                  </div>
                </div>
                <div className="bg-gray-50_04 flex flex-col items-center justify-start p-1 rounded w-full">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_menu_20X20.svg"
                      alt="menu"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_menu_1.svg"
                      alt="menu One"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_menu_2.svg"
                      alt="menu Two"
                    />
                  </div>
                </div>
              </List>
              <div className="bg-gray-50_04 md:h-3.5 h-[27px] ml-6 sm:ml-[0] p-1 relative rounded w-[7%] sm:w-full">
                <Img
                  className="absolute h-3.5 inset-[0] justify-center m-auto w-[72%]"
                  src="images/img_cursor.svg"
                  alt="cursor"
                />
              </div>
            </div>
          </div>
          <div className="md:h-[211px] h-[79px] mb-[132px] ml-[59px] mt-auto w-[14%]">
            <Img
              className="h-[55px] mt-[9px] mx-auto w-[52%]"
              src="images/img_location_55X73.svg"
              alt="location"
            />
            <Img
              className="absolute h-[79px] inset-[0] justify-center m-auto w-full"
              src="images/img_group2_79X142.svg"
              alt="GroupTwo"
            />
          </div>
          <div className="absolute flex flex-col gap-[30px] h-full inset-[0] items-start justify-center m-auto w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start ml-1 md:ml-[0] p-[55px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start mb-[135px] mt-[21px] w-[91%] md:w-full">
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
                    As a candidate for the Webflow Developer position at 02100,
                    I would like to introduce myself as an exceptional designer
                    with a strong background in Webflow, I understand the impact
                    that good design can have. In applying for this position, I
                    am confident due to my recent job and freelance experience,
                    as well as my education.
                    <br />
                    <br />
                    As UI/UX Designer at Unseen Works DMCC, I created
                    innovative, creative, and digital experiences using a
                    variety of software and concepts. An enthusiast of Figma and
                    web design, I excel in both. I&#39;ve always had a keen eye
                    for how things fit together and do not. Other members of the
                    team sought my advice on their designs.
                    <br />
                    <br />
                    I’m applying for this position because I want a career in
                    Webflow, I love how Webflow gave me the ability to bring
                    designs to life. I realize that I don’t have a strong
                    background in Html etc., but I’m willing to learn it to get
                    the position.
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
            <Button
              className="cursor-pointer font-medium min-w-[535px] sm:min-w-full py-[15px] text-base text-center"
              shape="round"
              color="blue_A700"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfEditPage;
