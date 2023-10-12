module.exports = {
  extends: ["plugin:vue/vue3-recommended", "rascal-ts"],
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["*.html"],
      rules: {
        "vue/comment-directive": "off",
      },
    },
  ],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"],
      },
    ],
  },
};
