const eslint = require('@eslint/js');
const eslintTypeScript = require('typescript-eslint');
const eslintReact = require('eslint-plugin-react');
const eslintNext = require('@next/eslint-plugin-next');
const eslintStorybook = require('eslint-plugin-storybook');
const eslintJest = require('eslint-plugin-jest');
const eslintLycolia = require('@lycolia/eslint-config');

module.exports = eslintTypeScript.config(
  eslint.configs.recommended,
  ...eslintTypeScript.configs.recommended,
  eslintJest.configs['flat/style'],
  eslintJest.configs['flat/recommended'],
  eslintLycolia,
  {
    ignores: [
      'dist/*',
      'coverage/*',
      '**/*.d.ts',
      '/src/public/',
      '/src/type',
      '*.config.js'
    ],
    languageOptions: {
      parser: eslintTypeScript.parser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      react: eslintReact,
      '@next/next': eslintNext,
      storybook: eslintStorybook
    },
    rules: {
      // flat configに対応してないのでrulesを直に注入している
      ...eslintReact.configs.recommended.rules,
      ...eslintNext.configs.recommended.rules,
      ...eslintStorybook.configs.recommended.rules,
      // key propsがない時に警告
      // 以下の条件も警告する
      // - フラグメントショートハンドにkey propsが必要な場合
      // - スプレッド前にkey propsがある場合
      'react/jsx-key': [
        'warn',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true
        }
      ],
      // フラグメントのショートハンドを強制する（key propsがあるときは除外される）
      'react/jsx-fragments': ['warn', 'syntax'],
      // 閉じタグのスペースルールを以下の形式にする
      // <hoge></hoge>
      // <hoge />
      // <hoge
      //   piyo='fuga'
      // />
      'react/jsx-tag-spacing': [
        'warn',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never'
        }
      ],
      // 子要素を持たない終了タグを禁止
      // <div></div> -> <div />
      'react/self-closing-comp': [
        'warn',
        {
          component: true,
          html: true
        }
      ],
      // img要素の利用を許可（CSS対策）
      // Next.js 13では不要かも
      '@next/next/no-img-element': 'off',
      // ワークアラウンド
      'testing-library/no-container': 'off',
      // ワークアラウンド
      'testing-library/no-node-access': 'off'
    }
  }
);
