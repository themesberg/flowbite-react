import { HomeNavbar } from "~/components/homepage";
import { MainFooter } from "~/components/main-footer";

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <HomeNavbar />
      <div className="mx-auto flex max-w-screen-sm flex-1 flex-col justify-center px-4 py-8 text-center sm:py-16 lg:px-6 xl:px-0">
        <h1 className="mb-4 text-4xl font-extrabold text-primary-600">404 - Page Not Found</h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          Whoops! That page doesn’t exist. But do not fret, check out our other resources to get started.
        </p>
      </div>
      <MainFooter />
    </div>
  );
}
