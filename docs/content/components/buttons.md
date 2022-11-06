---
layout: home
title: React Buttons - Flowbite
# description: Use the Tailwind CSS button component inside forms, as links, and more with support for multiple colors, sizes, and variations
description: Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
group: components
toc: true

previous: Breadcrumbs
previousLink: components/breadcrumb/
next: Button group
nextLink: components/button-group/
---

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

Flowbite provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

## Usage

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/buttons.md" show_dark=true >}}
import { Button } from 'flowbite-react'

export default function App() {
  return (
    <>
      <Button>
        Button
      </Button>
    </>
  )
}
{{< /example >}}

## Properties

<div class="overflow-x-auto relative my-10 shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="bg-gray-50 dark:bg-gray-700">
      <tr class="text-xs font-medium uppercase">
        <th scope="col" class="py-3 px-6">
          Parameter
        </th>
        <th scope="col" class="py-3 px-6">
          Type
        </th>
        <th scope="col" class="py-3 px-6">
          Required
        </th>
        <th scope="col" class="py-3 px-6">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">children</code>
        </td>
        <td class="py-4 px-6">
          ReactNode
        </td>
        <td class="py-4 px-6">
          Required
        </td>
        <td class="py-4 px-6">
          Content of the button
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">label</code>
        </td>
        <td class="py-4 px-6">
          ReactNode
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Add the label to button
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">color</code>
        </td>
        <td class="py-4 px-6">
          dark | failure | gray | info | light | purple | success | warning
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Set the color scheme of the button (default: info)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">gradientMonochrome</code>
        </td>
        <td class="py-4 px-6">
          failure | info | success | cyan | lime | pink | purple | teal
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Set the background color of the button to monotone linear gradient
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">gradientDuoTone</code>
        </td>
        <td class="py-4 px-6">
          cyanToBlue | greenToBlue | pinkToOrange | purpleToBlue | purpleToPink | redToYellow | tealToLime
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Set the background color of the button to duotone linear gradient
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">href</code>
        </td>
        <td class="py-4 px-6">
          string
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Allow to use button as a link
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">outline</code>
        </td>
        <td class="py-4 px-6">
          boolean
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Set the style of button to outline (default: false)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">size</code>
        </td>
        <td class="py-4 px-6">
          xs | sm | md | lg | xl
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Set the size of the button (default: md)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">fullSized</code>
        </td>
        <td class="py-4 px-6">
          boolean
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Occupy the whole width of the container (default: false)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">pill</code>
        </td>
        <td class="py-4 px-6">
          boolean
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Makes the button edges fully rounded
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">positionInGroup</code>
        </td>
        <td class="py-4 px-6">
          none | start | middle | end
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Makes the edges of left, right or both sides of the button sqaured shaped (default: none)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">disabled</code>
        </td>
        <td class="py-4 px-6">
          boolean
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Disable the button (deafult: false)
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Examples

### Default button

Use these default button styles with multiple colors to indicate an action or link within your website.

{{< example class="flex flex-wrap" github="components/buttons.md" show_dark=true >}}
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
{{< /example >}}

### Button pills

The button pills can be used as an alternative style by using fully rounded edges.

{{< example class="flex flex-wrap" github="components/buttons.md" show_dark=true >}}
<div className="flex flex-wrap gap-2">
  <Button color="gray" pill={true}>
    Gray
  </Button>
  <Button color="dark" pill={true}>
    Dark
  </Button>
  <Button color="light" pill={true}>
    Light
  </Button>
  <Button color="success" pill={true}>
    Success
  </Button>
  <Button color="failure" pill={true}>
    Failure
  </Button>
  <Button color="warning" pill={true}>
    Warning
  </Button>
  <Button color="purple" pill={true}>
    Purple
  </Button>
</div>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_tw3 >}}
</div>

### Gradient monochrome

These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.

{{< example class="flex flex-wrap" github="components/buttons.md" show_dark=true >}}
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
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_tw3 >}}
</div>

### Gradient duotone

These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.

{{< example class="flex flex-wrap" github="components/buttons.md" show_dark=true >}}
<div className="flex flex-wrap gap-2">
  <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
  <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
  <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
  <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
  <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
  <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
  <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
