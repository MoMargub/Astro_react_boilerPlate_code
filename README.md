# Astro + React Boilerplate code 

## Project Structure

This project integrates **React**, **Astro**, for Server-Side Rendering (SSR) and data fetching. Below is the breakdown of the folder structure, designed to be scalable and maintainable.

## Folder Structure

### `/src`
Contains all the source code for your project.

- **`/assets`**  
  Stores static assets like images, fonts, and other non-dynamic resources that don’t need processing by Astro or React.  
  **Example:**  
  - Images (`.png`, `.jpg`)
  - Svgs (`.svg`)  
  - Fonts  
  - Icons  

- **`/components`**  
  Reusable **UI components** (both React and Astro). These are elements that can be used across various parts of your application.  
  **Example:**  
  - `Button.jsx`  
  - `Card.astro`

- **`/context`**  
  Contains **Context API** or **Redux** logic for state management.  
  **Example:**  
  - `ThemeContext.js`  
  - `AuthContext.js`

- **`/data`**  
  Contains **static data** or **data models** that are shared across the app (like mock data or TypeScript types). This can also include query models for TanStack Query.  
  **Example:**  
  - `users.json`  
  - `dataModels.js`  
  - `querySchemas.js`

- **`/features`**  
  Feature-specific modules. This folder organizes your app by logical features and contains components, logic, and services related to specific features.  
  **Example:**  
  - `/features/user`  
  - `/features/dashboard`

- **`/pages`**  
  **Astro** use **page-based routing** to define the structure of your site. Each `.astro` file represents a route in the project. These pages can embed React components for interactivity or dynamic content.  
  **Example:**  
  - `index.astro` (Home page route `./home`)  
  - `about.astro`  (About page route `./about`)
  - `blog/[slug].astro` (Dynamic route)

- **`/hooks`**  
  **Custom React hooks**. These are reusable hooks that encapsulate logic for fetching, managing state, and interacting with APIs.  
  **Example:**  
  - `useQuery.js` (for TanStack Query)  
  - `useLocalStorage.js`

- **`/layouts`**  
  Contains layout components (e.g., headers, footers, sidebars) that help structure the app’s layout globally. These components are typically used across multiple pages.  
  **Example:**  
  - `MainLayout.astro`  
  - `Header.jsx`  
  - `Footer.jsx`

- **`/lib`**  
  Holds external libraries or utilities, including the configuration and setup for TanStack Query.  
  **Example:**  
  - `apiClient.js`  
  - `tanstackQuery.js` (Configuration of TanStack Query)  
  - `analytics.js`

- **`/services`**  
  API calls and external services. This is where all the logic related to data fetching via **TanStack Query** or other APIs goes.  
  **Example:**  
  - `api.js`  
  - `authService.js`  
  - `postService.js` (for fetching blog posts)

- **`/styles`**  
  Global and component-specific **styles** for your app, including CSS, SCSS, or styled-components.  
  **Example:**  
  - `global.css`  
  - `Button.module.css`  
  - `theme.scss`

- **`/utils`**  
  Utility functions and helpers that simplify common tasks.  
  **Example:**  
  - `formatDate.js`  
  - `capitalize.js`



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run format`          | for code formatting via prettier                 |
