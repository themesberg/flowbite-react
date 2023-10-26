import { Banner } from './components/banner';
import {
  ComponentsSection,
  ContributorsSection,
  DarkModeSection,
  FeaturedSection,
  FigmaSection,
  HeroSection,
  HomeNavbar,
  MainFooter,
  ReactSection,
  SocialProofSection,
  TailwindSection,
} from './components/homepage';

export default function HomePageContent() {
  return (
    <div className="relative bg-white text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-400">
      <Banner />
      <HomeNavbar />
      <div className="lg:flex">
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
      </div>
      <MainFooter />
    </div>
  );
}
