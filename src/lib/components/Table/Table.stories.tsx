import type { Meta, Story } from '@storybook/react/types-6-0';
import type { TableProps } from '.';
import { Table } from '.';

export default {
  title: 'Components/Tables',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
    <Table.Head>
      <Table.HeadCell>Product name</Table.HeadCell>
      <Table.HeadCell>Color</Table.HeadCell>
      <Table.HeadCell>Category</Table.HeadCell>
      <Table.HeadCell>Price</Table.HeadCell>
      <Table.HeadCell>
        <span className="sr-only">Edit</span>
      </Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {'Apple MacBook Pro 17"'}
        </Table.Cell>
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Microsoft Surface Pro
        </Table.Cell>
        <Table.Cell>White</Table.Cell>
        <Table.Cell>Laptop PC</Table.Cell>
        <Table.Cell>$1999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
        <Table.Cell>Black</Table.Cell>
        <Table.Cell>Accessories</Table.Cell>
        <Table.Cell>$99</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Google Pixel Phone
        </Table.Cell>
        <Table.Cell>Gray</Table.Cell>
        <Table.Cell>Phone</Table.Cell>
        <Table.Cell>$799</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>
        <Table.Cell>Red</Table.Cell>
        <Table.Cell>Wearables</Table.Cell>
        <Table.Cell>$999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const DefaultTable = Template.bind({});
DefaultTable.storyName = 'Default';
