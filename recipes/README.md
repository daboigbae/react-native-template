# Recipes

Tier 3 integration recipes from `standards/react-native/STACK.md`. Each recipe is a standalone markdown file that an engineer (human or agent) can follow to add an optional capability to a DAD project without inventing the integration from scratch.

## Recipe format

Every recipe follows this exact structure:

1. **When to use it** — the decision criteria
2. **What it adds** — packages, env vars, native config
3. **Install steps** — exact commands
4. **Wiring** — code snippets for the integration points
5. **Gotchas** — known traps
6. **Cross-references** — relevant topic doc(s)

## Planned recipes

These are referenced from STACK.md Tier 3 — they will be added as projects need them:

- `stallion-ota.md`
- `eas-update.md`
- `push-notifications.md`
- `biometrics.md`
- `oauth.md`
- `maps.md`
- `background-location.md`
- `watermelondb.md`
- `stripe.md`
- `revenuecat.md`
- `firebase.md`
- `supabase.md`
- `redux-toolkit.md`
- `detox.md`
- `reactotron.md`
- `drawer-nav.md`

When you write a recipe, copy the format above. When the recipe ships in a real project, the Scribe links it back to that project in `memory.json`.
