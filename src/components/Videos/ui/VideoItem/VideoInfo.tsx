import { FC, memo } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { Dropdown } from "./Dropdown";

interface IVideoInfoProps {
  index: number;
}

export const VideoInfo: FC<IVideoInfoProps> = memo(({ index }) => {
  const dayPlural = index + 1 === 1 ? "day" : "days";
  const summary = `${index + 1}K views · ${index + 1} ${dayPlural} ago`;

  return (
    <div className="flex items-start mt-3 w-full">
      <a href="#">
        <img
          src={`https://loremflickr.com/100/100?avatar=${index}`}
          className="mr-3 rounded-full w-9 h-9"
          alt=""
        />
      </a>
      <div className="text-sm">
        <a href="#" className="font-semibold text-gray-800">
          Video title {index + 1}
        </a>
        <div className="mt-1 flex items-center">
          <span>Channel name</span>
          <BaseIcon icon="checkCircle" className="w-3.5 h-3.5 ml-1" />
        </div>
        <div>{summary}</div>
      </div>
      <Dropdown index={index} />
    </div>
  );
});

VideoInfo.displayName = "VideoInfo";
