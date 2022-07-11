---
layout: home
title: React Alerts - Flowbite
description: Show contextual information to your users using alert elements based on Tailwind CSS
group: components
toc: true

previous: License
previousLink: getting-started/license
next: Accordion
nextLink: components/accordion/
---

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

## Usage

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/alerts.md" show_dark=true >}}
import { Alert } from 'flowbite-react'

export default function App() {
  return (
    <>
      <Alert color="info">
        <span class="font-medium">Info alert!</span>
        Change a few things up and try submitting again.
      </Alert>
    </>
  )
}
{{< /example >}}

## Properties

The parameters for the Dismiss object can be used to programatically initialize and manipulate the behaviour of the dismissal of the target element.

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
          <code class="text-blue-600 dark:text-blue-400">additionalContent</code>
        </td>
        <td class="py-4 px-6">
          ReactNode
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          The additional content to your alert
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">chindren</code>
        </td>
        <td class="py-4 px-6">
          ReactNode
        </td>
        <td class="py-4 px-6">
          Required
        </td>
        <td class="py-4 px-6">
          The content of the alert
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">color</code>
        </td>
        <td class="py-4 px-6">
          failure | gray | info | success | warning
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          The alert color defined by the AlertColors interface (default: gray)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">icon</code>
        </td>
        <td class="py-4 px-6">
          SVGElement
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          The alert icon component (You can get one from react-icons library)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">onDimiss</code>
        </td>
        <td class="py-4 px-6">
          () => void
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Function that handles the dimissable state of the alert
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">rounded</code>
        </td>
        <td class="py-4 px-6">
          boolean
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          The alert box will have rounded shape (default: true)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">withBorderAccent</code>
        </td>
        <td class="py-4 px-6">
          boolean
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          The alert box will have a bolder border at the top (default: false)
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Examples

### Default alert

Use the following examples of alert components to show messages as feedback to your users.

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/alerts.md" show_dark=true >}}
<Alert color="info">
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="failure">
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="success">
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="warning">
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</div>
<Alert color="gray">
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
{{< /example >}}

### Alerts with icon

You can also include a descriptive icon to complement the message inside the alert component with the following example.

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/alerts.md" show_dark=true >}}
<Alert color="info" icon={HiInformationCircle}>
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</div>
{{< /example >}}

### Dismissing

Use the following alert elements that are also dismissable.

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/alerts.md" show_dark=true >}}
<Alert color="info" onDismiss={() => alert('Alert dismissed!')}>
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
{{< /example >}}

### Border accent

Use the following alert components with a border accent as an alternative style.

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/alerts.md" show_dark=true >}}
<Alert color="info" icon={HiInformationCircle} onDismiss={() => alert('Alert dismissed!')}>
  <div class="ml-3 text-sm font-medium text-blue-700">
    A simple info alert with an 
    <a href="#" class="font-semibold underline hover:text-blue-800">example link</a>. 
    Give it a click if you like.
  </div>
</Alert>
{{< /example >}}

### Additional content

The following alert components can be used if you wish to disclose more information inside the element.

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/alerts.md" show_dark=true >}}
<Alert
  color="info"
  icon={HiInformationCircle}
  additionalContent={
    <>
      <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
        More info about this info alert goes here. This example text 
        is going to run a bit longer so that you can see how spacing 
        within an alert works with this kind of content.
      </div>
      <div className="flex gap-1">
        <Button>
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </Button>
        <Button color="failure">Dismiss<Button>
      </div>
    </>
  }
>
  <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
    This is a info alert
  </h3>
</Alert>
{{< /example >}}
