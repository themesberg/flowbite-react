import type { FC, PropsWithChildren } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert, Card, DarkThemeToggle, Flowbite, Table } from '../src';

const ThemePage: FC = () => {
  return (
    <div className="mx-auto max-w-4xl dark:text-white">
      <h1 className="mb-3 text-2xl font-bold">Theme</h1>
      <Alert color="warning" icon={HiInformationCircle}>
        This feature is highly experimental. In the future, it could be deprecated or even suffer several changes.
      </Alert>
      <CustomizeFlowbiteComponentsSection />
      <SwitchToDarkModeSection />
      <ReadTheThemeSection />
    </div>
  );
};

const CustomizeFlowbiteComponentsSection: FC = () => {
  return (
    <section className="mb-6">
      <header>
        <h2 className="my-3 text-xl font-bold">Customize Flowbite components using Tailwind CSS</h2>
      </header>
      <p className="mb-3">
        You want to customize Flowbite. Specifically, you would like to remove/add Tailwind CSS classes to one or more
        components.
      </p>
      <p className="mb-3">
        You have a few options. They each have benefits and drawbacks, and you can combine them how you want.
      </p>
      <FlowbiteCustomizationOptionsTable />
      <BenefitsAndDrawbacks />
    </section>
  );
};

const FlowbiteCustomizationOptionsTable: FC = () => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell className="w-64">Option</Table.HeadCell>
        <Table.HeadCell>Example</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Custom theme</Table.Cell>
          <Table.Cell>
            {`const theme: CustomFlowbiteTheme = {
  accordion: {
    root: {
      base: 'bg-primary',
    },
  },
};

<Flowbite theme={{ theme }}>...</Flowbite>`}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Custom component with <strong>className=&#123;&#125;</strong>
          </Table.Cell>
          <Table.Cell>
            {`<Accordion className="bg-primary">
  <Accordion.Title>My accordion</Accordion.Title>
  <Accordion.Content>Contains</Accordion.Content>
</Accordion>`}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Custom component with <strong>theme=&#123;&#125;</strong>
          </Table.Cell>
          <Table.Cell>
            {`const accordionTheme: CustomFlowbiteTheme = {
  accordion: {
    root: {
      base: 'bg-primary',
    },
  },
}

<Accordion theme={{ accordionTheme }}>
  <Accordion.Title>My accordion</Accordion.Title>
  <Accordion.Content>Contains</Accordion.Content>
</Accordion>`}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

const BenefitsAndDrawbacks: FC = () => {
  return (
    <div>
      <h3 className="mt-6 mb-3 text-lg font-bold">
        Benefits &amp; drawbacks of <strong>custom themes</strong>
      </h3>
      <ul className="list-none [&>li]:mb-2">
        <Benefit>You can customize every component, one time, in one place</Benefit>
        <Benefit>Changes will apply to every usage of the component in your app</Benefit>
        <Benefit>
          <span>
            You get the best performance
            <span>
              <span className="sr-only">See disclaimer</span>
              <sup aria-hidden>*</sup>
            </span>
            &nbsp;compared to other options
          </span>
        </Benefit>
        <Drawback>Customizations can quickly become complex and hard to maintain in one large JSON file</Drawback>
      </ul>
      <h3 className="mt-6 mb-3 text-lg font-bold">
        Benefits &amp; drawbacks of&nbsp;
        <strong>custom components with className=&#123;&#125;</strong>
      </h3>
      <ul className="list-none [&>li]:mb-2">
        <Benefit>You can customize with very little effort and code</Benefit>
        <Benefit>You don&rsquo;t need to learn how to use the theme API</Benefit>
        <Drawback>
          <span>
            Some components have nested elements, and you can&rsquo;t customize all of them with one&nbsp;
            <strong>className</strong>
          </span>
        </Drawback>
        <Drawback>
          You need to customize every usage of a component individually, or create and remember to use a custom
          component of your own
        </Drawback>
      </ul>
      <h3 className="mt-6 mb-3 text-lg font-bold">
        Benefits &amp; drawbacks of&nbsp;
        <strong>custom components with theme=&#123;&#125;</strong>
      </h3>
      <ul className="mb-6 list-none [&>li]:mb-2">
        <Benefit>You can customize one usage of a component that has nested elements</Benefit>
        <Benefit>
          You can still create a custom component of your own to reuse the customizations rather than repeating them
        </Benefit>
        <Drawback>You add further complexity and indirection to your app</Drawback>
        <Drawback>
          <span>
            Your app will probably perform worse at scale
            <span>
              <span className="sr-only">See disclaimer</span>
              <sup aria-hidden>*</sup>
            </span>
          </span>
        </Drawback>
      </ul>
      <p className="text-gray-700 dark:text-gray-400">
        <strong>
          <span className="sr-only">Disclaimer:</span>
          <span aria-hidden>*</span>
        </strong>
        &nbsp;We haven&rsquo;t tested performance at any scale. The <strong>theme=&#123;&#125;</strong> attribute merges
        the necessary part of the global theme with what is provided in the attribute, which is a deep object merge
        &mdash; and it isn&rsquo;t fast. It is safe to assume that <strong>theme=&#123;&#125;</strong> attribute will
        degrade performance with enough components using that technique. It is safe to assume performance won&rsquo;t
        degrade meaningfully at scale if you just use a global theme and/or <strong>className=&#123;&#125;</strong>{' '}
        attributes.
      </p>
    </div>
  );
};

const Benefit: FC<PropsWithChildren> = ({ children }) => {
  return (
    <li className="flex items-center gap-3 leading-4 text-green-700 dark:text-green-100">
      <span>
        <FaPlus aria-hidden className="w-6" />
        <span className="sr-only">Benefit:</span>
      </span>
      {children}
    </li>
  );
};

const Drawback: FC<PropsWithChildren> = ({ children }) => {
  return (
    <li className="flex items-center gap-3 leading-4 text-red-700 dark:text-red-100">
      <span>
        <FaMinus aria-hidden className="w-6" />
        <span className="sr-only">Drawback:</span>
      </span>
      {children}
    </li>
  );
};

const SwitchToDarkModeSection: FC = () => {
  return (
    <section className="mb-6">
      <header>
        <h2 className="mb-3 text-xl font-bold">Switch to dark theme</h2>
      </header>
      <p className="mb-3">
        Since the Flowbite component creates and context to manage the theme, it also enables your application to use
        the <strong>&lt;DarkThemeToggle/&gt;</strong> component.
      </p>
      <Card>
        {reactElementToJSXString(
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>,
          {
            showFunctions: true,
            functionValue: (fn) => fn.name,
            sortProps: false,
            useBooleanShorthandSyntax: false,
            useFragmentShortSyntax: false,
          },
        )}
      </Card>
    </section>
  );
};

const ReadTheThemeSection: FC = () => {
  return (
    <section className="mb-6">
      <header>
        <h2 className="mb-3 text-xl font-bold">Read the theme</h2>
      </header>
      <p className="mb-3">
        You can obtain active Tailwind CSS Classes in the theme via <strong>useTheme</strong> as well as the status of
        light/dark mode via <strong>useThemeMode</strong>.
      </p>
      <Card>
        {`const theme = useTheme().theme.button; // -> { base: "..", color: { ... }, ... }`}
        {`const [mode, setMode, toggleMode] = useThemeMode(); // -> ["light", ..]`}
      </Card>
    </section>
  );
};

export default ThemePage;
