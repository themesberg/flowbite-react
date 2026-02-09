import { describe, expect, it } from "bun:test";
import { compoundComponentsTransformer } from "./compound-components";

const { transform } = compoundComponentsTransformer;

describe("compoundComponentsTransformer", () => {
  describe("basic transformations", () => {
    it("transforms a single compound component", () => {
      const input = `import { Accordion } from "flowbite-react";

export function MyComponent() {
  return (
    <Accordion>
      <Accordion.Panel>Content</Accordion.Panel>
    </Accordion>
  );
}`;

      const expected = `import { Accordion, AccordionPanel } from "flowbite-react";

export function MyComponent() {
  return (
    <Accordion>
      <AccordionPanel>Content</AccordionPanel>
    </Accordion>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms multiple compound components of the same type", () => {
      const input = `import { Accordion } from "flowbite-react";

export function MyComponent() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Title</Accordion.Title>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}`;

      const expected = `import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function MyComponent() {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>Title</AccordionTitle>
        <AccordionContent>Content</AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms compound components from different parent components", () => {
      const input = `import { Accordion, Modal } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <Accordion>
        <Accordion.Panel>Panel</Accordion.Panel>
      </Accordion>
      <Modal>
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>Body</Modal.Body>
      </Modal>
    </>
  );
}`;

      const expected = `import { Accordion, AccordionPanel, Modal, ModalBody, ModalHeader } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <Accordion>
        <AccordionPanel>Panel</AccordionPanel>
      </Accordion>
      <Modal>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Body</ModalBody>
      </Modal>
    </>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });
  });

  describe("import handling", () => {
    it("adds new imports for transformed components", () => {
      const input = `import { Accordion } from "flowbite-react";

export function MyComponent() {
  return <Accordion.Panel>Content</Accordion.Panel>;
}`;

      const expected = `import { Accordion, AccordionPanel } from "flowbite-react";

export function MyComponent() {
  return <AccordionPanel>Content</AccordionPanel>;
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("handles multiline imports", () => {
      const input = `import {
  Accordion,
  Button,
} from "flowbite-react";

export function MyComponent() {
  return <Accordion.Panel>Content</Accordion.Panel>;
}`;

      const expected = `import {
  Accordion,
  AccordionPanel,
  Button,
} from "flowbite-react";

export function MyComponent() {
  return <AccordionPanel>Content</AccordionPanel>;
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("sorts imports alphabetically", () => {
      const input = `import { Accordion, Button } from "flowbite-react";

export function MyComponent() {
  return <Accordion.Panel>Content</Accordion.Panel>;
}`;

      const expected = `import { Accordion, AccordionPanel, Button } from "flowbite-react";

export function MyComponent() {
  return <AccordionPanel>Content</AccordionPanel>;
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("handles imports from flowbite-react/components/* path", () => {
      const input = `import { Accordion } from "flowbite-react/components/Accordion";

export function MyComponent() {
  return <Accordion.Panel>Content</Accordion.Panel>;
}`;

      const expected = `import { Accordion, AccordionPanel } from "flowbite-react/components/Accordion";

export function MyComponent() {
  return <AccordionPanel>Content</AccordionPanel>;
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("prefers base flowbite-react import over component-specific imports when multiple exist", () => {
      const input = `import { Button } from "flowbite-react";
import { Accordion } from "flowbite-react/components/Accordion";

export function MyComponent() {
  return (
    <>
      <Button.Group>
        <Button>One</Button>
      </Button.Group>
      <Accordion.Panel>Content</Accordion.Panel>
    </>
  );
}`;

      // New imports are added to the base "flowbite-react" import and sorted alphabetically
      const expected = `import { AccordionPanel, Button, ButtonGroup } from "flowbite-react";
import { Accordion } from "flowbite-react/components/Accordion";

export function MyComponent() {
  return (
    <>
      <ButtonGroup>
        <Button>One</Button>
      </ButtonGroup>
      <AccordionPanel>Content</AccordionPanel>
    </>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("preserves import aliases when adding new imports", () => {
      // Test that existing aliased imports are preserved when adding new imports alongside them
      const input = `import { Accordion, Button as MyButton } from "flowbite-react";

export function MyComponent() {
  return (
    <Accordion>
      <Accordion.Panel>Content</Accordion.Panel>
    </Accordion>
  );
}`;

      const expected = `import { Accordion, AccordionPanel, Button as MyButton } from "flowbite-react";

export function MyComponent() {
  return (
    <Accordion>
      <AccordionPanel>Content</AccordionPanel>
    </Accordion>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("preserves import aliases in multiline imports", () => {
      const input = `import {
  Accordion,
  Button as MyButton,
} from "flowbite-react";

export function MyComponent() {
  return <Accordion.Panel>Content</Accordion.Panel>;
}`;

      const expected = `import {
  Accordion,
  AccordionPanel,
  Button as MyButton,
} from "flowbite-react";

export function MyComponent() {
  return <AccordionPanel>Content</AccordionPanel>;
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });
  });

  describe("no transformation needed", () => {
    it("returns unchanged when no compound components are used", () => {
      const input = `import { Button } from "flowbite-react";

export function MyComponent() {
  return <Button>Click me</Button>;
}`;

      const result = transform(input);

      expect(result.changed).toBe(false);
      expect(result.content).toBe(input);
    });

    it("returns unchanged when no flowbite-react import exists", () => {
      const input = `import { Something } from "other-library";

export function MyComponent() {
  return <Something.Item>Content</Something.Item>;
}`;

      const result = transform(input);

      expect(result.changed).toBe(false);
      expect(result.content).toBe(input);
    });

    it("returns unchanged for empty file", () => {
      const input = "";

      const result = transform(input);

      expect(result.changed).toBe(false);
      expect(result.content).toBe(input);
    });
  });

  describe("specific component mappings", () => {
    it("transforms Avatar compound components", () => {
      const input = `import { Avatar } from "flowbite-react";

export function MyComponent() {
  return (
    <Avatar.Group>
      <Avatar />
      <Avatar.Counter total={99} />
    </Avatar.Group>
  );
}`;

      const expected = `import { Avatar, AvatarGroup, AvatarGroupCounter } from "flowbite-react";

export function MyComponent() {
  return (
    <AvatarGroup>
      <Avatar />
      <AvatarGroupCounter total={99} />
    </AvatarGroup>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Breadcrumb compound components", () => {
      const input = `import { Breadcrumb } from "flowbite-react";

export function MyComponent() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    </Breadcrumb>
  );
}`;

      const expected = `import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

export function MyComponent() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
    </Breadcrumb>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Button.Group", () => {
      const input = `import { Button } from "flowbite-react";

export function MyComponent() {
  return (
    <Button.Group>
      <Button>One</Button>
      <Button>Two</Button>
    </Button.Group>
  );
}`;

      const expected = `import { Button, ButtonGroup } from "flowbite-react";

export function MyComponent() {
  return (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Dropdown compound components", () => {
      const input = `import { Dropdown } from "flowbite-react";

export function MyComponent() {
  return (
    <Dropdown label="Options">
      <Dropdown.Header>
        <span>User</span>
      </Dropdown.Header>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown>
  );
}`;

      const expected = `import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";

export function MyComponent() {
  return (
    <Dropdown label="Options">
      <DropdownHeader>
        <span>User</span>
      </DropdownHeader>
      <DropdownItem>Settings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Logout</DropdownItem>
    </Dropdown>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Footer compound components", () => {
      const input = `import { Footer } from "flowbite-react";

export function MyComponent() {
  return (
    <Footer>
      <Footer.Brand href="/">Brand</Footer.Brand>
      <Footer.LinkGroup>
        <Footer.Link href="/about">About</Footer.Link>
      </Footer.LinkGroup>
      <Footer.Divider />
      <Footer.Copyright by="Company" year={2024} />
    </Footer>
  );
}`;

      const expected = `import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export function MyComponent() {
  return (
    <Footer>
      <FooterBrand href="/">Brand</FooterBrand>
      <FooterLinkGroup>
        <FooterLink href="/about">About</FooterLink>
      </FooterLinkGroup>
      <FooterDivider />
      <FooterCopyright by="Company" year={2024} />
    </Footer>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Modal compound components", () => {
      const input = `import { Button, Modal } from "flowbite-react";

export function MyComponent() {
  return (
    <Modal show={true}>
      <Modal.Header>Title</Modal.Header>
      <Modal.Body>Content</Modal.Body>
      <Modal.Footer>
        <Button>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}`;

      const expected = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

export function MyComponent() {
  return (
    <Modal show={true}>
      <ModalHeader>Title</ModalHeader>
      <ModalBody>Content</ModalBody>
      <ModalFooter>
        <Button>OK</Button>
      </ModalFooter>
    </Modal>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Navbar compound components", () => {
      const input = `import { Navbar } from "flowbite-react";

export function MyComponent() {
  return (
    <Navbar>
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}`;

      const expected = `import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function MyComponent() {
  return (
    <Navbar>
      <NavbarBrand href="/">Logo</NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Sidebar compound components", () => {
      const input = `import { Sidebar } from "flowbite-react";

export function MyComponent() {
  return (
    <Sidebar>
      <Sidebar.Logo href="/">Logo</Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/">Home</Sidebar.Item>
          <Sidebar.Collapse label="More">
            <Sidebar.Item href="/sub">Sub</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>CTA Content</Sidebar.CTA>
    </Sidebar>
  );
}`;

      const expected = `import { Sidebar, SidebarCollapse, SidebarCTA, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";

export function MyComponent() {
  return (
    <Sidebar>
      <SidebarLogo href="/">Logo</SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/">Home</SidebarItem>
          <SidebarCollapse label="More">
            <SidebarItem href="/sub">Sub</SidebarItem>
          </SidebarCollapse>
        </SidebarItemGroup>
      </SidebarItems>
      <SidebarCTA>CTA Content</SidebarCTA>
    </Sidebar>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Table compound components", () => {
      const input = `import { Table } from "flowbite-react";

export function MyComponent() {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`;

      const expected = `import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export function MyComponent() {
  return (
    <Table>
      <TableHead>
        <TableHeadCell>Name</TableHeadCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Tabs.Item to TabItem", () => {
      const input = `import { Tabs } from "flowbite-react";

export function MyComponent() {
  return (
    <Tabs>
      <Tabs.Item title="Tab 1">Content 1</Tabs.Item>
      <Tabs.Item title="Tab 2">Content 2</Tabs.Item>
    </Tabs>
  );
}`;

      const expected = `import { TabItem, Tabs } from "flowbite-react";

export function MyComponent() {
  return (
    <Tabs>
      <TabItem title="Tab 1">Content 1</TabItem>
      <TabItem title="Tab 2">Content 2</TabItem>
    </Tabs>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Timeline compound components", () => {
      const input = `import { Timeline } from "flowbite-react";

export function MyComponent() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Feb 2024</Timeline.Time>
          <Timeline.Title>Event</Timeline.Title>
          <Timeline.Body>Description</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}`;

      const expected = `import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";

export function MyComponent() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>Feb 2024</TimelineTime>
          <TimelineTitle>Event</TimelineTitle>
          <TimelineBody>Description</TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Toast.Toggle", () => {
      const input = `import { Toast } from "flowbite-react";

export function MyComponent() {
  return (
    <Toast>
      <div>Message</div>
      <Toast.Toggle />
    </Toast>
  );
}`;

      const expected = `import { Toast, ToastToggle } from "flowbite-react";

export function MyComponent() {
  return (
    <Toast>
      <div>Message</div>
      <ToastToggle />
    </Toast>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms HR compound components", () => {
      const input = `import { HR } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <HR.Icon icon={SomeIcon} />
      <HR.Text text="or" />
      <HR.Square />
      <HR.Trimmed />
    </>
  );
}`;

      const expected = `import { HR, HRIcon, HRSquare, HRText, HRTrimmed } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <HRIcon icon={SomeIcon} />
      <HRText text="or" />
      <HRSquare />
      <HRTrimmed />
    </>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms List and ListGroup compound components", () => {
      const input = `import { List, ListGroup } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <List>
        <List.Item>Item 1</List.Item>
      </List>
      <ListGroup>
        <ListGroup.Item>Item 1</ListGroup.Item>
      </ListGroup>
    </>
  );
}`;

      const expected = `import { List, ListGroup, ListGroupItem, ListItem } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <List>
        <ListItem>Item 1</ListItem>
      </List>
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
      </ListGroup>
    </>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Rating compound components", () => {
      const input = `import { Rating } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
      </Rating>
      <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
    </>
  );
}`;

      const expected = `import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <Rating>
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
      </Rating>
      <RatingAdvanced percentFilled={70}>5 star</RatingAdvanced>
    </>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Clipboard compound components", () => {
      const input = `import { Clipboard } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <Clipboard.WithIcon value="copy this" />
      <Clipboard.WithIconText value="copy that" />
    </>
  );
}`;

      const expected = `import { Clipboard, ClipboardWithIcon, ClipboardWithIconText } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <ClipboardWithIcon value="copy this" />
      <ClipboardWithIconText value="copy that" />
    </>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Drawer compound components", () => {
      const input = `import { Drawer } from "flowbite-react";

export function MyComponent() {
  return (
    <Drawer open={true}>
      <Drawer.Header title="Menu" />
      <Drawer.Items>
        <p>Content</p>
      </Drawer.Items>
    </Drawer>
  );
}`;

      const expected = `import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";

export function MyComponent() {
  return (
    <Drawer open={true}>
      <DrawerHeader title="Menu" />
      <DrawerItems>
        <p>Content</p>
      </DrawerItems>
    </Drawer>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Banner compound components", () => {
      const input = `import { Banner } from "flowbite-react";

export function MyComponent() {
  return (
    <Banner>
      <p>Content</p>
      <Banner.CollapseButton>Close</Banner.CollapseButton>
    </Banner>
  );
}`;

      const expected = `import { Banner, BannerCollapseButton } from "flowbite-react";

export function MyComponent() {
  return (
    <Banner>
      <p>Content</p>
      <BannerCollapseButton>Close</BannerCollapseButton>
    </Banner>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms MegaMenu compound components", () => {
      const input = `import { MegaMenu } from "flowbite-react";

export function MyComponent() {
  return (
    <MegaMenu>
      <MegaMenu.DropdownToggle>Menu</MegaMenu.DropdownToggle>
      <MegaMenu.Dropdown>
        <p>Content</p>
      </MegaMenu.Dropdown>
    </MegaMenu>
  );
}`;

      const expected = `import { MegaMenu, MegaMenuDropdown, MegaMenuDropdownToggle } from "flowbite-react";

export function MyComponent() {
  return (
    <MegaMenu>
      <MegaMenuDropdownToggle>Menu</MegaMenuDropdownToggle>
      <MegaMenuDropdown>
        <p>Content</p>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("transforms Pagination.Button", () => {
      const input = `import { Pagination } from "flowbite-react";

export function MyComponent() {
  return (
    <Pagination>
      <Pagination.Button>1</Pagination.Button>
    </Pagination>
  );
}`;

      const expected = `import { Pagination, PaginationButton } from "flowbite-react";

export function MyComponent() {
  return (
    <Pagination>
      <PaginationButton>1</PaginationButton>
    </Pagination>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });
  });

  describe("edge cases", () => {
    it("handles self-closing compound components", () => {
      const input = `import { Accordion } from "flowbite-react";

export function MyComponent() {
  return <Accordion.Panel />;
}`;

      const expected = `import { Accordion, AccordionPanel } from "flowbite-react";

export function MyComponent() {
  return <AccordionPanel />;
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("handles compound components with props", () => {
      const input = `import { Modal } from "flowbite-react";

export function MyComponent() {
  return <Modal.Header className="custom-class" onClick={handleClick}>Title</Modal.Header>;
}`;

      const expected = `import { Modal, ModalHeader } from "flowbite-react";

export function MyComponent() {
  return <ModalHeader className="custom-class" onClick={handleClick}>Title</ModalHeader>;
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("does not transform non-flowbite compound components", () => {
      const input = `import { Accordion } from "flowbite-react";
import { Other } from "other-lib";

export function MyComponent() {
  return (
    <>
      <Accordion.Panel>Flowbite</Accordion.Panel>
      <Other.Item>Not flowbite</Other.Item>
    </>
  );
}`;

      const expected = `import { Accordion, AccordionPanel } from "flowbite-react";
import { Other } from "other-lib";

export function MyComponent() {
  return (
    <>
      <AccordionPanel>Flowbite</AccordionPanel>
      <Other.Item>Not flowbite</Other.Item>
    </>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("handles already imported simple components without duplicating", () => {
      const input = `import { Accordion, AccordionPanel } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <AccordionPanel>Already simple</AccordionPanel>
      <Accordion.Panel>Will be transformed</Accordion.Panel>
    </>
  );
}`;

      const expected = `import { Accordion, AccordionPanel } from "flowbite-react";

export function MyComponent() {
  return (
    <>
      <AccordionPanel>Already simple</AccordionPanel>
      <AccordionPanel>Will be transformed</AccordionPanel>
    </>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("handles TypeScript generic components", () => {
      const input = `import { Table } from "flowbite-react";

export function MyComponent<T>() {
  return (
    <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Data</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`;

      const expected = `import { Table, TableBody, TableCell, TableRow } from "flowbite-react";

export function MyComponent<T>() {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Data</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });

    it("preserves other code around transformations", () => {
      const input = `import { Accordion } from "flowbite-react";

const someVar = "test";

export function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Accordion>
      <Accordion.Panel>Content</Accordion.Panel>
    </Accordion>
  );
}

export default MyComponent;`;

      const expected = `import { Accordion, AccordionPanel } from "flowbite-react";

const someVar = "test";

export function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Accordion>
      <AccordionPanel>Content</AccordionPanel>
    </Accordion>
  );
}

export default MyComponent;`;

      const result = transform(input);

      expect(result.changed).toBe(true);
      expect(result.content).toBe(expected);
    });
  });

  describe("error handling", () => {
    it("handles invalid JSX gracefully", () => {
      const input = `import { Accordion } from "flowbite-react";

export function MyComponent() {
  return <Accordion.Panel>Unclosed`;

      const result = transform(input);

      expect(result.changed).toBe(false);
      expect(result.content).toBe(input);
    });

    it("handles syntax errors gracefully", () => {
      const input = `import { from "flowbite-react";`;

      const result = transform(input);

      expect(result.changed).toBe(false);
      expect(result.content).toBe(input);
    });
  });

  describe("transformer metadata", () => {
    it("has correct name", () => {
      expect(compoundComponentsTransformer.name).toBe("Compound Components");
    });

    it("has transform function", () => {
      expect(typeof compoundComponentsTransformer.transform).toBe("function");
    });
  });
});
