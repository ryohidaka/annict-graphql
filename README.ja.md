# annict-graphql

[English](./README.md) | [日本語](./README.ja.md)

![NPM Version](https://img.shields.io/npm/v/annict-graphql?logo=npm)
[![CI](https://github.com/ryohidaka/annict-graphql/actions/workflows/ci.yml/badge.svg)](https://github.com/ryohidaka/annict-graphql/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ryohidaka/annict-graphql/graph/badge.svg?token=bEfNqlWhEr)](https://codecov.io/gh/ryohidaka/annict-graphql)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/ryohidaka/annict-graphql)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

[Annict](https://annict.com) の GraphQL API を利用する JavaScript クライアントライブラリです。

> [!WARNING]
> Annict GraphQL API は現在ベータ版です。

## インストール

```bash
npm install annict-graphql
```

## 使い方

```typescript
import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient("<ANNICT_ACCESS_TOKEN>");

const viewer = await annict.Viewer.get();
console.log(`${viewer.name} (@${viewer.username})`);
// 出力:
// Shimba, Koji (@shimbaco)
```

すべてのエンドポイントの使用例は [`examples/`](./examples) にあります。

| Namespace                       | Example                                                       |
| ------------------------------- | ------------------------------------------------------------- |
| `Viewer.get()`                  | [get-viewer.ts](./examples/get-viewer.ts)                     |
| `Viewer.library()`              | [get-viewer-library.ts](./examples/get-viewer-library.ts)     |
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
| `AnnictOAuth`                   | [oauth-flow.ts](./examples/oauth-flow.ts)                     |

## OAuth

他のユーザーの代わりにアプリケーションから操作する場合は、個人用アクセストークンではなく、`AnnictOAuth` を使って
[OAuth 2.0 フロー](https://developers.annict.com/docs/authentication/oauth)を実装します。

```typescript
import { AnnictOAuth, AnnictClient } from "annict-graphql";

const oauth = new AnnictOAuth({
  clientId: "<CLIENT_ID>",
  clientSecret: "<CLIENT_SECRET>",
  redirectUri: "urn:ietf:wg:oauth:2.0:oob",
});

const authorizeUrl = oauth.getAuthorizeUrl({ scope: "read write" });
// authorizeUrl にユーザーを誘導し、その後:

const token = await oauth.token({ code: "<AUTH_CODE>" });
const annict = new AnnictClient(token.accessToken);
```

[oauth-flow.ts](./examples/oauth-flow.ts) に完全なサンプルがあります。

## annict.js からの移行

メンテナンスが終了している REST API クライアント [annict.js](https://www.npmjs.com/package/annict) から移行する場合は、メソッドとパラメーターの対応表を [MIGRATION.md](./MIGRATION.md) で確認できます。

## コントリビュート

[CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。

## ライセンス

[MIT](./LICENSE)
