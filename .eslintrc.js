const path = require("path");

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: path.join(__dirname, "/tsconfig.json"),
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
      flowVersion: "0.53",
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      {
        property: "freeze",
        object: "Object",
      },
      {
        property: "myFavoriteWrapper",
      },
      {
        property: "forbidExtraProps",
        exact: true,
      },
    ],
    componentWrapperFunctions: [
      "observer",
      {
        property: "styled",
      },
      {
        property: "observer",
        object: "Mobx",
      },
      {
        property: "observer",
        object: "<pragma>",
      },
    ],
    formComponents: [
      "CustomForm",
      {
        name: "Form",
        formAttribute: "endpoint",
      },
    ],
    linkComponents: [
      "Hyperlink",
      {
        name: "Link",
        linkAttribute: "to",
      },
    ],
  },
  plugins: ["import", "@typescript-eslint", "react", "jsx-a11y"],
  rules: {
    "no-multi-spaces": ["error"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "react/jsx-boolean-value": ["error"],
    "react/jsx-closing-bracket-location": ["error"],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "react/jsx-curly-newline": ["error"],
    "react/jsx-curly-spacing": ["error"],
    "react/jsx-equals-spacing": ["error"],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "react/jsx-first-prop-new-line": ["error"],
    "react/jsx-fragments": ["error"],
    "react/jsx-handler-names": ["error"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-max-props-per-line": [
      "error",
      {
        when: "multiline",
      },
    ],
    "react/jsx-newline": [
      "error",
      {
        prevent: true,
      },
    ],
    "react/jsx-no-constructed-context-values": ["error"],
    "react/jsx-no-leaked-render": ["error"],
    "react/jsx-no-useless-fragment": ["error"],
    "react/jsx-pascal-case": ["error"],
    "react/jsx-tag-spacing": ["error"],
    "react/jsx-wrap-multilines": ["error"],
    "react/no-danger": ["error"],
    "react/no-invalid-html-attribute": ["error"],
    "react/no-this-in-sfc": ["error"],
    "react/no-unused-class-component-methods": ["warn"],
    "react/no-unused-prop-types": ["warn"],
    "react/require-default-props": ["error"],
    "react/self-closing-comp": ["error"],
    "react/sort-comp": ["error"],
    "react/void-dom-elements-no-children": ["error"],
  },
};
