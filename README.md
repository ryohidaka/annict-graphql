# annict-graphql

[English](./README.md) | [日本語](./README.ja.md)

[![NPM Version](https://img.shields.io/npm/v/annict-graphql?logo=npm)](https://www.npmjs.com/package/annict-graphql)
[![CI](https://github.com/ryohidaka/annict-graphql/actions/workflows/ci.yml/badge.svg)](https://github.com/ryohidaka/annict-graphql/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ryohidaka/annict-graphql/graph/badge.svg?token=bEfNqlWhEr)](https://codecov.io/gh/ryohidaka/annict-graphql)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/ryohidaka/annict-graphql)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[Annict](https://annict.com) GraphQL API client library for JavaScript

> [!WARNING]
> The Annict GraphQL API is currently in beta.

## Install

```bash
npm install annict-graphql
```

## Usage

```typescript
import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient("<ANNICT_ACCESS_TOKEN>");

const viewer = await annict.Viewer.get();
console.log(`${viewer.name} (@${viewer.username})`);
// Output:
// Shimba, Koji (@shimbaco)
```

More examples for every endpoint are available in [`examples/`](./examples):

| Namespace                       | Example                                                       |
| ------------------------------- | ------------------------------------------------------------- |
| `Viewer.get()`                  | [get-viewer.ts](./examples/get-viewer.ts)                     |
| `Viewer.library()`              | [get-viewer-library.ts](./examples/get-viewer-library.ts)     |
| `Viewer.records()`              | [get-viewer-records.ts](./examples/get-viewer-records.ts)     |
| `Viewer.works()`                | [get-viewer-works.ts](./examples/get-viewer-works.ts)         |
| `Viewer.programs()`             | [get-viewer-programs.ts](./examples/get-viewer-programs.ts)   |
| `User.get()`                    | [get-user.ts](./examples/get-user.ts)                         |
| `User.library()`                | [get-user-library.ts](./examples/get-user-library.ts)         |
| `User.records()`                | [get-user-records.ts](./examples/get-user-records.ts)         |
| `User.works()`                  | [get-user-works.ts](./examples/get-user-works.ts)             |
| `User.programs()`               | [get-user-programs.ts](./examples/get-user-programs.ts)       |
| `Node.get()` / `Node.getMany()` | [get-node.ts](./examples/get-node.ts)                         |
| `Work.search()`                 | [search-works.ts](./examples/search-works.ts)                 |
| `Episode.search()`              | [search-episodes.ts](./examples/search-episodes.ts)           |
| `Character.search()`            | [search-characters.ts](./examples/search-characters.ts)       |
| `Person.search()`               | [search-people.ts](./examples/search-people.ts)               |
| `Organization.search()`         | [search-organizations.ts](./examples/search-organizations.ts) |
| `Me.Record.create()`            | [create-record.ts](./examples/create-record.ts)               |
| `Me.Record.update()`            | [update-record.ts](./examples/update-record.ts)               |
| `Me.Record.delete()`            | [delete-record.ts](./examples/delete-record.ts)               |
| `Me.Status.update()`            | [update-status.ts](./examples/update-status.ts)               |
| `Me.Review.create()`            | [create-review.ts](./examples/create-review.ts)               |
| `Me.Review.update()`            | [update-review.ts](./examples/update-review.ts)               |
| `Me.Review.delete()`            | [delete-review.ts](./examples/delete-review.ts)               |
| `AnnictOAuth`                   | [oauth-flow.ts](./examples/oauth-flow.ts)                     |

## OAuth

For applications acting on behalf of other users, use `AnnictOAuth` to
implement the [OAuth 2.0 flow](https://developers.annict.com/docs/authentication/oauth)
instead of a personal access token.

```typescript
import { AnnictOAuth, AnnictClient } from "annict-graphql";

const oauth = new AnnictOAuth({
  clientId: "<CLIENT_ID>",
  clientSecret: "<CLIENT_SECRET>",
  redirectUri: "urn:ietf:wg:oauth:2.0:oob",
});

const authorizeUrl = oauth.getAuthorizeUrl({ scope: "read write" });
// redirect the user to authorizeUrl, then:

const token = await oauth.token({ code: "<AUTH_CODE>" });
const annict = new AnnictClient(token.accessToken);
```

See [oauth-flow.ts](./examples/oauth-flow.ts) for a full example.

## Migrating from annict.js

If you're coming from [annict.js](https://www.npmjs.com/package/annict) (a REST API client, no longer maintained), see [MIGRATION.md](./MIGRATION.md) for a mapping of methods and parameters.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
