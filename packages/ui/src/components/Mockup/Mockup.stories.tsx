import type { Meta, StoryFn } from "@storybook/react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { getTheme } from "../../theme-store";
import { DefaultMockup } from "./DefaultMockup";
import { DesktopMockup } from "./DesktopMockup";
import { GooglePixelMockup } from "./GooglePixelMockup";
import { IPhone12Mockup } from "./IPhone12Mockup";
import { LaptopMockup } from "./LaptopMockup";
import { SmartwatchMockup } from "./SmartwatchMockup";
import { TabletMockup } from "./TabletMockup";

export default {
  title: "Components/Mockup",
} as Meta;

export const Default: StoryFn = () => (
  <Container>
    <DefaultMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </DefaultMockup>
  </Container>
);

export const IPhone12: StoryFn = () => (
  <Container>
    <IPhone12Mockup>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </IPhone12Mockup>
  </Container>
);

export const GooglePixel: StoryFn = () => (
  <Container>
    <GooglePixelMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </GooglePixelMockup>
  </Container>
);

export const Tablet: StoryFn = () => (
  <Container>
    <TabletMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
        className="h-[426px] dark:hidden md:h-[654px]"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
        className="hidden h-[426px] dark:block md:h-[654px]"
        alt=""
      />
    </TabletMockup>
  </Container>
);

export const Laptop: StoryFn = () => (
  <Container>
    <LaptopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
        className="dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
        className="hidden dark:block"
        alt=""
      />
    </LaptopMockup>
  </Container>
);

export const Desktop: StoryFn = () => (
  <Container>
    <DesktopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
        className="h-[140px] w-full rounded-xl dark:hidden md:h-[262px]"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
        className="hidden h-[140px] w-full rounded-xl dark:block md:h-[262px]"
        alt=""
      />
    </DesktopMockup>
  </Container>
);

export const Smartwatch: StoryFn = () => (
  <Container>
    <SmartwatchMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png"
        className="h-[193px] w-[188px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png"
        className="hidden h-[193px] w-[188px] dark:block"
        alt=""
      />
    </SmartwatchMockup>
  </Container>
);

export const Colors: StoryFn = () => (
  <Container>
    <DefaultMockup
      theme={{
        root: twMerge(getTheme().mockup.default.root, "border-gray-300"),
        buttons: {
          action: twMerge(getTheme().mockup.default.buttons.action, "bg-gray-300"),
          volumeUp: twMerge(getTheme().mockup.default.buttons.volumeUp, "bg-gray-300"),
          volumeDown: twMerge(getTheme().mockup.default.buttons.volumeDown, "bg-gray-300"),
          power: twMerge(getTheme().mockup.default.buttons.power, "bg-gray-300"),
        },
      }}
    >
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </DefaultMockup>
  </Container>
);

function Container(props: ComponentProps<"div">) {
  return <div className="mx-auto max-w-screen-lg" {...props} />;
}
