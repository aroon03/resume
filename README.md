# Resume Builder

An interactive, single-page resume builder and printable resume viewer built with Next.js. The resume is optimized to print/export to a single PDF page.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + Radix UI components
- TypeScript

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later (Node 20+ recommended)
- [pnpm](https://pnpm.io/) (this project uses a `pnpm-lock.yaml`)

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/aroon03/resume.git
   cd resume
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files thanks to Hot Module Replacement.

## Available Scripts

| Command       | Description                                    |
| ------------- | ---------------------------------------------- |
| `pnpm dev`    | Start the development server                   |
| `pnpm build`  | Create an optimized production build           |
| `pnpm start`  | Run the production build (run `build` first)   |
| `pnpm lint`   | Run ESLint                                     |

## Editing Your Resume

Resume content lives in `lib/resume-data.ts`. Update the personal info, experience, education, skills, and other sections there, and the changes will reflect in the preview.

## Printing / Exporting to PDF

1. Open the app in your browser.
2. Use your browser's **Print** dialog (`Cmd/Ctrl + P`).
3. Set the destination to **Save as PDF**.
4. Make sure the scale is set to **Default / 100%** (the layout is already scaled in print CSS to fit a single A4 page).

## Production Build

```bash
pnpm build
pnpm start
```

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/). Push the repository to GitHub and import it into Vercel, or deploy directly from the [v0](https://v0.app/) interface.
