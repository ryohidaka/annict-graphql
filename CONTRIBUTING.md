# Contributing

## Development

- Install dependencies:

```bash
vp install
```

- Run the unit tests:

```bash
vp test
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
pnpm codegen           # generate src/generated/graphql.ts
```

If you add or change a query/mutation in `src/resources/`, run `pnpm codegen` before committing. Reuse fragments from `src/resources/fragments.ts` where possible instead of redeclaring fields.
