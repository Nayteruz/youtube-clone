import { VideoThumbnail } from "./VideoThumbnail";
import { VideoInfo } from "./VideoInfo";
import { memo } from "react";

interface IVideoItemProps {
  index: number;
}

export const VideoItem = memo(({ index }: IVideoItemProps) => {
  return (
    <div className="mb-7 group">
      <VideoThumbnail index={index} />
      <VideoInfo index={index} />
    </div>
  );
});

VideoItem.displayName = "VideoItem";