</div>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_tw3 >}}
</div>

### Gradient outline

This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.

{{< example class="flex flex-wrap" github="components/buttons.md" show_dark=true >}}
<div className="flex flex-wrap gap-2">
  <Button gradientDuoTone="purpleToBlue" outline={true}>
    Purple to Blue
  </Button>
  <Button gradientDuoTone="cyanToBlue" outline={true}>
    Cyan to Blue
  </Button>
  <Button gradientDuoTone="greenToBlue" outline={true}>
    Green to Blue
  </Button>
  <Button gradientDuoTone="purpleToPink" outline={true}>
    Purple to Pink
  </Button>
  <Button gradientDuoTone="pinkToOrange" outline={true}>
    Pink to Orange
  </Button>
  <Button gradientDuoTone="tealToLime" outline={true}>
    Teal to Lime
  </Button>
  <Button gradientDuoTone="redToYellow" outline={true}>
    Red to Yellow
  </Button>
</div>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_tw3 >}}
</div>

### Outline buttons

Use the following button styles to show the colors only for the border of the element.

{{< example class="flex flex-wrap" github="components/buttons.md" show_dark=true >}}
<div className="flex flex-wrap items-center gap-2">
  <Button outline={true}>Default</Button>
  <Button color="gray" outline={true}>Gray</Button>
  <Button color="dark" outline={true}>Dark</Button>
  <Button color="light" outline={true}>Light</Button>
  <Button color="success" outline={true}>Success</Button>
  <Button color="failure" outline={true}>Failure</Button>
  <Button color="warning" outline={true}>Warning</Button>
  <Button color="purple" outline={true}>Purple</Button>
</div>
{{< /example >}}

### Button sizes

Use these examples if you want to use smaller or larger buttons.

{{< example class="dark:bg-gray-800" github="components/buttons.md" show_dark=true >}}
<div className="flex flex-wrap items-center gap-2">
  <Button size="xs">Extra small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Base</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra large</Button>
</div>
{{< /example >}}

### Buttons with icon

Use the following examples to add a SVG icon inside the button either on the left or right side.

{{< example class="flex dark:bg-gray-800" github="components/buttons.md" show_dark=true >}}
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
{{< /example >}}

### Button with label

This example can be used to show a notification count or helper text inside a button using the badge element.

{{< example class="flex dark:bg-gray-800" github="components/buttons.md" show_dark=true >}}
<Button label="2">
  Messages
</Button>
{{< /example >}}

### Icon buttons

Sometimes you need a button to indicate an action using only an icon.

{{< example class="dark:bg-gray-800" github="components/buttons.md" show_dark=true >}}
<div className="flex flex-wrap items-center gap-2">
  <Button>
    <HiOutlineArrowRight className="h-6 w-6" />
  </Button>
  <Button pill={true}>
    <HiOutlineArrowRight className="h-6 w-6" />
  </Button>
  <Button outline={true}>
    <HiOutlineArrowRight className="h-6 w-6" />
  </Button>
  <Button outline={true} pill={true}>
    <HiOutlineArrowRight className="h-6 w-6" />
  </Button>
</div>
{{< /example >}}

### Loader

Use the following <a href="{{< ref "components/spinner" >}}">spinner components</a> from Flowbite to indicate a loader animation inside buttons:

{{< example github="components/buttons.md" show_dark=true >}}
<div className="flex flex-wrap items-center gap-2">
  <Button>
    <div className="mr-3">
      <Spinner size="sm" light={true} />
    </div>
    Loading ...
  </Button>
  <Button outline={true}>
    <div className="mr-3">
      <Spinner size="sm" light={true} />
    </div>
    Loading ...
  </Button>
</div>
{{< /example >}}

### Disabled

Use the following styles to indicate a disabled button. This can be often used inside form elements to disable the submit button before all the form elements have been completed and validated.

{{< example github="components/buttons.md" class="dark:bg-gray-800" show_dark=true >}}
<Button disabled={true}>
  Disabled button
</Button>
{{< /example >}}