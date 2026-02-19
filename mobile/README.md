# Android Native App (React Native / Expo)

This directory contains a fully separate Android-oriented React Native app for the same organization experience, implemented with Expo.

## What this mobile app includes

- Native navigation and screens for Home, About, What We Do, Get Help, Apply, Global Operations, Donate, News, and Contact.
- Native form submission for:
  - `POST /api/application`
  - `POST /api/contact`
  - `POST /api/gethelp`
- Shared visual identity using the same primary colors as the web app.

## Prerequisites

- Node.js 18+
- Android Studio (SDK + emulator) for local Android builds

## Setup

```bash
cd mobile
npm install
```

Set API base URL (the domain hosting your existing `functions/api/*` endpoints):

```bash
export EXPO_PUBLIC_API_BASE_URL="https://your-domain.example"
```

## Run on Android

```bash
npm run android
```

If you only want Metro/Expo dev server first:

```bash
npm run start
```

## Notes

- This is intentionally separate from the web Vite app and can evolve independently.
- `What We Do` currently reuses the `About` content screen and can be expanded into a dedicated screen.
