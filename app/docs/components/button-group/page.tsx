'use client';

import type { FC } from 'react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { CodePreview } from '~/app/components/code-preview';
import { Button } from '~/src';

const ButtonGroupPage: FC = () => (
  <>
    <CodePreview title="Default button group">
      <Button.Group>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </Button.Group>
    </CodePreview>
    <CodePreview title="With icons">
      <Button.Group>
        <Button color="gray">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button color="gray">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button color="gray">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </Button.Group>
    </CodePreview>
    <CodePreview title="All colors" className="flex flex-wrap gap-2">
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
    </CodePreview>
    <CodePreview title="Outline" className="flex flex-wrap gap-2">
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
    </CodePreview>
    <CodePreview title="Outline with icons" className="flex flex-wrap gap-2">
      <Button.Group outline>
        <Button color="gray">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button color="gray">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button color="gray">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </Button.Group>
      <Button.Group outline>
        <Button gradientMonochrome="info">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientMonochrome="info">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientMonochrome="info">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </Button.Group>
      <Button.Group outline>
        <Button gradientDuoTone="cyanToBlue">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </Button.Group>
    </CodePreview>
  </>
);

export default ButtonGroupPage;
