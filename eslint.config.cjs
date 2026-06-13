const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const i18Next = require("eslint-plugin-i18next");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [{
    ignores: [
        ".next",
        "**/node_modules",
        "eslint.config.cjs",
        "next-env.d.ts"
    ],
}, ...compat.extends(
    "eslint:recommended",
    "prettier",
    "plugin:i18next/recommended",
), ...require("eslint-config-next/core-web-vitals"), {
    plugins: {
        i18next: i18Next,
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "off",
        "no-undef": "off",
        "react-hooks/set-state-in-effect": "off",
    }
}, {
    files: ["**/*.js"],

    rules: {
        "@typescript-eslint/no-require-imports": "off",
    },
}, {
    files: ["**/seed.ts"],

    rules: {
        "@typescript-eslint/no-require-imports": "off",
    },
}, {
    files: [
        "components/defaultLanding/**/*.tsx",
        "components/emailTemplates/**/*.tsx",
        "components/*Section.tsx",
        "components/Footer.tsx",
        "components/HeroSection.tsx",
        "components/Navbar.tsx",
        "components/SetupStepsSection.tsx",
        "components/StarterKitCard.tsx",
        "components/TechStackSection.tsx",
        "pages/index.tsx",
    ],

    rules: {
        "i18next/no-literal-string": "off",
    },
}];