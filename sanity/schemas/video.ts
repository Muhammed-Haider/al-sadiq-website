export const video = {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "youtubeId", title: "YouTube Video ID", type: "string" },
    { name: "duration", title: "Duration (e.g. 48:12)", type: "string" },
    { name: "speaker", title: "Speaker / Channel", type: "string" },
    { name: "viewCount", title: "View Count (e.g. 12k views)", type: "string" },
    { name: "publishedAt", title: "Published Date", type: "datetime" },
  ],
};
