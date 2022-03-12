import { FC } from 'react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

import { Button } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const ButtonsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default button',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button color="alternative">Alternative</Button>
          <Button color="dark">Dark</Button>
          <Button color="light">Light</Button>
          <Button color="green">Green</Button>
          <Button color="red">Red</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="purple">Purple</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button pills',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button pill>Default</Button>
          <Button color="alternative" pill>
            Alternative
          </Button>
          <Button color="dark" pill>
            Dark
          </Button>
          <Button color="light" pill>
            Light
          </Button>
          <Button color="green" pill>
            Green
          </Button>
          <Button color="red" pill>
            Red
          </Button>
          <Button color="yellow" pill>
            Yellow
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
          <Button gradientMonochrome="blue">Blue</Button>
          <Button gradientMonochrome="green">Green</Button>
          <Button gradientMonochrome="cyan">Cyan</Button>
          <Button gradientMonochrome="teal">Teal</Button>
          <Button gradientMonochrome="lime">Lime</Button>
          <Button gradientMonochrome="red">Red</Button>
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
          <Button icon={HiShoppingCart} iconPosition="start">
            Buy now
          </Button>
          <Button icon={HiOutlineArrowRight} iconPosition="end">
            Choose plan
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button with label',
      code: <Button label="2">Messages</Button>,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Icon buttons',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button iconButton icon={HiOutlineArrowRight} />
          <Button iconButton icon={HiOutlineArrowRight} pill />
          <Button iconButton icon={HiOutlineArrowRight} outline />
          <Button iconButton icon={HiOutlineArrowRight} pill outline />
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Loader',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button loader>Loading ...</Button>
          <Button loader outline>
            Loading ...
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Disabled',
      code: <Button disabled>Disabled button</Button>,
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonsPage;
