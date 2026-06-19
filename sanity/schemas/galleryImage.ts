export const galleryImage = {
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    { name: "caption", title: "Caption", type: "string" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Masjid", value: "Masjid" },
          { title: "Library", value: "Library" },
          { title: "Majalis", value: "Majalis" },
          { title: "Medical", value: "Medical" },
          { title: "Complex", value: "Complex" },
        ],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    },
  ],
};
