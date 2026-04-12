---
"flowbite-react": minor
---

Add `getPageUrl` prop to Pagination for SEO-friendly anchor links

### Changes

- [x] add `getPageUrl` prop that renders pagination buttons as `<a>` elements instead of `<button>` elements
- [x] use discriminated union types for type-safe button/anchor variants
- [x] make `onPageChange` optional when `getPageUrl` is provided
- [x] convert `PaginationNavigation` to use `forwardRef` for consistency
- [x] add tests for anchor-based pagination
