import {
  ComponentsSection,
  ContributorsSection,
  DarkModeSection,
  FeaturedSection,
  FigmaSection,
  HeroSection,
  HomeNavbar,
  ReactSection,
  SocialProofSection,
  TailwindSection,
} from "~/components/homepage";
import { MainFooter } from "~/components/main-footer";

export default function HomePage() {
  return (
    <div className="relative">
      {/* <Banner /> */}
      <HomeNavbar />
      <main className="min-w-0 flex-auto divide-y dark:divide-gray-700">
        <HeroSection />
        <FeaturedSection />
        <ComponentsSection />
        <ReactSection />
        <DarkModeSection />
        <TailwindSection />
        <SocialProofSection />
        <FigmaSection />
        <ContributorsSection />
      </main>
      <MainFooter />
    </div>
  );
}
