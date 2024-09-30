---
"flowbite-react": patch
---

### Datepicker Component Updates

The Datepicker has been enhanced with several improvements:

1. **Controlled Inputs**: Supports controlled inputs via `value` and `defaultValue` props, enabling programmatic date updates without manual clicks.
2. **State Management**: Optimized internal state management using `useMemo` and `useEffect`.
3. **Documentation**: Added sections in documentation for controlled usage and handling `null` values.
4. **Test Cases**: Comprehensive unit tests added for date handling.
5. **Storybook**: Improved stories, showcasing different states (controlled/uncontrolled).

### Files Updated:

- `apps/web/content/docs/components/datepicker.mdx`: Added controlled usage section.
- `Datepicker.spec.tsx`: Added unit tests.
- `Datepicker.stories.tsx`: Enhanced story variants.
- `Datepicker.tsx`: Expanded `DatepickerProps`.
- `DatepickerContext.tsx`: Adjusted `selectedDate` type.
- `Decades.tsx`, `Months.tsx`, `Years.tsx`: Updated logic to check for `selectedDate`.
