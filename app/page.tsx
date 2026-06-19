import Hero from "@/components/home/Hero";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import DiamondDivider from "@/components/ui/DiamondDivider";
import WeeklyPrograms from "@/components/home/WeeklyPrograms";
import ServicesGrid from "@/components/home/ServicesGrid";
import LatestVideos from "@/components/home/LatestVideos";
import DonationAppeal from "@/components/home/DonationAppeal";
import { getUpcomingEvent, getWeeklyPrograms, getServices } from "@/sanity/queries";
import { fetchLatestVideos } from "@/lib/youtube";

export const revalidate = 300;

export default async function HomePage() {
  const [event, programs, services, videos] = await Promise.all([
    getUpcomingEvent().catch(() => null),
    getWeeklyPrograms().catch(() => []),
    getServices().catch(() => []),
    fetchLatestVideos(3),
  ]);

  return (
    <>
      <Hero />
      <UpcomingEvent event={event} />
      <DiamondDivider />
      <WeeklyPrograms programs={programs} />
      <ServicesGrid services={services} />
      <LatestVideos videos={videos} />
      <DonationAppeal />
    </>
  );
}
