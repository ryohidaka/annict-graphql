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

| Namespace                       | Example                                   |
| ------------------------------- | ----------------------------------------- |
| `Viewer.get()`                  | [get-viewer.ts](./examples/get-viewer.ts) |
| `User.get()`                    | [get-user.ts](./examples/get-user.ts)     |
| `Node.get()` / `Node.getMany()` | [get-node.ts](./examples/get-node.ts)     |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
