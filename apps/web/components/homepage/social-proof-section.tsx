import Image from "next/image";
import { fetchSafe } from "~/helpers/http";

async function fetchStargazers(): Promise<string> {
  try {
    const result = await fetchSafe<{ stargazers_count: string }>(
      "https://api.github.com/repos/themesberg/flowbite-react",
    );

    return result.stargazers_count;
  } catch (error) {
    return "";
  }
}

async function fetchNpmDownloads(): Promise<string> {
  try {
    const result = await fetchSafe<{ downloads: string }>(
      "https://api.npmjs.org/downloads/point/2021-01-01:2100-01-01/flowbite-react",
    );

    return result.downloads;
  } catch (error) {
    return "";
  }
}

async function fetchDiscordMembers(): Promise<string> {
  try {
    const result = await fetchSafe<{ approximate_presence_count: string }>(
      "https://discord.com/api/v9/invites/4eeurUVvTy?with_counts=true&with_expiration=true",
    );

    return result.approximate_presence_count;
  } catch (error) {
    return "";
  }
}

const numberWithCommas = (x: string | number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export async function SocialProofSection() {
  const stargazers = numberWithCommas(await fetchStargazers());
  const npmDownloads = numberWithCommas(await fetchNpmDownloads());
  const discordMembers = numberWithCommas(await fetchDiscordMembers());

  return (
    <section>
      <div className="mx-auto max-w-8xl px-4 py-8 lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-20">
          <div className="mb-4 flex w-full flex-col items-start justify-center gap-3 md:gap-5 lg:mb-0">
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <div className="flex flex-col items-start py-2">
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.0255 27.7187V16.6322C21.0255 8.07625 26.622 2.27725 34.5 0.71875L35.9925 3.94525C32.3445 5.32075 30 9.40225 30 12.7188H36V27.7188L21.0255 27.7187ZM0 27.7187V16.6322C0 8.07625 5.622 2.27575 13.5 0.71875L14.994 3.94525C11.3445 5.32075 9 9.40225 9 12.7187L14.9745 12.7187L14.9745 27.7187H0Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </div>
              <div className="flex max-w-2xl flex-col items-start justify-center gap-5 self-stretch pr-8">
                <p className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white">
                  Flowbite provides a robust set of design tokens and components based on the popular Tailwind CSS
                  framework. From the most used UI components like forms and navigation bars to the whole app screens
                  designed both for desktop and mobile, this UI kit provides a solid foundation for any project.
                </p>
                <p className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white">
                  Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS
                  is a huge timesaver!
                </p>
              </div>
              <div className="flex flex-row items-center gap-3.5 self-stretch">
                <Image
                  src="/images/feature-sections/eugene.jpg"
                  className="size-6 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-300"
                  alt="Eugene Fedorenko Avatar"
                  width={24}
                  height={24}
                />
                <div className="flex items-center gap-3">
                  <span className="font-semibold leading-tight text-gray-900 dark:text-white">Eugene Fedorenko</span>
                  <span className="font-semibold leading-tight text-gray-900 dark:text-white">/</span>
                  <span className="text-sm font-normal leading-tight">Lead designer at Wildbit</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6 md:gap-3">
            <div className="flex flex-row items-start gap-2 self-stretch md:justify-between md:gap-2 md:pr-16 lg:justify-end lg:gap-2 lg:pr-0">
              <a
                href="https://github.com/themesberg/flowbite-react"
                className="flex w-full max-w-[272px] flex-col items-start gap-4 rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-50 lg:px-8 lg:py-6 dark:hover:bg-gray-800"
              >
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  data-icon="github"
                  role="img"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">{stargazers}</p>
                  <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Stars on GitHub</p>
                </div>
              </a>
              <a
                href="https://www.npmjs.com/package/flowbite-react"
                className="flex w-full max-w-[272px] flex-col items-start gap-4 rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-50 lg:px-8 lg:py-6 dark:hover:bg-gray-800"
              >
                <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.375 0.0517578H11.625V11.3018H9.375V2.30176H6V11.3018H0.375V0.0517578Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-1 flex flex-col items-start gap-2">
                  <p className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">{npmDownloads}</p>
                  <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Downloads on NPM</p>
                </div>
              </a>
            </div>
            <div className="flex flex-row items-start gap-2 self-stretch md:justify-between md:gap-12 md:pr-16 lg:justify-end lg:gap-2 lg:pr-0">
              <a
                href="https://www.figma.com/community/file/1179442320711977498"
                className="flex w-full max-w-[272px] flex-col items-start gap-4 rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-50 lg:px-8 lg:py-6 dark:hover:bg-gray-800"
              >
                <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_18_290731)">
                    <path
                      d="M4.38242 24.8955C6.80071 24.8955 8.76338 23.1035 8.76338 20.8955V16.8955H4.38242C1.96413 16.8955 0.00146484 18.6875 0.00146484 20.8955C0.00146484 23.1035 1.96413 24.8955 4.38242 24.8955Z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M0.00146484 12.8955C0.00146484 10.6875 1.96413 8.89551 4.38242 8.89551H8.76338V16.8955H4.38242C1.96413 16.8955 0.00146484 15.1035 0.00146484 12.8955Z"
                      fill="#A259FF"
                    />
                    <path
                      d="M0.00195312 4.89551C0.00195312 2.68751 1.96462 0.895508 4.38291 0.895508H8.76387V8.8955H4.38291C1.96462 8.8955 0.00195312 7.1035 0.00195312 4.89551Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M8.76367 0.895508H13.1446C15.5629 0.895508 17.5256 2.68751 17.5256 4.89551C17.5256 7.1035 15.5629 8.8955 13.1446 8.8955H8.76367V0.895508Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M17.5256 12.8955C17.5256 15.1035 15.5629 16.8955 13.1446 16.8955C10.7263 16.8955 8.76367 15.1035 8.76367 12.8955C8.76367 10.6875 10.7263 8.89551 13.1446 8.89551C15.5629 8.89551 17.5256 10.6875 17.5256 12.8955Z"
                      fill="#1ABCFE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_290731">
                      <rect width="17.5273" height="24" fill="white" transform="translate(0 0.895508)" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">5,400</p>
                  <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Figma duplicates</p>
                </div>
              </a>
              <a
                href="https://discord.gg/4eeurUVvTy"
                rel="nofollow"
                className="flex w-full max-w-[272px] flex-col items-start gap-4 rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-50 lg:px-8 lg:py-6 dark:hover:bg-gray-800"
              >
                <svg
                  className="size-6"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="discord"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"
                  />
                </svg>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">{discordMembers}</p>
                  <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Discord members online</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
