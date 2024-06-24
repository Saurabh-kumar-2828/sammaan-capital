import {FlatCompat} from "@eslint/eslintrc";
// import path from "path";
// import {fileURLToPath} from "url";

// Mimic CommonJS variables
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    // baseDirectory: __dirname, // optional; default: process.cwd()
    // resolvePluginsRelativeTo: __dirname, // optional
});

// "env": {
//     "browser": true,
//     "node": true,
//     "es6": true,
//     "jest": true
//   },

// "settings": {
//     "react": {
//       "version": "detect"
//     }
//   }

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
    ...compat.extends(
        "@remix-run/eslint-config",
        "@remix-run/eslint-config/node",
        "plugin:storybook/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
    ),
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        rules: {
            semi: "error",
            "prefer-const": "error",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "jsx-a11y/click-events-have-key-events": "off",
            "jsx-a11y/no-static-element-interactions": "off"

            // "object-curly-spacing": ["warn"],
            // "array-callback-return": ["warn"],
            // "constructor-super": ["warn"],
            // "for-direction": ["warn"],
            // "getter-return": ["warn"],

            // "strict": 0,
            // "react-hooks/rules-of-hooks": "error",
            // "react-hooks/exhaustive-deps": "warn"
        },
        // plugins: ["react", "react-hooks", "jsx-a11y"],
    },
];
