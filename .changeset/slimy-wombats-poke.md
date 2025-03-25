---
"flowbite-react": patch
---

add new `migrate` CLI command

- add new transformer from compound components to singular imports

  ```tsx
  import { Button } from "flowbite-react";

  // from
  <Button.Group>
    <Button>tab 1</Button>
    <Button>tab 2</Button>
    <Button>tab 3</Button>
  </Button.Group>

  // to
  import { Button, ButtonGroup } from "flowbite-react";

  <ButtonGroup>
    <Button>tab 1</Button>
    <Button>tab 2</Button>
    <Button>tab 3</Button>
  </ButtonGroup>
  ```
