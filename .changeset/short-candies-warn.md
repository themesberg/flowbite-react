---
"flowbite-react": patch
---

Fix `nextjs` plugin to work on all environments

## Changes

- fix(ui): `nextjs` plugin to run properly on `NODE_ENV` environments: `production`, `development` and `test`
- log file writes in `dev`

## Breaking changes

`withFlowbiteReact` now always returns async configuration (see: [Async Configuration](https://nextjs.org/docs/app/api-reference/config/next-config-js#async-configuration)) so make sure to wrap any other HOC (higher-order-functions) such as `withContentlayer` because most of them do not forward pass async config arguments (eg: `phase, options`)

```tsx
// ❌ not working
export default withContentlayer(withFlowbiteReact(nextConfig));

// ✅ working
export default withFlowbiteReact(withContentlayer(nextConfig));
```
