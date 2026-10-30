---
"flowbite-react": patch
---

fix(datepicker): display raw day numbers for all locales

Replace locale-formatted day labels with `Date.getDate()` to avoid
language-specific suffixes (e.g. "日" in Japanese) in calendar cells.
