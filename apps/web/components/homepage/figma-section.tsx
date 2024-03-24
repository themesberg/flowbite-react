import Image from "next/image";
import type { FC } from "react";

export const FigmaSection: FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-8xl px-4 py-8 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-start justify-between gap-24 py-1 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <h2 className="text-3xl font-extrabold leading-none text-gray-900 lg:text-4xl dark:text-white">
                Design with Figma
              </h2>
              <p className="text-lg">
                Get started with the most popular and definitive design system built in Figma and used by thousands of
                designers and agencies that is compatible across multiple frameworks in the Flowbite ecosystem including
                React, Vue, Svelte, and Flowbite.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="self-stretch">Check out the following resources to learn more about Flowbite Figma:</p>
              <div className="isolate flex flex-col items-start gap-4 self-stretch">
                <a
                  href="https://www.figma.com/file/xYaJr6UvThCW2LM2RjLeJf/flowbite-pro-figma-2.6.0?type=design&node-id=18-0&t=jKFrn2Dz5D8jhk7d-0"
                  className="inline-flex max-w-lg items-center justify-start gap-5 self-stretch rounded-lg border border-gray-300 bg-white px-4 py-3.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 sm:gap-7 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
                  Preview in Figma
                  <div className="ml-auto hidden sm:block">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.293 0.792787C10.4805 0.605316 10.7348 0.5 11 0.5C11.2652 0.5 11.5195 0.605316 11.707 0.792787L15.707 4.79279C15.8945 4.98031 15.9998 5.23462 15.9998 5.49979C15.9998 5.76495 15.8945 6.01926 15.707 6.20679L11.707 10.2068C11.5184 10.3889 11.2658 10.4897 11.0036 10.4875C10.7414 10.4852 10.4906 10.38 10.3052 10.1946C10.1198 10.0092 10.0146 9.75838 10.0123 9.49619C10.01 9.23399 10.1108 8.98139 10.293 8.79279L12.586 6.49979H1C0.734784 6.49979 0.48043 6.39443 0.292893 6.20689C0.105357 6.01936 0 5.765 0 5.49979C0 5.23457 0.105357 4.98022 0.292893 4.79268C0.48043 4.60514 0.734784 4.49979 1 4.49979H12.586L10.293 2.20679C10.1055 2.01926 10.0002 1.76495 10.0002 1.49979C10.0002 1.23462 10.1055 0.980314 10.293 0.792787Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://flowbite.com/figma/"
                  className="inline-flex max-w-lg items-center justify-start gap-4 self-stretch rounded-lg border border-gray-300 bg-white px-4 py-3.5 text-center text-base font-medium text-gray-900 placeholder:py-3.5 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 sm:gap-6 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.3894 10.6025C18.3338 10.9854 18.0814 11.5055 17.7918 11.9577C17.4264 12.5282 16.8465 12.9279 16.1829 13.0666L13.2597 13.6779C12.7898 13.7762 12.3638 14.0221 12.0439 14.3796L10.1272 16.5221C9.76692 16.9248 9.51515 16.8288 9.51515 16.2887C9.51078 16.3087 8.56386 18.7508 11.0733 20.1982C12.0375 20.7544 13.4255 20.5545 14.3897 19.9984L19.4986 17.0516C21.4093 15.9495 22.7583 14.0851 23.2066 11.927C23.2244 11.8417 23.2381 11.756 23.2529 11.6704L18.3894 10.6025Z"
                      fill="url(#paint0_linear_18_290714)"
                    />
                    <path
                      d="M17.0646 7.65894C18.0288 8.21509 18.4228 9.0431 18.4228 10.1554C18.4228 10.3064 18.4109 10.4556 18.3896 10.6025L20.4481 11.4868L23.253 11.6703C23.6122 9.59171 22.9083 7.45214 21.6465 5.75147C20.6969 4.47163 19.475 3.36098 18.0061 2.51366C16.8128 1.82537 15.5727 1.37188 14.3269 1.12305L12.927 2.9358L12.4849 5.01732L17.0646 7.65894Z"
                      fill="url(#paint1_linear_18_290714)"
                    />
                    <path
                      d="M0.587514 9.18436C0.586991 9.186 0.588441 9.18648 0.588987 9.18484C0.697004 8.86086 0.832451 8.49941 1.00155 8.11327C1.88482 6.09623 3.58696 4.75097 5.681 4.06507C7.77504 3.37918 10.0615 3.6196 11.9699 4.72042L12.4847 5.01734L14.3267 1.12307C8.46803 -0.0470653 2.48028 3.39491 0.594963 9.16179C0.594062 9.16455 0.590785 9.17418 0.587514 9.18436Z"
                      fill="url(#paint2_linear_18_290714)"
                    />
                    <path
                      d="M14.1901 19.9986C13.2259 20.5547 12.0379 20.5547 11.0737 19.9986C10.9428 19.9231 10.8194 19.8382 10.7028 19.7463L9.00699 20.9121L7.54541 23.274C9.16769 24.624 11.2743 25.058 13.3794 24.8166C14.9636 24.635 16.5373 24.1331 18.0063 23.2858C19.1996 22.5975 20.2127 21.7514 21.0514 20.7979L20.1799 18.6804L18.7698 17.3569L14.1901 19.9986Z"
                      fill="url(#paint3_linear_18_290714)"
                    />
                    <path
                      d="M10.7025 19.7465C9.95964 19.1613 9.5153 18.2638 9.5153 17.3025V17.2066V9.20019C9.5153 8.7474 9.64871 8.67045 10.0412 8.89685C9.43669 8.54816 8.04014 7.35113 6.31582 8.34573C5.35162 8.90189 4.55762 10.1295 4.55762 11.2419V17.1355C4.55762 19.3396 5.69924 21.6388 7.3458 23.1058C7.41093 23.1639 7.47835 23.2185 7.54517 23.2742L10.7025 19.7465Z"
                      fill="url(#paint4_linear_18_290714)"
                    />
                    <path
                      d="M20.9327 4.87998C20.9316 4.8787 20.9304 4.87973 20.9316 4.88101C21.1584 5.13647 21.404 5.43438 21.6542 5.77375C22.961 7.54649 23.4493 9.79173 22.9969 11.9465C22.5444 14.1012 21.1928 15.9592 19.2843 17.06L18.7695 17.3569L21.051 20.7979C24.9947 16.314 25.0049 9.41233 20.9486 4.89771C20.9466 4.89555 20.9399 4.8879 20.9327 4.87998Z"
                      fill="url(#paint5_linear_18_290714)"
                    />
                    <path
                      d="M4.75766 11.2419C4.75765 10.1296 5.35163 9.10173 6.31585 8.54558C6.44673 8.47008 6.582 8.40577 6.72002 8.35075L6.55728 6.30064L5.41396 3.95508C3.43253 4.68365 1.82978 6.18936 0.986459 8.13143C0.351823 9.59293 7.344e-06 11.2054 0 12.9001C0 14.2766 0.226912 15.5763 0.634149 16.7786L2.90543 17.0834L4.75766 16.5251V11.2419Z"
                      fill="url(#paint6_linear_18_290714)"
                    />
                    <path
                      d="M6.72012 8.35051C7.59881 8.00035 8.599 8.06467 9.43231 8.54533L9.51542 8.59327L16.187 12.4414C16.655 12.7114 16.6124 12.977 16.0835 13.0876L16.4683 13.0071C16.9748 12.9012 17.4374 12.6424 17.7913 12.2653C18.3996 11.6169 18.6229 10.8345 18.6229 10.1556C18.6229 9.04325 18.029 8.01543 17.0647 7.45927L11.9558 4.51244C10.0452 3.41038 7.7546 3.17538 5.65967 3.8665C5.57679 3.89383 5.49567 3.92483 5.41406 3.95483L6.72012 8.35051Z"
                      fill="url(#paint7_linear_18_290714)"
                    />
                    <path
                      d="M14.4918 24.635C14.4935 24.6346 14.4931 24.6331 14.4915 24.6335C14.1566 24.702 13.7756 24.7656 13.3563 24.8123C11.1662 25.0566 8.97576 24.3565 7.33416 22.8876C5.69258 21.4188 4.75779 19.3204 4.75779 17.1188L4.75778 16.5249L0.634277 16.7784C2.54929 22.4324 8.52683 25.8921 14.4685 24.6398C14.4713 24.6392 14.4813 24.6373 14.4918 24.635Z"
                      fill="url(#paint8_linear_18_290714)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_18_290714"
                        x1="15.0448"
                        y1="18.723"
                        x2="17.4055"
                        y2="10.5006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1724C9" />
                        <stop offset="1" stopColor="#1C64F2" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_18_290714"
                        x1="20.482"
                        y1="8.69573"
                        x2="14.2722"
                        y2="2.50785"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1C64F2" />
                        <stop offset="1" stopColor="#0092FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_18_290714"
                        x1="12.1232"
                        y1="4.66137"
                        x2="2.75555"
                        y2="5.25331"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0092FF" />
                        <stop offset="1" stopColor="#45B2FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_18_290714"
                        x1="11.49"
                        y1="22.3927"
                        x2="19.9027"
                        y2="20.1226"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1C64F2" />
                        <stop offset="1" stopColor="#0092FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_18_290714"
                        x1="5.45155"
                        y1="12.6579"
                        x2="11.4243"
                        y2="18.8469"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1724C9" />
                        <stop offset="1" stopColor="#1C64F2" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_18_290714"
                        x1="19.0877"
                        y1="17.1224"
                        x2="23.2551"
                        y2="8.72159"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0092FF" />
                        <stop offset="1" stopColor="#45B2FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_18_290714"
                        x1="4.0229"
                        y1="7.74412"
                        x2="1.7929"
                        y2="16.1258"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1C64F2" />
                        <stop offset="1" stopColor="#0092FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_18_290714"
                        x1="15.4074"
                        y1="7.34521"
                        x2="7.25835"
                        y2="9.37416"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1724C9" />
                        <stop offset="1" stopColor="#1C64F2" />
                      </linearGradient>
                      <linearGradient
                        id="paint8_linear_18_290714"
                        x1="4.80519"
                        y1="16.9132"
                        x2="9.99951"
                        y2="24.7267"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0092FF" />
                        <stop offset="1" stopColor="#45B2FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Learn more
                  <div className="ml-auto hidden sm:block">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.293 0.792787C10.4805 0.605316 10.7348 0.5 11 0.5C11.2652 0.5 11.5195 0.605316 11.707 0.792787L15.707 4.79279C15.8945 4.98031 15.9998 5.23462 15.9998 5.49979C15.9998 5.76495 15.8945 6.01926 15.707 6.20679L11.707 10.2068C11.5184 10.3889 11.2658 10.4897 11.0036 10.4875C10.7414 10.4852 10.4906 10.38 10.3052 10.1946C10.1198 10.0092 10.0146 9.75838 10.0123 9.49619C10.01 9.23399 10.1108 8.98139 10.293 8.79279L12.586 6.49979H1C0.734784 6.49979 0.48043 6.39443 0.292893 6.20689C0.105357 6.01936 0 5.765 0 5.49979C0 5.23457 0.105357 4.98022 0.292893 4.79268C0.48043 4.60514 0.734784 4.49979 1 4.49979H12.586L10.293 2.20679C10.1055 2.01926 10.0002 1.76495 10.0002 1.49979C10.0002 1.23462 10.1055 0.980314 10.293 0.792787Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden h-full flex-col items-center justify-center lg:flex">
            <div className="relative rounded-xl dark:hidden">
              <Image
                src="/images/feature-sections/flowbite-react-figma.png"
                className="w-full"
                alt="Flowbite Figma Design System mockup"
                width={592}
                height={364}
              />
            </div>
            <div className="relative hidden dark:block">
              <Image
                src="/images/feature-sections/flowbite-react-figma-dark.png"
                className="w-full rounded-xl"
                alt="Flowbite Figma Design System mockup (dark mode)"
                width={592}
                height={364}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
