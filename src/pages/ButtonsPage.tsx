import { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { Button, Card } from '../components';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const ButtonsPage: FC = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Default button</span>
        <Card className="dark:!bg-gray-900">
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
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button>Default</Button>
<Button color="alternative">Alternative</Button>
<Button color="dark">Dark</Button>
<Button color="light">Light</Button>
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Button pills</span>
        <Card className="dark:!bg-gray-900">
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
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button pill>Default</Button>
<Button color="alternative" pill>Alternative</Button>
<Button color="dark" pill>Dark</Button>
<Button color="light" pill>Light</Button>
<Button color="green" pill>Green</Button>
<Button color="red" pill>Red</Button>
<Button color="yellow" pill>Yellow</Button>
<Button color="purple" pill>Purple</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Gradient Monochrome</span>
        <Card className="dark:!bg-gray-900">
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
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button gradientMonochrome="blue">Blue</Button>
<Button gradientMonochrome="green">Green</Button>
<Button gradientMonochrome="cyan">Cyan</Button>
<Button gradientMonochrome="teal">Teal</Button>
<Button gradientMonochrome="lime">Lime</Button>
<Button gradientMonochrome="red">Red</Button>
<Button gradientMonochrome="pink">Pink</Button>
<Button gradientMonochrome="purple">Purple</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Gradient duo-tone</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-wrap gap-2">
            <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
            <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
            <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
            <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
            <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
            <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
            <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
<Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
<Button gradientDuoTone="greenToBlue">Green to Blue</Button>
<Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
<Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
<Button gradientDuoTone="tealToLime">Teal to Lime</Button>
<Button gradientDuoTone="redToYellow">Red to Yellow</Button>

`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Outline</span>
        <Card className="dark:!bg-gray-900">
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
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button outline gradientDuoTone="purpleToBlue">Purple to Blue</Button>
<Button outline gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
<Button outline gradientDuoTone="greenToBlue">Green to Blue</Button>
<Button outline gradientDuoTone="purpleToPink">Purple to Pink</Button>
<Button outline gradientDuoTone="pinkToOrange">Pink to Orange</Button>
<Button outline gradientDuoTone="tealToLime">Teal to Lime</Button>
<Button outline gradientDuoTone="redToYellow">Red to Yellow</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Button sizes</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Base</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button size="extraSmall">Extra small</Button>
<Button size="small">Small</Button>
<Button size="medium">Base</Button>
<Button size="large">Large</Button>
<Button size="extraLarge">Extra large</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Buttons with icon</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-wrap items-center gap-2">
            <Button icon={HiShoppingCart} iconPosition="start">
              Buy now
            </Button>
            <Button icon={HiOutlineArrowRight} iconPosition="end">
              Choose plan
            </Button>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button icon={HiShoppingCart} iconPosition="left">Buy now</Button>
<Button icon={HiOutlineArrowRight} iconPosition="right">Choose plan</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Button with label</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-wrap items-center gap-2">
            <Button label="2">Messages</Button>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button label="2">Messages</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Icon buttons</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-wrap items-center gap-2">
            <Button iconButton icon={HiOutlineArrowRight} />
            <Button iconButton icon={HiOutlineArrowRight} pill />
            <Button iconButton icon={HiOutlineArrowRight} outline />
            <Button iconButton icon={HiOutlineArrowRight} pill outline />
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button iconButton icon={HiOutlineArrowRight} />
<Button iconButton icon={HiOutlineArrowRight} pill />
<Button iconButton icon={HiOutlineArrowRight} outline />
<Button iconButton icon={HiOutlineArrowRight} pill outline />
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Loader</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-wrap items-center gap-2">
            <Button loader size="sm">
              Loading ...
            </Button>
            <Button loader size="sm" outline>
              Loading ...
            </Button>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button loader size="sm">Loading ...</Button>
<Button loader size="sm" outline>Loading ...</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Disabled</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-wrap items-center gap-2">
            <Button disabled>Disabled button</Button>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Button loader>Loading ...</Button>
<Button loader outline>Loading ...</Button>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
    </div>
  );
};

export default ButtonsPage;
