# annict-graphql

![NPM Version](https://img.shields.io/npm/v/annict-graphql?logo=npm)
[![CI](https://github.com/ryohidaka/annict-graphql/actions/workflows/ci.yml/badge.svg)](https://github.com/ryohidaka/annict-graphql/actions/workflows/ci.yml)

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
| `User.get()`                    | [get-user.ts](./examples/get-user.ts)                         |
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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
