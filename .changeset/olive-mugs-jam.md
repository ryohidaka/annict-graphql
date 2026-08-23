---
"annict-graphql": minor
---

Initial release of `annict-graphql`, a typed GraphQL client for the Annict API.

**Note:** despite the `minor` bump, this is the first public release. The package is
in beta (`0.x.y-beta.N`), matching the [Annict GraphQL API](https://developers.annict.com/docs/graphql-api/beta)
status.

#### Added

- `AnnictClient` — GraphQL client built on `graphql-request`, authenticated with a
  personal access token
- `Viewer.get()` — fetches the authenticated user
- Types generated directly from the live Annict GraphQL schema via
  `graphql-codegen`
