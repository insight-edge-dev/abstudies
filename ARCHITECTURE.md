# React application architecture

The React application is intentionally empty so the static website can be migrated one section at a time. The original template is preserved under `legacy/`, including its `index.legacy.html` entry page and the remaining HTML, CSS, JavaScript, images, SCSS, and vendor files.

## Root files

- `index.html` is the minimal Vite HTML entry point. It provides the React mount element and loads `src/main.jsx`.
- `package.json` defines React 19, React Router, Vite, ESLint, and Prettier, together with development, build, lint, and formatting scripts.
- `vite.config.js` enables React support in Vite.
- `eslint.config.js` contains the flat ESLint configuration for JavaScript and JSX.
- `.prettierrc.json` and `.prettierignore` define consistent formatting while excluding untouched legacy vendor files.
- `.gitignore` excludes dependencies, generated builds, and local Vite output.

## `src/`

All new application code lives here. `main.jsx` mounts the app in strict mode and supplies the router. `App.jsx` is currently an empty application boundary; it is not a page. `styles.css` is the future global stylesheet entry point and intentionally contains no migrated visual rules yet.

### `src/assets/`

Application-owned images, fonts, icons, and other static imports. Assets should move here only when the section that uses them is migrated.

### `src/components/`

Reusable UI building blocks shared by pages or sections, such as navigation, buttons, cards, and form controls. Components should accept props instead of duplicating markup.

### `src/layouts/`

Shared structural wrappers that compose common page chrome, such as the site header, main content region, and footer.

### `src/pages/`

Route-level components. This folder is deliberately empty because page creation is outside the current migration step.

### `src/hooks/`

Reusable React hooks for stateful behavior, browser APIs, and shared interaction logic.

### `src/utils/`

Framework-independent helper functions, constants, data transformations, and other reusable utilities.

## Styling migration

Tailwind CSS is not installed yet. It will be introduced during the requested styling migration, when the existing visual rules can be translated and verified without changing the design.
