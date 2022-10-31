---
layout: home
title: React Badges - Flowbite
description: Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
group: components
toc: true

previous: Avatar
previousLink: components/avatar/
next: Breadcrumbs
nextLink: components/breadcrumb/
---

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a `span` element.

## Usage

{{< example class="flex space-x-4 dark:bg-gray-800" github="docs/components/badge.md" show_dark=true >}}
import { Badge } from 'flowbite-react'

export default function App() {
  return (
    <>
      <Badge>
        Default
      </Badge>
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
          The content of the badge
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">color</code>
        </td>
        <td class="py-4 px-6">
          failure | gray | indigo | info | pink | purple | success
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Apply the theme to the badge (default: info)
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
          The badge icon component (You can get one from react-icons library)
        </td>
      </tr>
      <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6 font-medium">
          <code class="text-blue-600 dark:text-blue-400">size</code>
        </td>
        <td class="py-4 px-6">
          xs | sm
        </td>
        <td class="py-4 px-6">
          Optional
        </td>
        <td class="py-4 px-6">
          Set the size of the badge (default: xs)
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
          Set the <code>href</code> attribute when using the badge as a link
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Example

### Default badge

Use the following badge elements to indicate counts or labels inside or outside components.

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
<div className="flex flex-wrap gap-2">
  <Badge color="info">Default</Badge>
  <Badge color="gray">Dark</Badge>
  <Badge color="failure">Failure</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="indigo">Indigo</Badge>
  <Badge color="purple">Purple</Badge>
  <Badge color="pink">Pink</Badge>
</div>
{{< /example >}}

### Larger badges

Use the `text-sm` to create a larger variant of the badges.

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 <div className="flex flex-wrap gap-2">
  <Badge color="info" size="sm">Default</Badge>
  <Badge color="gray" size="sm">Dark</Badge>
  <Badge color="failure" size="sm">Failure</Badge>
  <Badge color="success" size="sm">Success</Badge>
  <Badge color="warning" size="sm">Warning</Badge>
  <Badge color="indigo" size="sm">Indigo</Badge>
  <Badge color="purple" size="sm">Purple</Badge>
  <Badge color="pink" size="sm">Pink</Badge>
</div>
{{< /example >}}

### Badges as links

You can also use badges as anchor elements to link to another page.

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
<div className="flex flex-wrap items-center gap-2">
  <Badge href="/badges">Default</Badge>
  <Badge size="sm" href="/badges">Default</Badge>
</div>
{{< /example >}}

### Badges with icon

You can also use SVG icons inside the badge elements.

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
<div className="flex flex-wrap gap-2">
  <Badge icon={HiCheck}>2 minutes ago</Badge>
  <Badge color="gray" icon={HiClock}>3 days ago</Badge>
</div>
{{< /example >}}

### Badge with icon only

Alternatively you can also use badges which indicate only a SVG icon.

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
<div className="flex flex-wrap items-center gap-2">
  <Badge icon={HiCheck} />
  <Badge color="gray" icon={HiCheck} />
  <Badge size="sm" icon={HiCheck} />
  <Badge color="gray" size="sm" icon={HiCheck} />
</div>
{{< /example >}}
