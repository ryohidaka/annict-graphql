# Migrating from annict.js

[annict.js](https://www.npmjs.com/package/annict) is a REST API client and is no longer maintained. Annict's REST API is deprecated in favor of GraphQL, so this package (`annict-graphql`) provides a similar namespace-based API on top of the GraphQL endpoint.

## Key differences

### Not a drop-in replacement

`annict-graphql` is a new implementation, not a subclass or fork of `annict.js`. Method signatures are similar but not identical.

### Parameters use camelCase

Parameters match the GraphQL schema (e.g. `filter_title` → `titles`, `episode_id` → `episodeId`).

### Ratings use an enum, not a number

The numeric `rating` field is replaced by `ratingState`, since the GraphQL API does not expose a numeric rating field on records.

### IDs are GraphQL global IDs

IDs are base64-encoded global IDs, not the plain integer IDs used by the REST API.

### `Me.Status.create` becomes `Me.Status.update`

This matches the GraphQL mutation name.

### Delete mutations return the parent object

`Me.Record.delete` and `Me.Review.delete` return the parent object (`episode` / `work`), not the deleted record/review itself — this matches the shape of `DeleteRecordPayload` / `DeleteReviewPayload` in the GraphQL schema.

### No equivalent for `Me.Work.get`

annict.js's `Me.Work.get` (list works by status) has no direct equivalent. Use `viewerStatusState` on `AnnictWork` in combination with `Work.search()`.

### No equivalent for `Me.Program.get`

annict.js's `Me.Program.get` (broadcast schedule) is not covered by the current GraphQL API surface used here.

### No OAuth support

This client only supports personal access tokens.

## Setup

```typescript
// Before (annict.js)
var Annict = require("annict").default;
var annict = new Annict();
annict.client.setToken(accessToken);
```

```typescript
// After (annict-graphql)
import { AnnictClient } from "annict-graphql";
const annict = new AnnictClient(accessToken);
```

## Method mapping

| annict.js (REST)                                       | annict-graphql (GraphQL)                                         |
| ------------------------------------------------------ | ---------------------------------------------------------------- |
| `Work.get({ filter_title })`                           | `Work.search({ titles })`                                        |
| `Episode.get({ filter_ids })`                          | `Episode.search({ annictIds })`                                  |
| `Me.Record.create({ episode_id, comment, rating })`    | `Me.Record.create({ episodeId, comment, ratingState })`          |
| `Me.Record.update({ id, rating })`                     | `Me.Record.update({ recordId, ratingState })`                    |
| `Me.Record.delete(id)`                                 | `Me.Record.delete(recordId)` (returns parent episode)            |
| `Me.Status.create({ work_id, kind })`                  | `Me.Status.update({ workId, state })`                            |
| — (REST `/v1/users`, not wrapped by annict.js)         | `User.get({ username })`                                         |
| — (REST `/v1/reviews`, not wrapped by annict.js)       | `Me.Review.create/update/delete`                                 |
| — (REST `/v1/characters`, not wrapped by annict.js)    | `Character.search({ names })`                                    |
| — (REST `/v1/people`, not wrapped by annict.js)        | `Person.search({ names })`                                       |
| — (REST `/v1/organizations`, not wrapped by annict.js) | `Organization.search({ names })`                                 |
| —                                                      | `Viewer.get()`                                                   |
| —                                                      | `Node.get(id)`, `Node.getMany(ids)`                              |
| `Me.Work.get({ filter_status })`                       | No direct equivalent (use `Work.search()` + `viewerStatusState`) |
| `Me.Program.get()` (broadcast schedule)                | Not covered                                                      |
| `OAuth.token(...)`                                     | Not covered (personal access tokens only)                        |

## Example

```typescript
// Before (annict.js)
annict.Work.get({ filter_title: "shirobako" })
  .then((res) => res.json())
  .then((works) => console.log(works));

annict.Me.Record.create({
  episode_id: 5013,
  comment: "コメント",
  rating: 5.0,
});
```

```typescript
// After (annict-graphql)
import { RATING_STATE } from "annict-graphql";

const works = await annict.Work.search({ titles: ["shirobako"] });
console.log(works);

await annict.Me.Record.create({
  episodeId: "RXBpc29kZS01MDEz",
  comment: "コメント",
  ratingState: RATING_STATE.Great,
});
```
