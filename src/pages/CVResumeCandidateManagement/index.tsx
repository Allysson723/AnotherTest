import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CVResumeCandidateManagementPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
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
        <div className="flex flex-col items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
              size="txtGilroyMedium24Black90001"
            >
              Candidate Management
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="text-blue-A700 text-lg"
                          size="txtGilroyBold18"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold py-[18px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium py-[17px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                        variant="outline"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive One"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="text-blue-A700 text-lg"
                          size="txtGilroyBold18"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold py-[18px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium py-[17px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                        variant="outline"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive Two"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="text-blue-A700 text-lg"
                          size="txtGilroyBold18"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold py-[18px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium py-[17px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                        variant="outline"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive Three"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="text-blue-A700 text-lg"
                          size="txtGilroyBold18"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold py-[18px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium py-[17px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                        variant="outline"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive Four"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="text-blue-A700 text-lg"
                          size="txtGilroyBold18"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold py-[18px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium py-[17px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                        variant="outline"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive Five"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="text-blue-A700 text-lg"
                          size="txtGilroyBold18"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold py-[18px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium py-[17px] rounded text-base text-center w-[326px]"
                        shape="round"
                        color="blue_A700"
                        variant="outline"
                      >
                        Save
                      </Button>
                    </div>
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

export default CVResumeCandidateManagementPage;
