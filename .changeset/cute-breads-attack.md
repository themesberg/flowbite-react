---
"flowbite-react": patch
---

refactor(setup-init): relax checks on React imports due to IDE formatters removing it if not necessary

- filter out `import React from "react"` from the AST when parsing current and new content
