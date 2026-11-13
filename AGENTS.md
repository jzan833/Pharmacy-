# Repository Guidelines

## Project အကြောင်း
ဒေါ်မြရီ ကုန်စုံဆိုင်အတွက် mini ecommerce။ Backend မရှိ။
Order data ကို localStorage ထဲ သိမ်းမယ်။

## စည်းကမ်းများ
- ဈေးနှုန်းအားလုံး မြန်မာကျပ်ငွေ။ ဖော်မတ်  ၃,၅၀၀ ကျပ်
- UI စာသားတွေ မြန်မာလို ရေးရန်
- Component တစ်ခုကို ဖိုင်တစ်ဖိုင်၊ src/components/ ထဲမှာ
- feature ပြီးတိုင်း npm run dev နဲ့ error မရှိကြောင်း စစ်ရန်
## Project Structure & Module Organization

This is a JavaScript React application built with Vite. The entry point is `src/main.jsx`; the root component is `src/App.jsx`. Global styles and the Tailwind CSS import live in `src/index.css`; `src/App.css` is available for component styles. Put reusable components under `src/` (add `src/components/` as needed). Store imported assets in `src/assets/`; static files served as-is belong in `public/`. There is no test suite yet.

## Build, Test, and Development Commands

- `npm install` installs the dependencies recorded in `package-lock.json`.
- `npm run dev` starts the local Vite development server with hot reload.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the production bundle locally for review.
- `npm run lint` runs Oxlint against the project.

No test script or testing framework is currently configured. Run the lint and production build commands before submitting changes; add a test framework and `npm test` script if automated tests become necessary.

## Coding Style & Naming Conventions

Use JavaScript and JSX; do not introduce TypeScript unless the project direction changes. Follow two-space indentation, single quotes in imports, and semicolon-free style. Use PascalCase for component names and filenames (for example, `ProductCard.jsx`), camelCase for variables and functions, and lowercase kebab-case for CSS classes. Prefer Tailwind utilities; keep shared global rules in `src/index.css`. Use focused components and semantic HTML.

## Testing Guidelines

Automated tests are not configured. For UI changes, run `npm run lint` and `npm run build`, then check the screen in `npm run dev` at desktop and narrow viewport sizes. If tests are added, colocate them with the component or use `src/__tests__/`, with names such as `ProductCard.test.jsx`.

## Commit & Pull Request Guidelines

The current Git history contains the short, lowercase commit subject `project set up`. Keep commit subjects concise and action-oriented, for example `add product listing`. Pull requests should explain the user-facing change, include relevant screenshots for visual updates, and note the checks run. Link related issues when applicable and keep each change focused.

## Configuration & Generated Files

Keep dependencies and scripts in `package.json`, and commit `package-lock.json` when dependency changes are made. Do not commit `node_modules/` or generated `dist/` output. Avoid placing secrets in source files or Vite-exposed client environment variables.
