import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ActivityFeedPage: React.FC = () => {
  const [group10270value, setGroup10270value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group10392_5.svg"
                alt="Group10392"
              />
              <Input
                name="Group10270"
                placeholder="Search"
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 rounded-lg w-2/5 md:w-full"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
                size="2xl"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
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
              <Img
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-[30px] md:px-5 shadow-bs1 w-[42%] md:w-full">
          <div className="flex flex-row items-start justify-between w-[64%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft_bluegray_900.svg"
              alt="arrowleft"
            />
            <Text
              className="mt-0.5 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroySemiBold24"
            >
              Activity Feed
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start mt-[42px] w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroyMedium24"
            >
              Today
            </Text>
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg One"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="circle"
                    color="red_400"
                    size="sm"
                  >
                    <Img src="images/img_notification.svg" alt="notification" />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 leading-[29.00px] ml-4 sm:ml-[0] text-blue_gray-900 text-lg w-[54%] sm:w-full"
                  size="txtGilroyMedium18"
                >
                  <span className="text-colors font-gilroy text-left font-semibold">
                    Rose
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    liked a photo
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-semibold">
                    Carmelo’s
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    post.
                  </span>
                  <span className="text-colors4 font-gilroy text-left font-medium">
                    {" "}
                    20 min ago.
                  </span>
                </Text>
                <Img
                  className="sm:flex-1 h-[72px] md:h-auto sm:ml-[0] ml-[114px] object-cover w-[10%] sm:w-full"
                  src="images/img_rectangle14.png"
                  alt="ProfileImgLarg One"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    src="images/img_profileimglarg_6.png"
                    alt="ProfileImgLarg Two"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="circle"
                    color="red_400"
                    size="sm"
                  >
                    <Img
                      src="images/img_notification.svg"
                      alt="notification One"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 leading-[29.00px] ml-4 sm:ml-[0] text-blue_gray-900 text-lg w-[54%] sm:w-full"
                  size="txtGilroyMedium18"
                >
                  <span className="text-colors font-gilroy text-left font-semibold">
                    Benito
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    {" "}
                    liked a photo{" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-semibold">
                    Carmelo’s{" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    post.{" "}
                  </span>
                  <span className="text-colors4 font-gilroy text-left font-medium">
                    50 min ago.
                  </span>
                </Text>
                <Img
                  className="sm:flex-1 h-[72px] md:h-auto sm:ml-[0] ml-[114px] object-cover w-[10%] sm:w-full"
                  src="images/img_rectangle14.png"
                  alt="ProfileImgLarg One One"
                />
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[31px] items-start justify-start mb-[177px] mt-[31px] w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroyMedium24"
            >
              This Month
            </Text>
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    src="images/img_profileimglarg_72X72.png"
                    alt="ProfileImgLarg Three"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="circle"
                    color="blue_A200"
                    size="sm"
                  >
                    <Img src="images/img_videocamera.svg" alt="videocamera" />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 leading-[29.00px] ml-4 sm:ml-[0] text-blue_gray-900 text-lg w-[54%] sm:w-full"
                  size="txtGilroyMedium18"
                >
                  <span className="text-colors font-gilroy text-left font-semibold">
                    Anton
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    {" "}
                    Posted a new video{" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-semibold">
                    “Video Name”
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    .{" "}
                  </span>
                  <span className="text-colors4 font-gilroy text-left font-medium">
                    5w
                  </span>
                </Text>
                <Img
                  className="h-6 sm:ml-[0] ml-[142px] w-6"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    src="images/img_profileimglarg_50X50.png"
                    alt="ProfileImgLarg Four"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="circle"
                    color="blue_A200"
                    size="sm"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      alt="videocamera One"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 leading-[29.00px] ml-4 sm:ml-[0] text-blue_gray-900 text-lg w-[54%] sm:w-full"
                  size="txtGilroyMedium18"
                >
                  <span className="text-colors font-gilroy text-left font-semibold">
                    Kai
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    {" "}
                    Posted a new video{" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-semibold">
                    “Video Name”
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    .{" "}
                  </span>
                  <span className="text-colors4 font-gilroy text-left font-medium">
                    5w
                  </span>
                </Text>
                <Img
                  className="h-6 sm:ml-[0] ml-[142px] w-6"
                  src="images/img_user.svg"
                  alt="user One"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    src="images/img_profileimglarg_6.png"
                    alt="ProfileImgLarg Five"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="circle"
                    color="red_400"
                    size="sm"
                  >
                    <Img
                      src="images/img_notification.svg"
                      alt="notification Two"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 leading-[29.00px] ml-4 sm:ml-[0] text-blue_gray-900 text-lg w-[54%] sm:w-full"
                  size="txtGilroyMedium18"
                >
                  <span className="text-colors font-gilroy text-left font-semibold">
                    Benito
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    {" "}
                    liked a photo{" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-semibold">
                    Carmelo’s{" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    post.{" "}
                  </span>
                  <span className="text-colors4 font-gilroy text-left font-medium">
                    6w.
                  </span>
                </Text>
                <Img
                  className="sm:flex-1 h-[72px] md:h-auto sm:ml-[0] ml-[114px] object-cover w-[10%] sm:w-full"
                  src="images/img_rectangle12.png"
                  alt="ProfileImgLarg One Two"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    src="images/img_profileimglarg_5.png"
                    alt="ProfileImgLarg Six"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="circle"
                    color="blue_A200"
                    size="sm"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      alt="videocamera Two"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 leading-[29.00px] ml-4 sm:ml-[0] text-blue_gray-900 text-lg w-[54%] sm:w-full"
                  size="txtGilroyMedium18"
                >
                  <span className="text-colors font-gilroy text-left font-medium">
                    Marin Posted a new video{" "}
                  </span>
                  <span className="text-colors font-gilroy text-left font-semibold">
                    “Video Name”
                  </span>
                  <span className="text-colors font-gilroy text-left font-medium">
                    .{" "}
                  </span>
                  <span className="text-colors4 font-gilroy text-left font-medium">
                    5w
                  </span>
                </Text>
                <Img
                  className="h-6 sm:ml-[0] ml-[142px] w-6"
                  src="images/img_user.svg"
                  alt="user Two"
                />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityFeedPage;
