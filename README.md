# E Commerce application

## Prerequisites

- Install nodejs v20+
- Install pnpm
- Create a `.env` file from `.env.example`. Add the secret values.

## Getting started

- Install dependencies

```bash
pnpm install
```

- Create and Seed the database
```bash
pnpm db:push
pnpm db:seed
```

- Start the development server

```bash
pnpm dev
```

## Production build

```bash
pnpm build
pnpm start
```
