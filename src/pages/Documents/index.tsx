import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DocumentsPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-[366px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_12.svg"
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
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1268px] mx-auto pt-[9px] md:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Folders
            </Text>
            <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded-md w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_folder.svg"
                  alt="folder"
                />
                <Text
                  className="mt-[7px] text-blue_gray-400 text-xl"
                  size="txtGilroyMedium20"
                >
                  Ui/Ux Designer
                </Text>
              </div>
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded-md w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_folder.svg"
                  alt="folder One"
                />
                <Text
                  className="mt-[7px] text-blue_gray-400 text-xl"
                  size="txtGilroyMedium20"
                >
                  Frontend Developer
                </Text>
              </div>
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded-md w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_folder.svg"
                  alt="folder Two"
                />
                <Text
                  className="mt-[7px] text-blue_gray-400 text-xl"
                  size="txtGilroyMedium20"
                >
                  Ui/Ux Designer
                </Text>
              </div>
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded-md w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_folder.svg"
                  alt="folder Three"
                />
                <Text
                  className="mt-[7px] text-blue_gray-400 text-xl"
                  size="txtGilroyMedium20"
                >
                  PHP Developer
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Files
            </Text>
            <List
              className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-1 flex-col gap-4 items-center justify-start pb-4 rounded-md w-full">
                <div className="border border-blue_gray-400 border-solid h-[220px] md:h-[70px] p-[74px] md:px-10 sm:px-5 relative w-full">
                  <Img
                    className="absolute h-[70px] inset-[0] justify-center m-auto w-[70px]"
                    src="images/img_file_70X70.svg"
                    alt="file"
                  />
                </div>
                <div className="flex flex-row gap-4 items-start justify-start pr-1 pt-1 w-[90%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_file_70X70.svg"
                    alt="file One"
                  />
                  <Text
                    className="mt-[3px] text-blue_gray-400 text-xl"
                    size="txtGilroyMedium20"
                  >
                    File-one.pdf
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-1 flex-col gap-4 items-center justify-start pb-4 rounded-md w-full">
                <div className="border border-blue_gray-400 border-solid h-[220px] md:h-[70px] p-[74px] md:px-10 sm:px-5 relative w-full">
                  <Img
                    className="absolute h-[70px] inset-[0] justify-center m-auto w-[70px]"
                    src="images/img_file_70X70.svg"
                    alt="file One"
                  />
                </div>
                <div className="flex flex-row gap-4 items-start justify-start pr-1 pt-1 w-[90%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_file_70X70.svg"
                    alt="file One One"
                  />
                  <Text
                    className="mt-[3px] text-blue_gray-400 text-xl"
                    size="txtGilroyMedium20"
                  >
                    File-two.pdf
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-1 flex-col gap-4 items-center justify-start pb-4 rounded-md w-full">
                <div className="border border-blue_gray-400 border-solid h-[220px] md:h-[70px] p-[74px] md:px-10 sm:px-5 relative w-full">
                  <Img
                    className="absolute h-[70px] inset-[0] justify-center m-auto w-[70px]"
                    src="images/img_file_70X70.svg"
                    alt="file Two"
                  />
                </div>
                <div className="flex flex-row gap-4 items-start justify-start pr-1 pt-1 w-[90%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_file_70X70.svg"
                    alt="file One Two"
                  />
                  <Text
                    className="mt-[3px] text-blue_gray-400 text-xl"
                    size="txtGilroyMedium20"
                  >
                    File-three.pdf
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-1 flex-col gap-4 items-center justify-start pb-4 rounded-md w-full">
                <div className="border border-blue_gray-400 border-solid h-[220px] md:h-[70px] p-[74px] md:px-10 sm:px-5 relative w-full">
                  <Img
                    className="absolute h-[70px] inset-[0] justify-center m-auto w-[70px]"
                    src="images/img_file_70X70.svg"
                    alt="file Three"
                  />
                </div>
                <div className="flex flex-row gap-4 items-start justify-start pr-1 pt-1 w-[90%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_file_70X70.svg"
                    alt="file One Three"
                  />
                  <Text
                    className="mt-[3px] text-blue_gray-400 text-xl"
                    size="txtGilroyMedium20"
                  >
                    File-foure.pdf
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentsPage;
