## PR Review Sandbox

A small [Next.js](https://nextjs.org) application intended for testing pull request review flows, review bots, and lightweight frontend changes.

## Local development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

The main page lives at `src/app/page.tsx`, with styles in `src/app/page.module.css`.

## Suggested review exercises

- Update the hero copy and open a pull request.
- Modify spacing or colors in `src/app/page.module.css`.
- Add a new route under `src/app`.
- Introduce a small bugfix PR and test review comments or automation on it.

## Commands

- `pnpm dev` starts the development server.
- `pnpm lint` runs ESLint.
- `pnpm build` creates a production build.
- `pnpm start` serves the production build.

## Stack

- Next.js 16
- React 19
- TypeScript
- ESLint

## Remote repository

The local project is ready to push to GitHub once `gh auth login` or equivalent git credentials are configured.
