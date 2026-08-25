---
"annict-graphql": minor
---

Add `Me.Record.create()`, `Me.Record.update()`, and `Me.Record.delete()` for managing watch records.

Note: `Me.Record.delete()` returns the parent episode, not the deleted record — this matches the shape of `DeleteRecordPayload` in the GraphQL schema.
