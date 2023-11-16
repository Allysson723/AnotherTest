import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";

const ContactUsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1266px] mb-[361px] mx-auto md:px-5 w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-[7px]">
                <Img
                  className="h-[35px]"
                  src="images/img_group10392.svg"
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[89%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[46%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[52.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
                  size="txtGilroySemiBold32"
                >
                  Got any quieries? Chat with our team.
                </Text>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-[31px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Address
                  </Text>
                  <Text
                    className="leading-[29.00px] text-blue_gray-700 text-lg w-full"
                    size="txtGilroyMedium18Bluegray700"
                  >
                    4517 Washington Ave. Manchester, Kentucky Thornridge Cir.
                    Syracuse, 39495{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-[26px] w-[39%] md:w-full">
                  <Img
                    className="h-6 mb-0.5 w-6"
                    src="images/img_envelopeoutlin.svg"
                    alt="envelopeOutlin"
                  />
                  <Text
                    className="mt-1 text-blue_gray-700 text-lg"
                    size="txtGilroyMedium18Bluegray700"
                  >
                    contact@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start mt-[26px] w-[33%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-blue_gray-700 text-lg"
                    size="txtGilroyMedium18Bluegray700"
                  >
                    +91 01234567890
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start mt-[26px] w-[29%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_play.svg"
                    alt="play"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] items-center justify-start pt-[3px] w-[46%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18"
                >
                  Mobile Number
                </Text>
                <Input
                  name="Group10198"
                  placeholder="Enter Your Number"
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                  type="number"
                  shape="round"
                  size="2xl"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18"
                >
                  Email
                </Text>
                <Input
                  name="Group10198 One"
                  placeholder="Enter Your Email"
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                  type="email"
                  shape="round"
                  size="2xl"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18"
                >
                  Company name
                </Text>
                <Input
                  name="Group10198 Two"
                  placeholder="Enter Company"
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                  shape="round"
                  size="2xl"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18"
                >
                  Message
                </Text>
                <TextArea
                  className="bg-white-A700 border border-blue_gray-100 border-solid flex mt-1 pb-[35px] pl-4 pt-[22px] rounded-lg w-full"
                  name="Group10199"
                  placeholder="Message.."
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[512px] sm:min-w-full py-[17px] text-base text-center"
                shape="round"
                color="blue_A700"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
