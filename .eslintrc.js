module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["@typescript-eslint", "react", "prettier"],
    extends: [
        "next",
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@next/next/recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier",
        "prettier/prettier"
    ],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
        "import/extensions": "off",
        "react/prop-types": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "react/jsx-props-no-spreading": ["warn", { custom: "ignore" }],
        "prettier/prettier": "off",
        "react/no-unescaped-entities": "off",
        "import/no-cycle": [0, { ignoreExternal: true }],
        "prefer-const": "off",
        "no-use-before-define": "off",
        "import/prefer-default-export": "off",
        "import/no-unresolved": "off",
        "no-shadow": "off",
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-curly-brace-presence": "warn",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-shadow": ["warn"],
        "@typescript-eslint/no-use-before-define": [
            "error",
            { functions: false, classes: false, variables: true },
        ],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
    },
    settings: {
        "import/resolver": {
            "babel-module": {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                paths: ["src"],
            },
        },
    },
};
