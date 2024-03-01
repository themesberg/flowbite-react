import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Guide {
  name: string;
  slug: string;
  logo: string;
  /** Invert colors on dark mode */
  invert?: boolean;
}

const GUIDES: Guide[] = [
  { name: "Next.js", slug: "/docs/guides/next-js", logo: "next-js.svg" },
  { name: "Remix", slug: "/docs/guides/remix", logo: "remix.svg", invert: true },
  { name: "Astro", slug: "/docs/guides/astro", logo: "astro.svg", invert: true },
  { name: "Gatsby", slug: "/docs/guides/gatsby", logo: "gatsby.svg" },
  { name: "RedwoodJS", slug: "/docs/guides/redwood-js", logo: "redwood-js.svg" },
  { name: "Laravel", slug: "/docs/guides/laravel", logo: "laravel.svg" },
  { name: "Vite", slug: "/docs/guides/vite", logo: "vite.svg" },
  { name: "Parcel", slug: "/docs/guides/parcel", logo: "parcel.svg" },
  { name: "Create React App", slug: "/docs/guides/create-react-app", logo: "create-react-app.svg" },
];

export function IntegrationGuides() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
      {GUIDES.map((card) => (
        <GuideCard key={card.name} {...card} />
      ))}
    </div>
  );
}

function GuideCard({ name, slug, logo, invert }: Guide) {
  return (
    <Link
      href={slug}
      className="flex h-40 flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 text-center shadow-sm hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:hover:shadow-lg-light"
    >
      <Image src={`/logos/${logo}`} alt={name} width={64} height={64} className={twMerge(invert && "dark:invert")} />
      <span className="font-medium text-gray-800 dark:text-gray-300">{name}</span>
    </Link>
  );
}
