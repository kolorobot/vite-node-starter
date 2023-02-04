module.exports = {
    extends: ['standard-with-typescript', 'prettier'],
    parserOptions: {
        project: './tsconfig.json',
    },
    overrides: [
        {
            files: ['*'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/strict-boolean-expressions': 'off',
                '@typescript-eslint/restrict-template-expressions': 'off',
            },
        },
    ],
};
