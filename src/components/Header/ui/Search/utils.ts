export const keywords = [
  "new york giants",
  "new york alicia keys",
  "new york giants vs washington football",
  "new york",
  "new york song",
  "new york new york frank sinatra",
  "new york jets",
  "new york city",
  "new york giants live",
  "new york state of mind",
  "new york giants vs washington football live",
  "new york giants injury",
  "new york giants live stream",
  "new york accent",
];

export const changeSelected = (
  action: "up" | "down",
  prev: number | null,
  results: string[],
) => {
  if (action === "down") {
    if (prev === null) {
      return 0;
    } else if (prev >= results.length - 1) {
      return null;
    } else {
      return prev + 1;
    }
  } else if (action === "up") {
    if (prev === null) {
      return results.length - 1;
    } else if (prev <= 0) {
      return null;
    } else {
      return prev - 1;
    }
  } else {
    return null;
  }
};
