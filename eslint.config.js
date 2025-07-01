import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

import { globalIgnores } from "eslint/config";

import importSortPlugin from "eslint-plugin-simple-import-sort";

const importSort = importSortPlugin;

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      "simple-import-sort": importSort,
    },

    rules: {
      // ✅ Activás las reglas que ordenan imports/exports
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
]);
