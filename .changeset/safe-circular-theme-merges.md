---
"flowbite-react": patch
---

Upgrade DeepmergeTS to 8.0.0 to fix stack exhaustion when merging circular records (CVE-2026-40345), while preserving last-value-wins Map merging in the theme merge helper.
