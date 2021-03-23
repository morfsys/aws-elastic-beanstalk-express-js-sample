module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    parserOptions:  {
          ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
          sourceType:  'module',  // Allows for the use of imports
          ecmaFeatures:  {
              jsx:  true,  // Allows for the parsing of JSX
          },
    },
    rules:  {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "camelcase": "off",
      "@typescript-eslint/camelcase": "off"
    },
    settings:  {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
  };
  