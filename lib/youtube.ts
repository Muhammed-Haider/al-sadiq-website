export const CHANNEL_ID = "UCL_1RhEhP_CeeHd_d4aj8qg";
export const CHANNEL_URL = `https://www.youtube.com/channel/${CHANNEL_ID}`;
export const CHANNEL_SUBSCRIBE_URL = `https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`;
export const LIVE_STREAM_URL = `https://www.youtube.com/channel/${CHANNEL_ID}/live`;
export const RSS_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export interface YouTubeVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  viewCount?: string;
}

export async function fetchLatestVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(RSS_FEED_URL, {
      next: { revalidate: 300 }, // re-fetch every 5 minutes
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const entries = xml.split("<entry>").slice(1);

    return entries.slice(0, limit).map((entry) => {
      const videoId = (entry.match(/<yt:videoId>(.+?)<\/yt:videoId>/) || [])[1] || "";
      const title = (entry.match(/<title>(.+?)<\/title>/) || [])[1] || "";
      const published = (entry.match(/<published>(.+?)<\/published>/) || [])[1] || "";
      const views = (entry.match(/<media:statistics views="(\d+)"/) || [])[1] || "";

      const relativeTime = getRelativeTime(published);
      const viewLabel = views ? formatViews(parseInt(views)) : "";

      return {
        id: videoId,
        title: decodeXmlEntities(title),
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        publishedAt: relativeTime,
        viewCount: viewLabel,
      };
    });
  } catch {
    return [];
  }
}

function decodeXmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k views`;
  return `${n} views`;
}

function getRelativeTime(isoDate: string): string {
  const diff = Date.now() - new Date(isoDate).getTime();
  const mins = Math.floor(diff / 60_000);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months > 1) return `${months} months ago`;
  if (months === 1) return "1 month ago";
  if (weeks > 1) return `${weeks} weeks ago`;
  if (weeks === 1) return "1 week ago";
  if (days > 1) return `${days} days ago`;
  if (days === 1) return "yesterday";
  if (hours > 1) return `${hours} hours ago`;
  return "just now";
}
