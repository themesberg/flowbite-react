import type { FC } from 'react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { Button, Spinner } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const ButtonsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default button',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button color="gray">Gray</Button>
          <Button color="dark">Dark</Button>
          <Button color="light">Light</Button>
          <Button color="success">Success</Button>
          <Button color="failure">Failure</Button>
          <Button color="warning">Warning</Button>
          <Button color="purple">Purple</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button pills',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button color="gray" pill>
            Gray
          </Button>
          <Button color="dark" pill>
            Dark
          </Button>
          <Button color="light" pill>
            Light
          </Button>
          <Button color="success" pill>
            Success
          </Button>
          <Button color="failure" pill>
            Failure
          </Button>
          <Button color="warning" pill>
            Warning
          </Button>
          <Button color="purple" pill>
            Purple
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Gradient Monochrome',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button gradientMonochrome="info">Info</Button>
          <Button gradientMonochrome="success">Success</Button>
          <Button gradientMonochrome="cyan">Cyan</Button>
          <Button gradientMonochrome="teal">Teal</Button>
          <Button gradientMonochrome="lime">Lime</Button>
          <Button gradientMonochrome="failure">Failure</Button>
          <Button gradientMonochrome="pink">Pink</Button>
          <Button gradientMonochrome="purple">Purple</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Gradient duo-tone',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
          <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
          <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
          <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
          <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
          <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
          <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Outline',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button outline gradientDuoTone="purpleToBlue">
            Purple to Blue
          </Button>
          <Button outline gradientDuoTone="cyanToBlue">
            Cyan to Blue
          </Button>
          <Button outline gradientDuoTone="greenToBlue">
            Green to Blue
          </Button>
          <Button outline gradientDuoTone="purpleToPink">
            Purple to Pink
          </Button>
          <Button outline gradientDuoTone="pinkToOrange">
            Pink to Orange
          </Button>
          <Button outline gradientDuoTone="tealToLime">
            Teal to Lime
          </Button>
          <Button outline gradientDuoTone="redToYellow">
            Red to Yellow
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button sizes',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Base</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Buttons with icon',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Buy now
          </Button>
          <Button>
            Choose plan
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button with label',
      code: (
        <div>
          <Button label="2">Messages</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Icon buttons',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <HiOutlineArrowRight className="h-6 w-6" />
          </Button>
          <Button pill>
            <HiOutlineArrowRight className="h-6 w-6" />
          </Button>
          <Button outline>
            <HiOutlineArrowRight className="h-6 w-6" />
          </Button>
          <Button outline pill>
            <HiOutlineArrowRight className="h-6 w-6" />
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Loader',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <div className="mr-3">
              <Spinner size="sm" light />
            </div>
            Loading ...
          </Button>
          <Button outline>
            <div className="mr-3">
              <Spinner size="sm" light />
            </div>
            Loading ...
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Disabled',
      code: (
        <div>
          <Button disabled>Disabled button</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonsPage;
