module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'indent': ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'prefer-arrow-callback': ["error", { "allowNamedFunctions": true }]
    },
}