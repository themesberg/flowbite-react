import { FC } from 'react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

import { CodeExample, DemoPage } from './DemoPage';
import { Button } from '../components';

const ButtonGroupPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default example',
      code: (
        <Button.Group>
          <Button color="alternative">Profile</Button>
          <Button color="alternative">Settings</Button>
          <Button color="alternative">Messages</Button>
        </Button.Group>
      ),
    },
    {
      title: 'Group buttons with icons',
      code: (
        <Button.Group>
          <Button color="alternative">
            <HiUserCircle className="mr-3 h-4 w-4" /> Profile
          </Button>
          <Button color="alternative">
            <HiAdjustments className="mr-3 h-4 w-4" /> Settings
          </Button>
          <Button color="alternative">
            <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
          </Button>
        </Button.Group>
      ),
    },
    {
      title: 'All colors',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group>
            <Button color="blue">Profile</Button>
            <Button color="blue">Settings</Button>
            <Button color="blue">Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button gradientMonochrome="blue">Profile</Button>
            <Button gradientMonochrome="blue">Settings</Button>
            <Button gradientMonochrome="blue">Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button gradientDuoTone="greenToBlue">Profile</Button>
            <Button gradientDuoTone="greenToBlue">Settings</Button>
            <Button gradientDuoTone="greenToBlue">Messages</Button>
          </Button.Group>
        </div>
      ),
    },
    {
      title: 'Outline',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group outline>
            <Button color="alternative">Profile</Button>
            <Button color="alternative">Settings</Button>
            <Button color="alternative">Messages</Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientMonochrome="blue">Profile</Button>
            <Button gradientMonochrome="blue">Settings</Button>
            <Button gradientMonochrome="blue">Messages</Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientDuoTone="cyanToBlue">Profile</Button>
            <Button gradientDuoTone="cyanToBlue">Settings</Button>
            <Button gradientDuoTone="cyanToBlue">Messages</Button>
          </Button.Group>
        </div>
      ),
    },
    {
      title: 'Outline with icons',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group outline>
            <Button color="alternative">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button color="alternative">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button color="alternative">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientMonochrome="blue">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button gradientMonochrome="blue">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button gradientMonochrome="blue">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientDuoTone="cyanToBlue">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button gradientDuoTone="cyanToBlue">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button gradientDuoTone="cyanToBlue">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonGroupPage;
