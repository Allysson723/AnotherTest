import React from "react";

import { Button, Img, Input, Text } from "components";

const EmailloginPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[83px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_35X162.svg"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Products
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Resouces
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-[5px] text-base text-gray-900"
                size="txtGilroyMedium16Gray900"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
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
        <div className="flex flex-col gap-[29px] items-center justify-start mb-[467px] md:px-5 w-[38%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Sign in to Recharge Direct
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Email
              </Text>
              <Input
                name="Group10198"
                placeholder="Enter Your emai"
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                shape="round"
                size="2xl"
              ></Input>
            </div>
            <div className="flex flex-col gap-[15px] items-end justify-start mt-4 w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start pt-[5px] w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Password
                  </Text>
                </div>
                <Input
                  name="Group10265"
                  placeholder="Enter Your Password"
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid flex rounded-lg w-full"
                  type="password"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] mr-3.5 my-4"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  }
                  shape="round"
                  size="2xl"
                ></Input>
              </div>
              <a href="javascript:" className="text-blue-A700 text-lg">
                <Text size="txtGilroyMedium18BlueA700">Forgot Password?</Text>
              </a>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[512px] sm:min-w-full mt-6 py-[17px] text-base text-center"
              shape="round"
              color="blue_A700"
            >
              Submit
            </Button>
            <Text
              className="mt-[31px] text-blue_gray-900 text-lg"
              size="txtGilroyMedium18"
            >
              <span className="text-colors font-gilroy text-left font-medium">
                <>If you don&#39;t an account you can </>
              </span>
              <span className="text-colors1 font-gilroy text-left font-semibold">
                Register here!
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailloginPage;
