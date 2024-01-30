import { FC, memo } from "react";
import { Button } from "./Button";

interface IVideoThumbnailProps {
  index: number;
}

export const VideoThumbnail: FC<IVideoThumbnailProps> = memo(({ index }) => {
  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const h = randomNumber(1, 24);
  const m = randomNumber(0, 59);

  return (
    <div className="relative">
      <a href="#">
        <img
          className="w-full h-full object-cover"
          src={`https://loremflickr.com/500/500?video=${index}`}
          alt=""
        />
      </a>
      <Button label="Смотреть позже" iconName="time" className="top-0" />
      <Button label="Добавить в очередь" iconName="lines" className="top-8" />
      <span className="flex justify-center opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold min-w-10">
        {h}:{m < 10 ? "0" + m : m}
      </span>
    </div>
  );
});

VideoThumbnail.displayName = "VideoThumbnail";
