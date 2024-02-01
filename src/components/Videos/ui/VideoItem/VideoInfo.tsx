import { FC, memo } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { Dropdown } from "./Dropdown";
import { BaseTooltip } from "@src/shared/ui/BaseTooltip";

interface IVideoInfoProps {
  index: number;
}

export const VideoInfo: FC<IVideoInfoProps> = memo(({ index }) => {
  const dayPlural = index + 1 === 1 ? "day" : "days";
  const summary = `${index + 1}K views · ${index + 1} ${dayPlural} ago`;
  const chanelName = `Channel name ${index + 1}`;

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
        <div className="mt-1 flex">
          <BaseTooltip textLabel={chanelName} top={true}>
            <span>{chanelName}</span>
          </BaseTooltip>
          <BaseTooltip textLabel="Verified" top={true}>
            <BaseIcon icon="checkCircle" className="w-3.5 h-3.5 ml-1" />
          </BaseTooltip>
        </div>
        <div>{summary}</div>
      </div>
      <Dropdown />
    </div>
  );
});

VideoInfo.displayName = "VideoInfo";
