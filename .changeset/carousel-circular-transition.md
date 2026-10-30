---
"flowbite-react": patch
---

fix(carousel): seamless circular transition between last and first slides

### Changes

- [x] implement circular carousel using clone-based technique for smooth wrap-around
- [x] extract animation duration to named constant
- [x] prevent memory leak with timeout cleanup on unmount
- [x] guard initialization to prevent reset on dynamic children updates
