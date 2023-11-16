import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, List, Text } from "components";

const DocumentDistributionModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[22%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[37px] items-start justify-end p-6 md:px-5 rounded-md w-full">
          <Text
            className="mt-[5px] text-blue_gray-900 text-lg"
            size="txtGilroySemiBold18"
          >
            Close Your Content To:
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row items-start justify-between my-0 w-full">
                <div className="flex flex-col items-center justify-start mt-[3px]">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtGilroyMedium16Bluegray900"
                  >
                    Site 1
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_share.svg"
                  alt="share"
                />
              </div>
              <div className="flex flex-1 flex-row items-start justify-between my-0 w-full">
                <div className="flex flex-col items-center justify-start mt-[3px]">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtGilroyMedium16Bluegray900"
                  >
                    Site 2
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_share.svg"
                  alt="share One"
                />
              </div>
              <div className="flex flex-1 flex-row items-start justify-between my-0 w-full">
                <div className="flex flex-col items-center justify-start mt-[3px]">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtGilroyMedium16Bluegray900"
                  >
                    Site 3
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_share.svg"
                  alt="share Two"
                />
              </div>
              <div className="flex flex-1 flex-row items-start justify-between my-0 w-full">
                <div className="flex flex-col items-center justify-start mt-[3px]">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtGilroyMedium16Bluegray900"
                  >
                    Site 4
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_share.svg"
                  alt="share Three"
                />
              </div>
            </List>
            <Button
              className="common-pointer cursor-pointer font-medium h-[50px] py-[17px] text-base text-center w-[266px]"
              onClick={props.onRequestClose}
              shape="round"
              color="blue_A700"
              variant="outline"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DocumentDistributionModal;
