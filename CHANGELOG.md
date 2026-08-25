# annict-graphql

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
