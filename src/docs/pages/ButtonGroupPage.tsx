import type { FC } from 'react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { Button } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const ButtonGroupPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default example',
      code: (
        <Button.Group>
          <Button color="gray">Profile</Button>
          <Button color="gray">Settings</Button>
          <Button color="gray">Messages</Button>
        </Button.Group>
      ),
    },
    {
      title: 'Group buttons with icons',
      code: (
        <Button.Group>
          <Button color="gray">
            <HiUserCircle className="mr-3 h-4 w-4" /> Profile
          </Button>
          <Button color="gray">
            <HiAdjustments className="mr-3 h-4 w-4" /> Settings
          </Button>
          <Button color="gray">
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
            <Button color="info">Profile</Button>
            <Button color="info">Settings</Button>
            <Button color="info">Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button gradientMonochrome="info">Profile</Button>
            <Button gradientMonochrome="info">Settings</Button>
            <Button gradientMonochrome="info">Messages</Button>
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
            <Button color="gray">Profile</Button>
            <Button color="gray">Settings</Button>
            <Button color="gray">Messages</Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientMonochrome="info">Profile</Button>
            <Button gradientMonochrome="info">Settings</Button>
            <Button gradientMonochrome="info">Messages</Button>
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
            <Button color="gray">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button color="gray">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button color="gray">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientMonochrome="info">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button gradientMonochrome="info">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button gradientMonochrome="info">
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
