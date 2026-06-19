export const weeklyProgram = {
  name: "weeklyProgram",
  title: "Weekly Program",
  type: "document",
  fields: [
    { name: "name", title: "Program Name", type: "string" },
    { name: "day", title: "Day (e.g. TUESDAY)", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "time", title: "Time (e.g. After Maghrib)", type: "string" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
