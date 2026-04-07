# DAD React Native Template (v2.0)

The Digital Art Dealers React Native template. Greenfield projects start here.

> **Read the standards first.** This template is the *implementation* of the rules in [`DAD-dev-hq/standards/react-native/`](../DAD-dev-hq/standards/react-native/). When in doubt about *why* something is the way it is, the answer is in `STACK.md`, `FOLDER-STRUCTURE.md`, `COMPONENT-LIBRARY.md`, or `ENGINEERING-STANDARDS.md`.

## Stack at a glance

| Layer | Pick |
|---|---|
| Runtime | Expo SDK 52 with prebuild model + New Architecture |
| Routing | Expo Router v4 (file-based) |
| Styling | NativeWind v4 + Tailwind. **No other UI libraries, ever.** |
| Server state | TanStack Query v5 |
| Client state | Zustand |
| Lists | FlashList v2 |
| Animations | Reanimated v3+ (legacy `Animated` is banned) |
| Forms | React Hook Form + Zod + the `<FormInput />` primitive |
| Tokens / secrets | `expo-secure-store` |
| KV | `react-native-mmkv` |
| Icons | `lucide-react-native` |
| Tests | Jest + RNTL + MSW (unit) · Maestro (E2E) |
| Observability | Sentry + PostHog (Context A only — see STACK.md) |

Full stack and rationale: [`standards/react-native/STACK.md`](../DAD-dev-hq/standards/react-native/STACK.md).

## What's in this scaffold

```
app/                  # Expo Router routes (thin — no business logic)
  (auth)/sign-in.tsx  # Sample form: RHF + Zod + FormInput
  (tabs)/index.tsx    # Sample list: TanStack Query + FlashList
  (tabs)/profile.tsx  # Sample auth state usage
  post/[id].tsx       # Sample dynamic route + detail query
components/ui/        # The DAD primitives (slice — see COMPONENT-LIBRARY.md for the full 29)
lib/                  # All non-UI code: api, queries, stores, auth, theme, validation, utils
locales/en.json       # i18n
recipes/              # Tier 3 integration recipes (placeholders for now)
scripts/lint-dad.sh   # Constitutional rule audit (mirrors topic 19 grep reference)
.maestro/flows/       # E2E flows
__tests__/setup.ts    # Jest setup
```

The native folders (`ios/` and `android/`) are intentionally absent — they're generated via `npx expo prebuild`. **Never edit them by hand.** All native config goes in `app.json` or a config plugin under `plugins/`.

## Getting started

```bash
# 1. install deps (use bun, pnpm, or npm)
bun install

# 2. copy env
cp .env.example .env
# fill in EXPO_PUBLIC_API_BASE_URL at minimum

# 3. start dev
bun run start

# 4. when you need native modules, prebuild
bun run prebuild
bun run ios   # or android
```

## What lives where

This is the most-asked question. Use the decision table in [`FOLDER-STRUCTURE.md`](../DAD-dev-hq/standards/react-native/FOLDER-STRUCTURE.md). Some highlights:

| Adding | Where |
|---|---|
| A new screen | `app/` |
| A reusable primitive | `components/ui/` (only after checking it's not in COMPONENT-LIBRARY.md) |
| A feature-specific component | `components/features/[feature]/` |
| A query hook | `lib/queries/[domain]/use[Thing].ts` |
| Client state | `lib/stores/[domain].ts` (Zustand) |
| A Zod schema | `lib/validation/[domain].ts` |
| An env var | `.env.example` + `lib/constants/env.ts` |
| A theme color | `tailwind.config.js` + `lib/theme/colors.ts` |

## The constitutional rules (Tier 1)

Enforced by `eslint.config.js` and `npm run lint:dad`. Highlights:

1. No external UI libraries. We own the component library.
2. No legacy `Animated` from `react-native`. Reanimated only.
3. No `TouchableOpacity` / `TouchableHighlight`. `Pressable` only.
4. No `FlatList` in new code. `FlashList` only (chat with `inverted` is the documented exception).
5. No `AsyncStorage` for tokens. `expo-secure-store` only. MMKV for non-sensitive KV.
6. No `SafeAreaView` from `react-native`. Use `useSafeAreaInsets()`.
7. No `any` in TypeScript. `unknown` in catch blocks.
8. No raw colors in app code — use Tailwind tokens. **Exception:** primitives that don't accept `className` (RN `Image`, SVG `fill`/`stroke`, etc.) — use `lib/theme/colors.ts` and mark the line with `// inline: <reason>`.
9. No `navigation.navigate()` for intra-stack pushes — use `router.push()`.
10. No `console.log` in production bundles (stripped via babel plugin).
11. No native code edits to `ios/` / `android/` — use `app.json` or a config plugin.
12. No business logic in components — logic lives in hooks or stores.

Run the audit any time:

```bash
bun run lint:dad
```

## Sample data

The sample list/detail screens hit `https://jsonplaceholder.typicode.com` if you set:

```
EXPO_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
```

This gives you something to look at without standing up a backend.

## Promoting a primitive into the library

1. Build it once in `components/features/[feature]/`
2. Use it in production
3. Second project: copy-paste is fine
4. **Third project**: propose promotion to `components/ui/` (Scribe writes a memory note, operator approves)
5. Add it to `COMPONENT-LIBRARY.md`

## Versioning

This is `react-native-template@v2.0.0-alpha.1`. Projects pin to a template version in their `CLAUDE.md`:

```
Template: react-native-template@v2.0.0
Deviations: none
```

If a project's stack diverges from a Tier 1 pick, that's a deviation and lives in the project's own `CLAUDE.md` with rationale.

## Where to read next

- [`ENGINEERING-STANDARDS.md`](../DAD-dev-hq/standards/react-native/ENGINEERING-STANDARDS.md) — how to behave as a DAD engineer
- [`STACK.md`](../DAD-dev-hq/standards/react-native/STACK.md) — what's in the stack and why
- [`FOLDER-STRUCTURE.md`](../DAD-dev-hq/standards/react-native/FOLDER-STRUCTURE.md) — where every file goes
- [`COMPONENT-LIBRARY.md`](../DAD-dev-hq/standards/react-native/COMPONENT-LIBRARY.md) — the 29 primitive spec
- [`platform-knowledge/react-native/`](../DAD-dev-hq/platform-knowledge/react-native/) — the 20 topic deep-dives
