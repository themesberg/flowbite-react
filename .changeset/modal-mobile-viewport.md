---
"flowbite-react": patch
---

fix(modal): resolve mobile viewport height and centering issues

Replace `h-screen` with `h-full` and add `flex flex-col` to modal
content for proper layout on mobile viewports.
