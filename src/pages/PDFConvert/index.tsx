import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PDFConvertPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_26.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
              <div className="flex flex-row gap-3 items-center justify-between pl-[5px] py-[5px] w-[28%] sm:w-full">
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
              <div className="flex flex-row gap-[9px] items-center justify-center ml-6 pl-[5px] py-[5px] w-[28%] sm:w-full">
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
              <Text
                className="ml-8 mt-[11px] text-base text-gray-900"
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
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1119px] mb-[180px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between rounded-md w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Files
            </Text>
            <Input
              name="InputField"
              placeholder="Search File"
              value={inputfieldvalue}
              onChange={(e) => setInputfieldvalue(e)}
              className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid flex sm:flex-1 sm:w-full"
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
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-[48%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[31px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex flex-col gap-6 justify-start mb-2.5 w-[55%] md:w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Convert your files to pdf format
                </Text>
                <div className="flex flex-col gap-3.5 items-center justify-start md:ml-[0] ml-[85px] w-[30%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-end p-[5px] w-full">
                    <Img
                      className="h-[65px] w-[77%]"
                      src="images/img_file_65X52.svg"
                      alt="file"
                    />
                    <div className="flex flex-col gap-3.5 items-center justify-start">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        File.doc
                      </Text>
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtGilroyMedium16"
                      >
                        (100kb)
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[41px] w-[41px]"
                    src="images/img_arrowdown_41X41.svg"
                    alt="arrowdown Two"
                  />
                  <div className="flex flex-col gap-[21px] items-center justify-end p-[5px] w-full">
                    <Img
                      className="h-[65px] w-[77%]"
                      src="images/img_file_65X52.svg"
                      alt="file One"
                    />
                    <div className="flex flex-col gap-[9px] items-center justify-start">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        file.pdf
                      </Text>
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtGilroyMedium16"
                      >
                        (20kb)
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[535px] sm:min-w-full py-[17px] text-base text-center"
              shape="round"
              color="blue_A700"
            >
              Convert
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFConvertPage;
