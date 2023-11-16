import React from "react";
import { default as ModalProvider } from "react-modal";

import { Switch, Text } from "components";

const AudioEditorModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[30%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-4 items-center justify-end p-6 md:px-5 rounded-lg w-full">
          <Text
            className="mt-[7px] text-blue_gray-900 text-lg"
            size="txtGilroySemiBold18"
          >
            Sound Settings
          </Text>
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="flex flex-row gap-9 items-center justify-between pt-1 w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start">
                <Text
                  className="text-base text-black-900_01"
                  size="txtGilroySemiBold16Black90001"
                >
                  Sounds
                </Text>
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtGilroyMedium14"
                >
                  Turn sound on/off according to your preference
                </Text>
              </div>
              <Switch
                onColor="#0061ff"
                offColor="#eaecf0"
                onHandleColor="#f9fbff"
                offHandleColor="#f9fbff"
                value={true}
                className="w-[12%]"
              />
            </div>
            <div className="flex flex-row items-center justify-between pt-[5px] w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start">
                <Text
                  className="text-base text-black-900_01"
                  size="txtGilroySemiBold16Black90001"
                >
                  App Sounds
                </Text>
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtGilroyMedium14"
                >
                  App sounds for notifications
                </Text>
              </div>
              <Switch
                onColor="#0061ff"
                offColor="#eaecf0"
                onHandleColor="#f9fbff"
                offHandleColor="#f9fbff"
                value={true}
                className="w-[12%]"
              />
            </div>
            <div className="flex flex-row gap-9 items-center justify-between pt-[5px] w-full">
              <div className="flex flex-col gap-3 items-start justify-start">
                <Text
                  className="text-base text-black-900_01"
                  size="txtGilroySemiBold16Black90001"
                >
                  App Sounds
                </Text>
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtGilroyMedium14"
                >
                  Turn sound on/off according to your preference
                </Text>
              </div>
              <Switch
                onColor="#0061ff"
                offColor="#eaecf0"
                onHandleColor="#f9fbff"
                offHandleColor="#f9fbff"
                value={false}
                className="w-[12%]"
              />
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default AudioEditorModal;
