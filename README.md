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

More examples for every endpoint are available in [`examples/`](./examples).

### Viewer

- [`Viewer.get()`](./examples/get-viewer.ts)
- [`Viewer.library()`](./examples/get-viewer-library.ts)
- [`Viewer.records()`](./examples/get-viewer-records.ts)
- [`Viewer.works()`](./examples/get-viewer-works.ts)
- [`Viewer.programs()`](./examples/get-viewer-programs.ts)
- [`Viewer.followers()`](./examples/get-viewer-followers.ts)
- [`Viewer.following()`](./examples/get-viewer-following.ts)

### User

- [`User.get()`](./examples/get-user.ts)
- [`User.library()`](./examples/get-user-library.ts)
- [`User.records()`](./examples/get-user-records.ts)
- [`User.works()`](./examples/get-user-works.ts)
- [`User.programs()`](./examples/get-user-programs.ts)
- [`User.followers()`](./examples/get-user-followers.ts)
- [`User.following()`](./examples/get-user-following.ts)

### Search and node lookup

- [`Node.get()` / `Node.getMany()`](./examples/get-node.ts)
- [`Work.search()`](./examples/search-works.ts)
- [`Episode.search()`](./examples/search-episodes.ts)
- [`Character.search()`](./examples/search-characters.ts)
- [`Person.search()`](./examples/search-people.ts)
- [`Organization.search()`](./examples/search-organizations.ts)

### Mutations

- [`Me.Record`](./examples/create-record.ts), [`update`](./examples/update-record.ts), [`delete`](./examples/delete-record.ts)
- [`Me.Status.update()`](./examples/update-status.ts)
- [`Me.Review`](./examples/create-review.ts), [`update`](./examples/update-review.ts), [`delete`](./examples/delete-review.ts)

### OAuth

- [`AnnictOAuth`](./examples/oauth-flow.ts)

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
