# annict-graphql

## 1.0.0-beta.16

### Minor Changes

- [`caa7287`](https://github.com/ryohidaka/annict-graphql/commit/caa72877fab37e168a2b561f21d1285201933bdf) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Viewer.record()` and `User.record()` for fetching user records.

## 1.0.0-beta.15

### Minor Changes

- [`254972e`](https://github.com/ryohidaka/annict-graphql/commit/254972eb2af899c441e7e3b7b8fa8f3ff4a74436) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Viewer.library()` and `User.library()` for fetching library entries.

## 1.0.0-beta.14

### Minor Changes

- [`703284a`](https://github.com/ryohidaka/annict-graphql/commit/703284a496d05aca0a2078f7c40cb067e30c7805) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `AnnictOAuth` for OAuth authorization, token exchange, token inspection, and revocation.

## 1.0.0-beta.13

### Major Changes

- [`39830e5`](https://github.com/ryohidaka/annict-graphql/commit/39830e5711b1e9ed50bfb4af09a640b9a8e8f4d4) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Prepare the stable 1.0.0 release.

## 0.1.0-beta.12

### Patch Changes

- [`c738a30`](https://github.com/ryohidaka/annict-graphql/commit/c738a3044cc5f04d39a8c3c724c0c71fb3b0acbb) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Improve documentation and automate GraphQL code generation checks.

## 0.1.0-beta.11

### Minor Changes

- [`6c223ab`](https://github.com/ryohidaka/annict-graphql/commit/6c223ab773c441fee8aa17fff77a5c42c03355e2) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Me.Review.create()`, `Me.Review.update()`, and `Me.Review.delete()` for managing reviews.
  
  Note: `Me.Review.update()` requires all five rating fields (unlike `create`, where they're optional), matching `UpdateReviewInput` in the GraphQL schema. `Me.Review.delete()` returns the parent work, not the deleted review.

## 0.1.0-beta.10

### Minor Changes

- [`1ee568a`](https://github.com/ryohidaka/annict-graphql/commit/1ee568a1416f15f314d9e0837d22081efb1c5e8b) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Me.Status.update()` for updating a work's watch status via `STATUS_STATE`.

## 0.1.0-beta.9

### Minor Changes

- [`38d3b76`](https://github.com/ryohidaka/annict-graphql/commit/38d3b76926b15f29834b9d0b3ec1721f1a8c3914) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Me.Record.create()`, `Me.Record.update()`, and `Me.Record.delete()` for managing watch records.
  
  Note: `Me.Record.delete()` returns the parent episode, not the deleted record — this matches the shape of `DeleteRecordPayload` in the GraphQL schema.

## 0.1.0-beta.8

### Minor Changes

- [`7723901`](https://github.com/ryohidaka/annict-graphql/commit/7723901029859ebc1cb8d763b07b394504a0699d) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Organization.search()` for searching organizations by name or Annict ID, with sort order support via `ORGANIZATION_ORDER_FIELD`.

## 0.1.0-beta.7

### Minor Changes

- [`f02c657`](https://github.com/ryohidaka/annict-graphql/commit/f02c65790cce615d66f1a6c903eecf8bc9769a88) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Person.search()` for searching people by name or Annict ID, with sort order support via `PERSON_ORDER_FIELD`.

## 0.1.0-beta.6

### Minor Changes

- [`deb068f`](https://github.com/ryohidaka/annict-graphql/commit/deb068fb3c7594cea789a16e0fd73a055f28a5d0) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Character.search()` for searching characters by name or Annict ID, with sort order support via `CHARACTER_ORDER_FIELD`.

## 0.1.0-beta.5

### Minor Changes

- [`4e8ab0f`](https://github.com/ryohidaka/annict-graphql/commit/4e8ab0ff65cb368fdba9967c5a7ef9b7795e575e) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Episode.search()` for searching episodes by Annict ID, with sort order support via `EPISODE_ORDER_FIELD`.

## 0.1.0-beta.4

### Minor Changes

- [`62bddcf`](https://github.com/ryohidaka/annict-graphql/commit/62bddcfbafebb85df0c293b9c9afb340b00fa3dd) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Work.search()` for searching works by title, season, or Annict ID, with sort order support via `WORK_ORDER_FIELD`.

## 0.1.0-beta.3

### Patch Changes

- [`04ce20b`](https://github.com/ryohidaka/annict-graphql/commit/04ce20b88a06db0be69719716b51ad15c60f38f5) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Split generated GraphQL types into a dedicated file and reuse them in operation types to prevent enum conflicts.

## 0.1.0-beta.2

### Minor Changes

- [`13d43a8`](https://github.com/ryohidaka/annict-graphql/commit/13d43a826a842b5bc804b7fbf678bc096ba3464a) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `Node.get()` and `Node.getMany()` for fetching any object by its global ID.

## 0.1.0-beta.1

### Minor Changes

- [`d5b3764`](https://github.com/ryohidaka/annict-graphql/commit/d5b3764e33fda497ceb8524426935c4a4dca80da) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Add `User.get()` for fetching a user by username.

## 0.1.0-beta.0

### Minor Changes

- [`2e9005b`](https://github.com/ryohidaka/annict-graphql/commit/2e9005befb5e6f3ecdd6d02273f39133a2bc0dad) Thanks [@ryohidaka](https://github.com/ryohidaka)! - Initial release of `annict-graphql`, a typed GraphQL client for the Annict API.
  
  **Note:** despite the `minor` bump, this is the first public release. The package is
  in beta (`0.x.y-beta.N`), matching the [Annict GraphQL API](https://developers.annict.com/docs/graphql-api/beta)
  status.
  
  #### Added
  
  - `AnnictClient` — GraphQL client built on `graphql-request`, authenticated with a
    personal access token
  - `Viewer.get()` — fetches the authenticated user
  - Types generated directly from the live Annict GraphQL schema via
    `graphql-codegen`
