// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    // For .astro files
    {
      files: "*.astro",
      options: {
        parser: "astro", // For Astro files
      },
    },
    // For .tsx and .ts (React + TypeScript)
    {
      files: ["*.tsx", "*.ts"],
      options: {
        parser: "typescript", // Handle both .tsx and .ts with the TypeScript parser
      },
    },
    // For .jsx and .js (React + JavaScript)
    {
      files: ["*.jsx", "*.js"],
      options: {
        parser: "babel", // Handle both .jsx and .js with the Babel parser
      },
    },
    // For .css and .scss (CSS files)
    {
      files: ["*.css", "*.scss"],
      options: {
        parser: "css", // Handle both .css and .scss with the CSS parser
      },
    },
    // For .html files (if any)
    {
      files: "*.html",
      options: {
        parser: "html", // Ensure Prettier uses the HTML parser for .html files
      },
    },
  ],
};
