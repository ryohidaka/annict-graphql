# Contributing

Thank you for contributing to `annict-graphql`.

## Development

- Install dependencies:

```bash
vp install
```

- Run the unit tests:

```bash
vp test
```

- Run formatting, linting, and type checks:

```bash
vp check
```

- Build the library:

```bash
vp pack
```

## Commit Messages

- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
- Keep the subject line under 50 characters.

Examples:

```
feat: add searchEpisodes query
fix: handle null record in createRecord
docs: update roadmap status
```

## Codegen

```bash
cp .env.example .env  # set ANNICT_ACCESS_TOKEN, used by codegen
pnpm codegen           # generate src/generated/types.ts and src/generated/graphql.ts
```

If you add or change a query/mutation in `src/resources/`, run `pnpm codegen` before committing. The command accesses the live Annict GraphQL schema, so a valid `ANNICT_ACCESS_TOKEN` is required. Reuse fragments from `src/resources/fragments.ts` where possible instead of redeclaring fields.
