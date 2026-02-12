# Deploy Bun + Vite + React to GitHub Pages

A step-by-step workshop guide.

---

## Prerequisites

- [Bun](https://bun.sh) installed
- A working Vite + React project (`bun run dev` loads successfully)
- A [GitHub](https://github.com) account
- Git installed
- *(Optional)* [GitHub CLI](https://cli.github.com/) (`gh`) for automating repo creation

---

## Step 1: Verify Your Project Runs

From your project root, run:

```bash
bun run dev
```

Confirm the app loads at `http://localhost:5173`. If it doesn't, fix any issues before continuing.

---

## Step 2: Set the Base Path

GitHub Pages serves your site from `https://username.github.io/repo-name/`, so Vite needs to know about that subpath.

Open `vite.config.ts` (or `vite.config.js`) and add the `base` property:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

Replace `your-repo-name` with the exact name of your GitHub repository. This is case-sensitive.

---

## Step 3: Install gh-pages

```bash
bun add -d gh-pages
```

This package handles pushing your built files to a dedicated `gh-pages` branch.

---

## Step 4: Add a Deploy Script

Open `package.json` and add a `deploy` script:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

This builds your project and pushes the `dist/` folder to the `gh-pages` branch in one command.

---

## Step 5: Initialize Git

If your project isn't already a git repo:

```bash
git init
git branch -M main
```

---

## Step 6: Create a GitHub Repository

**Option A — Using GitHub CLI:**

```bash
gh repo create your-repo-name --public --source=. --remote=origin
```

**Option B — Manually:**

1. Go to [github.com/new](https://github.com/new)
2. Name it exactly what you used in the `base` path
3. Leave it empty — do **not** add a README
4. Click **Create repository**
5. Copy the remote URL and add it:

```bash
git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git
```

---

## Step 7: Commit and Push

```bash
git add .
git commit -m "initial commit"
git push -u origin main
```

---

## Step 8: Deploy

```bash
bun run deploy
```

This builds the project and pushes the `dist/` folder to a `gh-pages` branch on your repo. You should see output ending with `Published`.

---

## Step 9: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set the branch to **`gh-pages`** and folder to **`/ (root)`**
5. Click **Save**

Wait 1–2 minutes for GitHub to build and publish.

---

## Step 10: Visit Your Live Site

Your app is now live at:

```
https://YOUR_USERNAME.github.io/your-repo-name/
```

---

## Redeploying After Changes

Any time you make changes and want to update the live site:

```bash
bun run deploy
```

That's it — one command to build and publish.

---

## Troubleshooting

**Blank white page**
The `base` in `vite.config.ts` doesn't match your repo name exactly. Double-check spelling and case.

**404 on page refresh**
React Router's `BrowserRouter` doesn't work on GitHub Pages. Switch to `HashRouter`:

```tsx
import { HashRouter } from 'react-router-dom'

<HashRouter>
  <App />
</HashRouter>
```

**Broken images or assets**
Use relative paths (`./image.png`) instead of absolute paths (`/image.png`).

**"fatal: couldn't find remote ref gh-pages"**
This is normal on first deploy. The `gh-pages` package creates the branch automatically.

**Deploy command hangs or fails**
Make sure `bun run build` works on its own first. If it does, try running with verbose output: `npx gh-pages -d dist`.

---

## Quick Reference

```bash
# One-time setup
bun add -d gh-pages
# Add base: '/repo-name/' to vite.config.ts
# Add deploy script to package.json

# Deploy (every time)
bun run deploy
```
