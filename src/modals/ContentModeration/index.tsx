import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const ContentModerationModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/4"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-6 items-start justify-end p-6 md:px-5 rounded-md w-full">
          <Text
            className="mt-[7px] text-blue_gray-900 text-lg"
            size="txtGilroySemiBold18"
          >
            Why Are You flagging This?
          </Text>
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex flex-col gap-7 items-center justify-start w-full">
              <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="mt-1 text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    Off-Topic
                  </Text>
                  <div className="bg-blue-A700 flex flex-col h-6 items-center justify-start p-1.5 rounded-[50%] w-6">
                    <div className="bg-white-A700 h-3 rounded-[50%] w-3"></div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between rounded-[12.5px] w-full">
                  <Text
                    className="mt-1 text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    Inappropriate
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-200 border-solid h-6 rounded-[50%] w-6"></div>
                </div>
                <div className="flex flex-row items-start justify-between rounded-[12px] w-full">
                  <Text
                    className="mt-1 text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    Spam
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-200 border-solid h-6 rounded-[50%] w-6"></div>
                </div>
                <div className="flex flex-row items-start justify-between rounded-[12.5px] w-full">
                  <Text
                    className="mt-1 text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    Notify Space Administration
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-200 border-solid h-6 rounded-[50%] w-6"></div>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700"
                  size="txtGilroyMedium16Bluegray700"
                >
                  Comments
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-[35px] justify-end p-[7px] rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[9px] mr-[68px] mt-1.5 rounded-[8.25px]">
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      Say something about this post...
                    </Text>
                  </div>
                  <Img
                    className="h-4 md:ml-[0] ml-[268px] w-4"
                    src="images/img_basetextarea.svg"
                    alt="Group216"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-between w-full">
              <Button
                className="common-pointer cursor-pointer font-medium h-[50px] py-[17px] text-base text-center w-36"
                onClick={props.onRequestClose}
                shape="round"
                color="blue_A700"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer font-medium py-[17px] text-base text-center w-36"
                shape="round"
                color="blue_A700"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ContentModerationModal;
