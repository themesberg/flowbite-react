import { createTheme } from "../../helpers/create-theme";

export const defaultMockupTheme = createTheme({
  root: "relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800",
  buttons: {
    action: "absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800",
    volumeUp: "absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800",
    volumeDown: "absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800",
    power: "absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800",
  },
  content: "h-[572px] w-[272px] overflow-hidden rounded-[1.6rem] bg-white dark:bg-gray-800",
});

export const iPhone12MockupTheme = createTheme({
  root: "relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 shadow-xl dark:border-gray-800",
  notch: "absolute left-1/2 top-0 h-[18px] w-[148px] -translate-x-1/2 rounded-b-2xl bg-gray-800",
  buttons: {
    volumeUp: "absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800",
    volumeDown: "absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800",
    power: "absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800",
  },
  content: "h-[572px] w-[272px] overflow-hidden rounded-[1.6rem] bg-white dark:bg-gray-800",
});

export const googlePixelMockupTheme = createTheme({
  root: "relative mx-auto h-[600px] w-[300px] rounded-xl border-[14px] border-gray-800 bg-gray-800 shadow-xl dark:border-gray-800",
  notch: "absolute left-1/2 top-0 h-[18px] w-[148px] -translate-x-1/2 rounded-b-2xl bg-gray-800",
  buttons: {
    action: "absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800",
    volumeUp: "absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800",
    volumeDown: "absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800",
    power: "absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800",
  },
  content: "h-[572px] w-[272px] overflow-hidden rounded-xl bg-white dark:bg-gray-800",
});

export const tabletMockupTheme = createTheme({
  root: "relative mx-auto h-[454px] max-w-[341px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[682px] md:max-w-[512px]",
  buttons: {
    action: "absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800",
    volumeUp: "absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800",
    volumeDown: "absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800",
    power: "absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800",
  },
  content: "h-[426px] overflow-hidden rounded-[1.6rem] bg-white dark:bg-gray-800 md:h-[654px]",
});

export const laptopMockupTheme = createTheme({
  display:
    "relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-8 border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[294px] md:max-w-[512px]",
  base: {
    root: "relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-gray-900 dark:bg-gray-700 md:h-[21px] md:max-w-[597px]",
    inner: "absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]",
  },
  content: "h-[156px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 md:h-[278px]",
});

export const desktopMockupTheme = createTheme({
  display:
    "relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[16px] border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[294px] md:max-w-[512px]",
  bezel:
    "relative mx-auto h-[24px] max-w-[301px] rounded-b-xl bg-gray-900 dark:bg-gray-700 md:h-[42px] md:max-w-[512px]",
  stand: "relative mx-auto h-[55px] max-w-[83px] rounded-b-xl bg-gray-800 md:h-[95px] md:max-w-[142px]",
  content: "h-[140px] overflow-hidden rounded-xl md:h-[262px]",
});

export const smartwatchMockupTheme = createTheme({
  display:
    "relative mx-auto h-[213px] w-[208px] rounded-[2.5rem] border-[10px] border-gray-900 dark:border-gray-800 dark:bg-gray-800",
  buttons: {
    top: "absolute -end-[16px] top-[40px] h-[41px] w-[6px] rounded-e-lg bg-gray-800 dark:bg-gray-800",
    bottom: "absolute -end-[16px] top-[88px] h-[32px] w-[6px] rounded-e-lg bg-gray-800 dark:bg-gray-800",
  },
  band: {
    top: "relative mx-auto h-[63px] max-w-[133px] rounded-t-[2.5rem] bg-gray-800 dark:bg-gray-700",
    bottom: "relative mx-auto h-[63px] max-w-[133px] rounded-b-[2.5rem] bg-gray-800 dark:bg-gray-700",
  },
  content: "h-[193px] w-[188px] overflow-hidden rounded-[2rem]",
});

export const mockupTheme = {
  default: defaultMockupTheme,
  desktop: desktopMockupTheme,
  googlePixel: googlePixelMockupTheme,
  iPhone12: iPhone12MockupTheme,
  laptop: laptopMockupTheme,
  smartwatch: smartwatchMockupTheme,
  tablet: tabletMockupTheme,
};

export type FlowbiteDefaultMockupTheme = typeof defaultMockupTheme;
export type FlowbiteDesktopMockupTheme = typeof desktopMockupTheme;
export type FlowbiteGooglePixelMockupTheme = typeof googlePixelMockupTheme;
export type FlowbiteIPhone12MockupTheme = typeof iPhone12MockupTheme;
export type FlowbiteLaptopMockupTheme = typeof laptopMockupTheme;
export type FlowbiteSmartwatchMockupTheme = typeof smartwatchMockupTheme;
export type FlowbiteTabletMockupTheme = typeof tabletMockupTheme;

export type FlowbiteMockupTheme = typeof mockupTheme;
