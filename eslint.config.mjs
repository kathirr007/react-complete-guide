import antfu from '@antfu/eslint-config';

export default antfu(
  {
    ignores: ['public', '**/public/**', 'dist', '**/dist/**', 'node_modules', '**/node_modules/**'],
    formatters: true,
    react: true
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'curly': 'off',
      'antfu/consistent-list-newline': 'off',
      'import/order': 'off',
      'node/prefer-global/process': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'ts/method-signature-style': 'off',
      'ts/no-use-before-define': 'off',
      'unused-imports/no-unused-vars': 'off',
      'style/max-statements-per-line': 'off',
      'style/semi': ['error', 'always'],
      'style/comma-dangle': ['error', 'never'],
      'style/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }],
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'DebuggerStatement',
          message: 'Function expressions are not allowed.'
        }
      ],
      'no-throw-literal': 'off'
    }
  }
);
