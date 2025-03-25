// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { parse } from "@typescript-eslint/typescript-estree";
import { visit } from "ast-types";
import * as recast from "recast";
import type { Transformer } from "../commands/migrate";

const COMPOUND_TO_SIMPLE_MAP: Record<string, string> = {
  // Accordion
  "Accordion.Panel": "AccordionPanel",
  "Accordion.Title": "AccordionTitle",
  "Accordion.Content": "AccordionContent",

  // Avatar
  "Avatar.Group": "AvatarGroup",
  "Avatar.Counter": "AvatarGroupCounter",

  // Banner
  "Banner.CollapseButton": "BannerCollapseButton",

  // Breadcrumb
  "Breadcrumb.Item": "BreadcrumbItem",

  // Button
  "Button.Group": "ButtonGroup",

  // Clipboard
  "Clipboard.WithIcon": "ClipboardWithIcon",
  "Clipboard.WithIconText": "ClipboardWithIconText",

  // Drawer
  "Drawer.Header": "DrawerHeader",
  "Drawer.Items": "DrawerItems",

  // Dropdown
  "Dropdown.Item": "DropdownItem",
  "Dropdown.Header": "DropdownHeader",
  "Dropdown.Divider": "DropdownDivider",

  // Footer
  "Footer.Brand": "FooterBrand",
  "Footer.Copyright": "FooterCopyright",
  "Footer.Divider": "FooterDivider",
  "Footer.Icon": "FooterIcon",
  "Footer.Link": "FooterLink",
  "Footer.LinkGroup": "FooterLinkGroup",
  "Footer.Title": "FooterTitle",

  // HR
  "HR.Icon": "HRIcon",
  "HR.Square": "HRSquare",
  "HR.Text": "HRText",
  "HR.Trimmed": "HRTrimmed",

  // List
  "List.Item": "ListItem",
  "ListGroup.Item": "ListGroupItem",

  // MegaMenu
  "MegaMenu.Dropdown": "MegaMenuDropdown",
  "MegaMenu.DropdownToggle": "MegaMenuDropdownToggle",

  // Modal
  "Modal.Header": "ModalHeader",
  "Modal.Body": "ModalBody",
  "Modal.Footer": "ModalFooter",

  // Navbar
  "Navbar.Brand": "NavbarBrand",
  "Navbar.Collapse": "NavbarCollapse",
  "Navbar.Link": "NavbarLink",
  "Navbar.Toggle": "NavbarToggle",

  // Pagination
  "Pagination.Button": "PaginationButton",

  // Rating
  "Rating.Star": "RatingStar",
  "Rating.Advanced": "RatingAdvanced",

  // Sidebar
  "Sidebar.CTA": "SidebarCTA",
  "Sidebar.Collapse": "SidebarCollapse",
  "Sidebar.Item": "SidebarItem",
  "Sidebar.Items": "SidebarItems",
  "Sidebar.ItemGroup": "SidebarItemGroup",
  "Sidebar.Logo": "SidebarLogo",

  // Table
  "Table.Head": "TableHead",
  "Table.Body": "TableBody",
  "Table.Row": "TableRow",
  "Table.Cell": "TableCell",
  "Table.HeadCell": "TableHeadCell",

  // Tabs
  "Tabs.Item": "TabItem",

  // Timeline
  "Timeline.Item": "TimelineItem",
  "Timeline.Point": "TimelinePoint",
  "Timeline.Content": "TimelineContent",
  "Timeline.Time": "TimelineTime",
  "Timeline.Title": "TimelineTitle",
  "Timeline.Body": "TimelineBody",

  // Toast
  "Toast.Toggle": "ToastToggle",
};

function transform(content: string): { content: string; changed: boolean } {
  try {
    const ast = recast.parse(content, {
      parser: {
        parse: (source: string) =>
          parse(source, {
            jsx: true,
            loc: true,
            range: true,
            tokens: true,
            errorOnUnknownASTType: false,
            tolerant: true,
            useJSXTextNode: true,
          }),
      },
    });

    let flowbiteImportPath = null;
    const flowbiteImportSpecifiers = [];
    let hasChanges = false;

    visit(ast, {
      visitImportDeclaration(path) {
        const { node } = path;
        if (
          node.type === "ImportDeclaration" &&
          node.source.value === "flowbite-react" &&
          Array.isArray(node.specifiers) &&
          node.specifiers.every((s) => s.type === "ImportSpecifier")
        ) {
          flowbiteImportPath = node;
          node.specifiers.forEach((specifier) => {
            if (specifier.imported.type === "Identifier") {
              flowbiteImportSpecifiers.push(specifier.imported.name);
            }
          });
        }
        return false;
      },
    });

    visit(ast, {
      visitJSXMemberExpression(path) {
        const { node } = path;
        if (
          node.object.type === "JSXIdentifier" &&
          node.property.type === "JSXIdentifier" &&
          flowbiteImportSpecifiers.includes(node.object.name)
        ) {
          const compoundName = `${node.object.name}.${node.property.name}`;
          const simpleName = COMPOUND_TO_SIMPLE_MAP[compoundName];

          if (simpleName && flowbiteImportPath) {
            // Replace the compound component with the simple one
            path.replace(recast.types.builders.jsxIdentifier(simpleName));
            hasChanges = true;

            // Add the simple component to imports if not already present
            if (!flowbiteImportSpecifiers.includes(simpleName)) {
              flowbiteImportSpecifiers.push(simpleName);
              flowbiteImportPath.specifiers.push(
                recast.types.builders.importSpecifier(
                  recast.types.builders.identifier(simpleName),
                  recast.types.builders.identifier(simpleName),
                ),
              );
            }
          }
        }
        return false;
      },
    });

    // Sort import specifiers alphabetically
    if (flowbiteImportPath) {
      flowbiteImportPath.specifiers.sort((a, b) => {
        if (a.imported.type === "Identifier" && b.imported.type === "Identifier") {
          return a.imported.name.localeCompare(b.imported.name);
        }
        return 0;
      });
    }

    const transformedContent = recast.print(ast).code;
    return {
      content: transformedContent,
      changed: hasChanges,
    };
  } catch (_error) {
    // If parsing fails, return the original content unchanged
    console.warn("Warning: Could not parse file, skipping transformation");
    return {
      content,
      changed: false,
    };
  }
}

export const compoundComponentsTransformer: Transformer = {
  name: "Compound Components",
  transform,
};
