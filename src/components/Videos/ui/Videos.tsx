import { VideoItem } from "@src/components/Videos/ui/VideoItem/VideoItem";

export const Videos = () => {
  console.log(Array(20));

  return (
    <main className="md:ml-24 xl:ml-64 pt-32 px-5 pb-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl m-auto">
        {Array.from(Array(20).keys()).map((num) => (
          <VideoItem key={num} index={num} />
        ))}
      </div>
    </main>
  );
};
