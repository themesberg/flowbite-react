import { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { Button, Card } from '../components';

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
          <div className="flex flex-wrap gap-2">
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
    </div>
  );
};

export default ButtonsPage;
