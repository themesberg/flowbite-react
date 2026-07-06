---
"flowbite-react": patch
---

Fix `Datepicker` decades view navigating to the wrong decade

Clicking a decade computed the new view date relative to the selected date instead of the clicked decade, so the years view often displayed a different decade than the one clicked (and did nothing when no date was selected). The clicked decade is now used directly, matching the behavior of the years view.
