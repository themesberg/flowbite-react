---
"flowbite-react": patch
---

Support multiple dropdowns inside a single `<MegaMenu>`

### Changes

- [x] pair each `<MegaMenuDropdownToggle>` with its own `<MegaMenuDropdown>` by declaration order, instead of always resolving the first dropdown of the navbar
- [x] close the other dropdowns of a mega menu when one is opened
- [x] export `MegaMenuContext`, `useMegaMenuContext` and `MegaMenuContextValue`
- [x] stop calling hooks conditionally in `<MegaMenuDropdown>`
