import { FC } from "react";
import { BaseIcon } from "@src/components/Icons";

interface IVideoInfoProps {
  index: number;
}

export const VideoInfo: FC<IVideoInfoProps> = ({ index }) => {
  const dayPlural = index + 1 === 1 ? "day" : "days";
  const summary = `${index + 1}K views · ${index + 1} ${dayPlural} ago`;

  return (
    <div className="flex items-start mt-3">
      <img
        src={`https://loremflickr.com/100/100?avatar=${index}`}
        className="mr-3 rounded-full w-9 h-9"
        alt=""
      />
      <div className="text-sm">
        <span className="font-semibold text-gray-800">
          Video title {index + 1}
        </span>
        <div className="mt-1 flex items-center">
          <span>Channel name</span>
          <BaseIcon icon="checkCircle" className="w-3.5 h-3.5 ml-1" />
        </div>
        <div>{summary}</div>
      </div>
      <button className="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
        <BaseIcon icon="dotsVertical" className="w-6 h-6" />
      </button>
    </div>
  );
};
