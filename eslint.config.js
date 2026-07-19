import js from "@eslint/js";
import globals from "globals";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import astroPlugin from "eslint-plugin-astro";

export default [
  {
    ignores: [".vscode/**", "dist/**", "node_modules/**", "public/**", ".astro/**", ".vercel/**"],
  },
  js.configs.recommended,
  ...astroPlugin.configs["flat/recommended"],
  ...astroPlugin.configs["flat/jsx-a11y-recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      "@typescript-eslint": tseslintPlugin,
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...tseslintPlugin.configs.recommended.rules,
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
