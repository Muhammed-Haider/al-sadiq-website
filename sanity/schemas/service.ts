export const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    },
    { name: "urduName", title: "Urdu Name", type: "string" },
    { name: "iconName", title: "Icon Name (Lucide icon)", type: "string" },
    { name: "shortDescription", title: "Short Description (card)", type: "text" },
    { name: "description", title: "Full Description", type: "array", of: [{ type: "block" }] },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "keyFacts",
      title: "Key Facts (sidebar)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
    },
    { name: "ctaTitle", title: "CTA Title", type: "string" },
    { name: "ctaDescription", title: "CTA Description", type: "string" },
    {
      name: "gallery",
      title: "Photo Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
      ],
    },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
