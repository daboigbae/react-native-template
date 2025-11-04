e# 🧠 MCP Instructions: React Native MVP Builder

## Goal
Enable Cursor to rapidly scaffold and build high-quality, production-ready React Native apps using your custom template, following your preferred architecture, libraries, and code conventions.

---

## 🔧 GENERAL PHILOSOPHY

- This is **not an Expo project**. Assume **bare React Native** at the latest stable version.
- All components, styling, and features must align with **Tailwind-based theming**, **Redux Toolkit**, and **Firebase**.
- MVPs should be **fast, scalable, and maintainable**.
- Files should ideally be **under 500 LOC**.
- Minimize inline comments—prefer `.md` documentation.
- No `.map()` on lists—use **FlashList**.

---
cd io
## 🗂️ FOLDER STRUCTURE

```
/api               → API functions, including token handling
/assets            → Images, icons, etc.
/components        → Reusable UI components
/constants         → App-wide constants
/hooks             → Custom hooks
/navigation        → Navigation stacks and drawer
/screens           → All app screens
/store             → Redux Toolkit setup (auth, user, etc.)
/theme             → Tailwind config and color definitions
/translations      → i18n setup (multi-language support)
/types             → All TypeScript types
/utils             → Utility functions
```

---

## 🛠️ CORE SETUP

### ✅ Firebase
- User must add:
  - `google-services.json` → `android/app`
  - `GoogleService-Info.plist` → `ios/`
- Firebase Auth + Storage preconfigured.

### ✅ Redux Toolkit
- Global state via `/store`
- Auth integrated with Firebase
- Follow `/store/auth` as reference for slices

### ✅ Navigation
- React Navigation with **Drawer Navigator**
- Contains:
  - Splash
  - Auth flow (Login, Signup, Forgot Password)
  - Main flow (Home, Permissions, API Example)
- Deep linking **not yet configured**

### ✅ Theming + Tailwind
- Colors from Tailwind config
- No raw hex codes
- Use `NativeWind` + `Gluestack UI`
- Theme colors only for styling

### ✅ Permissions
- Preconfigured:
  - Location
  - Camera
  - Microphone
  - Notifications
- Permissions screen is a working placeholder

### ✅ API Module
- Axios-based API object in `/api/index.ts`
- Handles base URL, auth tokens, error catching

### ✅ Typescript
- Use `.ts` files across the project
- Types in `/types` folder
- Avoid inline type clutter

---

## 💅 COMPONENT / UI RULES

- Use **Gluestack UI** first, then custom components
- Always style with Tailwind
- Never use hardcoded hex values
- FlashList for lists
- Extract list item components to `/components`

---

## 🔍 TESTING & DOCUMENTATION

- Detox **not yet added**
- Write testable structure as you build
- Use `.md` docs instead of inline comments where appropriate
- Convention: `/docs/<filename>.md` for detailed explanations

---

## 🔌 OPTIONAL PRD USAGE

If a file like `project-prd.md` is added:
- MCP should read and use it for context
- Confirm scope and requirements before building
- Use it for naming, logic, and flow references

---

## ✅ MCP USAGE FLOW

1. Start Cursor project using this template
2. Add Firebase config files
3. Add `project-prd.md` (optional)
4. Build one slice at a time:
   - Design login screen with Gluestack + Tailwind
   - Hook up registration to Firebase
   - Add file upload
5. Add testable logic even before Detox is added
