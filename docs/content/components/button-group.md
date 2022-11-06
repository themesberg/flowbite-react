---
layout: home
title: React Button Group - Flowbite
description: Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line
group: components
toc: true

previous: Buttons
previousLink: components/buttons/
next: Cards
nextLink: components/card/
---

The button group component from Flowbite can be used to stack together multiple buttons and links inside a single element.

## Usage

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/button-group.md" show_dark=true >}}
import { Badge } from 'flowbite-react'

export default function App() {
  return (
    <>
      <Button.Group>
        <Button color="gray">
          One
        </Button>
        <Button color="gray">
          Two
        </Button>
      </Button.Group>
    </>
  )
}
{{< /example >}}

## Example

### Default button group

Use the following code to stack together buttons into a single group.

{{< example class="dark:bg-gray-800" github="components/button-group.md" show_dark=true >}}
<Button.Group>
  <Button color="gray">
    Profile
  </Button>
  <Button color="gray">
    Settings
  </Button>
  <Button color="gray">
    Messages
  </Button>
</Button.Group>
{{< /example >}}

### Group button as links

You can also use the button group component as links.

{{< example class="dark:bg-gray-800" github="components/button-group.md" show_dark=true >}}
<Button.Group>
  <Button color="gray" href="/profile">
    Profile
  </Button>
  <Button color="gray" href="/settings">
    Settings
  </Button>
  <Button color="gray" href="/messages">
    Messages
  </Button>
</Button.Group>
{{< /example >}}

### Group buttons with icons

You can also use SVG icons inside the grouped buttons.

{{< example class="dark:bg-gray-800" github="components/button-group.md" show_dark=true >}}
<Button.Group>
  <Button color="gray">
    <HiUserCircle className="mr-3 h-4 w-4" />
    {' '}Profile
  </Button>
  <Button color="gray">
    <HiAdjustments className="mr-3 h-4 w-4" />
    {' '}Settings
  </Button>
  <Button color="gray">
    <HiCloudDownload className="mr-3 h-4 w-4" />
    {' '}Messages
  </Button>
</Button.Group>
{{< /example >}}

### Outline

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example class="dark:bg-gray-800" github="components/button-group.md" show_dark=true >}}
<div className="flex flex-wrap gap-2">
  <Button.Group outline={true}>
    <Button color="gray">
      Profile
    </Button>
    <Button color="gray">
      Settings
    </Button>
    <Button color="gray">
      Messages
    </Button>
  </Button.Group>
  <Button.Group outline={true}>
    <Button gradientMonochrome="info">
      Profile
    </Button>
    <Button gradientMonochrome="info">
      Settings
    </Button>
    <Button gradientMonochrome="info">
      Messages
    </Button>
  </Button.Group>
  <Button.Group outline={true}>
    <Button gradientDuoTone="cyanToBlue">
      Profile
    </Button>
    <Button gradientDuoTone="cyanToBlue">
      Settings
    </Button>
    <Button gradientDuoTone="cyanToBlue">
      Messages
    </Button>
  </Button.Group>
</div>
{{< /example >}}

### Outlined with icon

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example class="dark:bg-gray-800" github="components/button-group.md" show_dark=true >}}
<div className="flex flex-wrap gap-2">
  <Button.Group outline={true}>
    <Button color="gray">
      <HiUserCircle className="mr-3 h-4 w-4" />
      {' '}Profile
    </Button>
    <Button color="gray">
      <HiAdjustments className="mr-3 h-4 w-4" />
      {' '}Settings
    </Button>
    <Button color="gray">
      <HiCloudDownload className="mr-3 h-4 w-4" />
      {' '}Messages
    </Button>
  </Button.Group>
  <Button.Group outline={true}>
    <Button gradientMonochrome="info">
      <HiUserCircle className="mr-3 h-4 w-4" />
      {' '}Profile
    </Button>
    <Button gradientMonochrome="info">
      <HiAdjustments className="mr-3 h-4 w-4" />
      {' '}Settings
    </Button>
    <Button gradientMonochrome="info">
      <HiCloudDownload className="mr-3 h-4 w-4" />
      {' '}Messages
    </Button>
  </Button.Group>
  <Button.Group outline={true}>
    <Button gradientDuoTone="cyanToBlue">
      <HiUserCircle className="mr-3 h-4 w-4" />
      {' '}Profile
    </Button>
    <Button gradientDuoTone="cyanToBlue">
      <HiAdjustments className="mr-3 h-4 w-4" />
      {' '}Settings
    </Button>
    <Button gradientDuoTone="cyanToBlue">
      <HiCloudDownload className="mr-3 h-4 w-4" />
      {' '}Messages
    </Button>
  </Button.Group>
</div>
{{< /example >}}
