export const event = {
  name: "event",
  title: "Upcoming Event",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "islamicMonth", title: "Islamic Month (e.g. RAJAB)", type: "string" },
    { name: "islamicDay", title: "Islamic Day (e.g. 13)", type: "string" },
    { name: "islamicDayName", title: "Day Name (e.g. FRIDAY)", type: "string" },
    { name: "label", title: "Label (e.g. WILADAT IMAM ALI A.S.)", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "speaker", title: "Speaker", type: "string" },
    { name: "time", title: "Time (e.g. After Maghrib Prayers)", type: "string" },
    { name: "location", title: "Location (e.g. Main Imambargah)", type: "string" },
    { name: "date", title: "Date (for sorting)", type: "date" },
  ],
};
