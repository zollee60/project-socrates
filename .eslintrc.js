module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:import/react',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import', 'react', 'react-hooks'],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['**/*.test.ts'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    // Separate tsconfig file for eslint to avoid heap out of memory
    // See: https://github.com/typescript-eslint/typescript-eslint/issues/1192
    project: 'tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    'arrow-parens': ['error', 'always'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // Use Typescript own check for this
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'off',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'object-shorthand': 'error',
    'dot-notation': 'error',
    'no-caller': 'error',
    'no-useless-concat': 'error',
    radix: 'error',
    yoda: 'error',
    'prefer-arrow-callback': 'error',
    'prefer-rest-params': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'no-shadow': 'off',
    'prefer-template': 'error',
    'default-case': 'error',
    indent: 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['./frontend/webpack/*.config.js', './frontend/src/server/**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
