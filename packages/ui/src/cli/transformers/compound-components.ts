import MagicString from "magic-string";
import { parseSync, Visitor } from "oxc-parser";
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

interface SpecifierInfo {
  name: string;
  originalText: string;
}

interface ImportInfo {
  start: number;
  end: number;
  specifiersStart: number;
  specifiersEnd: number;
  specifiers: SpecifierInfo[];
  source: string;
}

interface Replacement {
  start: number;
  end: number;
  newText: string;
}

function transform(content: string): { content: string; changed: boolean } {
  try {
    const result = parseSync("file.tsx", content);

    if (result.errors.length > 0) {
      console.warn("Warning: Parsing errors detected, skipping transformation");
      return { content, changed: false };
    }

    const flowbiteImportSpecifiers: string[] = [];
    const flowbiteImportInfos: ImportInfo[] = [];
    const replacements: Replacement[] = [];
    const newImportsToAdd: Set<string> = new Set();

    const importVisitor = new Visitor({
      ImportDeclaration(node) {
        if (
          node.source?.value === "flowbite-react" ||
          (typeof node.source?.value === "string" && node.source.value.startsWith("flowbite-react/components/"))
        ) {
          if (Array.isArray(node.specifiers) && node.specifiers.every((s) => s.type === "ImportSpecifier")) {
            const importText = content.slice(node.start, node.end);
            const braceStart = importText.indexOf("{");
            const braceEnd = importText.lastIndexOf("}");

            if (braceStart !== -1 && braceEnd !== -1) {
              const importInfo: ImportInfo = {
                start: node.start,
                end: node.end,
                specifiersStart: node.start + braceStart + 1,
                specifiersEnd: node.start + braceEnd,
                specifiers: [],
                source: node.source?.value as string,
              };

              node.specifiers.forEach((specifier) => {
                if (specifier.imported?.type === "Identifier") {
                  flowbiteImportSpecifiers.push(specifier.imported.name);
                  importInfo.specifiers.push({
                    name: specifier.imported.name,
                    originalText: content.slice(specifier.start, specifier.end),
                  });
                }
              });

              flowbiteImportInfos.push(importInfo);
            }
          }
        }
      },
    });

    importVisitor.visit(result.program);

    const jsxVisitor = new Visitor({
      JSXMemberExpression(node) {
        if (
          node.object?.type === "JSXIdentifier" &&
          node.property?.type === "JSXIdentifier" &&
          flowbiteImportSpecifiers.includes(node.object.name)
        ) {
          const compoundName = `${node.object.name}.${node.property.name}`;
          const simpleName = COMPOUND_TO_SIMPLE_MAP[compoundName];

          if (simpleName && flowbiteImportInfos.length > 0) {
            replacements.push({
              start: node.start,
              end: node.end,
              newText: simpleName,
            });

            if (!flowbiteImportSpecifiers.includes(simpleName) && !newImportsToAdd.has(simpleName)) {
              newImportsToAdd.add(simpleName);
            }
          }
        }
      },
    });

    jsxVisitor.visit(result.program);

    if (replacements.length === 0) {
      return { content, changed: false };
    }

    const finalImportInfo =
      flowbiteImportInfos.find((info) => info.source === "flowbite-react") || flowbiteImportInfos[0] || null;
    const s = new MagicString(content);

    const sortedReplacements = [...replacements].sort((a, b) => b.start - a.start);
    for (const { start, end, newText } of sortedReplacements) {
      s.overwrite(start, end, newText);
    }

    if (newImportsToAdd.size > 0 && finalImportInfo) {
      const existingSpecifierTexts = finalImportInfo.specifiers.map((s) => s.originalText);
      const existingNames = new Set(finalImportInfo.specifiers.map((s) => s.name));
      const newSpecifierNames = [...newImportsToAdd].filter((name) => !existingNames.has(name));
      const allSpecifiers = [
        ...existingSpecifierTexts.map((text, i) => ({ text, name: finalImportInfo.specifiers[i].name })),
        ...newSpecifierNames.map((name) => ({ text: name, name })),
      ].sort((a, b) => a.name.localeCompare(b.name));
      const originalImportText = content.slice(finalImportInfo.specifiersStart, finalImportInfo.specifiersEnd);
      const isMultiline = originalImportText.includes("\n");

      let newSpecifiersText: string;
      if (isMultiline) {
        newSpecifiersText = "\n  " + allSpecifiers.map((s) => s.text).join(",\n  ") + ",\n";
      } else {
        newSpecifiersText = " " + allSpecifiers.map((s) => s.text).join(", ") + " ";
      }

      s.overwrite(finalImportInfo.specifiersStart, finalImportInfo.specifiersEnd, newSpecifiersText);
    }

    return {
      content: s.toString(),
      changed: true,
    };
  } catch (_error) {
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
