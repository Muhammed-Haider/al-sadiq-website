import { client } from "./client";

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    isLive,
    liveStreamUrl,
    youtubeChannelUrl,
    phone,
    email,
    address,
    whatsappNumber,
    bankTitle,
    bankName,
    bankAccountNo,
    bankIban,
    facebookUrl,
    instagramUrl,
  }`);
}

export async function getUpcomingEvent() {
  return client.fetch(`*[_type == "event"] | order(date asc) [0]{
    _id,
    islamicMonth,
    islamicDay,
    islamicDayName,
    label,
    title,
    description,
    speaker,
    time,
    location,
  }`);
}

export async function getWeeklyPrograms() {
  return client.fetch(`*[_type == "weeklyProgram"] | order(order asc){
    _id,
    day,
    name,
    description,
    time,
  }`);
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc){
    _id,
    name,
    slug,
    iconName,
    shortDescription,
  }`);
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      iconName,
      urduName,
      description,
      features,
      keyFacts[]{label, value},
      ctaTitle,
      ctaDescription,
      gallery[]{
        _key,
        asset->{url, metadata{dimensions}},
        alt,
      },
    }`,
    { slug }
  );
}

export async function getAllServiceSlugs() {
  return client.fetch(`*[_type == "service"]{ "slug": slug.current }`);
}

export async function getLatestVideos(limit = 6) {
  return client.fetch(
    `*[_type == "video"] | order(_createdAt desc) [0...$limit]{
      _id,
      title,
      youtubeId,
      duration,
      speaker,
      viewCount,
      publishedAt,
    }`,
    { limit: limit - 1 }
  );
}

export async function getGalleryImages() {
  return client.fetch(`*[_type == "galleryImage"] | order(_createdAt desc){
    _id,
    caption,
    category,
    image{
      asset->{url, metadata{dimensions}},
      alt,
    },
  }`);
}

export async function getDonationCategories() {
  return client.fetch(`*[_type == "donationCategory"] | order(order asc){
    _id,
    name,
    description,
    iconName,
  }`);
}
