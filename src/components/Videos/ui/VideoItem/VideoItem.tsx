import { VideoThumbnail } from "./VideoThumbnail";
import { VideoInfo } from "./VideoInfo";

interface IVideoItemProps {
  index: number;
}

export const VideoItem = ({ index }: IVideoItemProps) => {
  return (
    <a href="#" className="mb-7 group">
      <VideoThumbnail index={index} />
      <VideoInfo index={index} />
    </a>
  );
};
