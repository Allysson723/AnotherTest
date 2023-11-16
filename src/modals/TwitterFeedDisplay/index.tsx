import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const TwitterFeedDisplayModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[26%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-5 items-center justify-end p-6 md:px-5 rounded-md w-full">
          <Text
            className="mt-[7px] text-blue_gray-900 text-lg"
            size="txtGilroySemiBold18"
          >
            Choose Reason For Reporting This Post
          </Text>
          <div className="flex flex-col gap-[29px] items-center justify-start pt-1 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="mt-0.5 text-blue_gray-700 text-lg"
                size="txtGilroyMedium18Bluegray700"
              >
                It Is Spam
              </Text>
              <Button
                className="flex h-5 items-center justify-center mb-1 rounded-[2.5px] w-5"
                color="blue_A700"
                size="xs"
              >
                <Img
                  className="h-4"
                  src="images/img_checkmark_20X20.svg"
                  alt="checkmark"
                />
              </Button>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="mt-0.5 text-blue_gray-700 text-lg"
                size="txtGilroyMedium18Bluegray700"
              >
                It Is Inappropriate
              </Text>
              <div className="bg-white-A700 border-[0.83px] border-blue_gray-50 border-solid h-5 mb-1 rounded-[2.5px] w-5"></div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default TwitterFeedDisplayModal;
