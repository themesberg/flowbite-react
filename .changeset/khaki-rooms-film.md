---
"flowbite-react": patch
---

Shrink final bundle size from `42 MB` to `8.38 MB`

### Changes

- [x] drop AST parsers in favor of `oxc-parser`
- [x] update packages
- [x] update `plugin/modernjs` to the new API

### before

<img width="310" height="186" alt="Screenshot 2026-02-05 at 12 02 11" src="https://github.com/user-attachments/assets/8990817f-3f71-45c4-9c0d-fdd8258c74dc" />

### after

<img width="316" height="188" alt="Screenshot 2026-02-05 at 12 02 03" src="https://github.com/user-attachments/assets/5bf94a07-d73f-43b7-8460-114505a3bbb5" />
