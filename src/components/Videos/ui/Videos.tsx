import { VideoItem } from "./VideoItem/VideoItem";
import { memo } from "react";
import { useStory } from "@src/hooks/useStory";

export const Videos = memo(() => {
  const { stateBar } = useStory();
  const isCompact = stateBar.isCompactSidebarOpen ? "xl:ml-24" : "xl:ml-64";

  return (
    <main className={`${isCompact} md:ml-24 pt-32 px-5 pb-5`}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 m-auto">
        {Array.from(Array(20).keys()).map((num) => (
          <VideoItem key={num} index={num} />
        ))}
      </div>
    </main>
  );
});

Videos.displayName = "Videos";
