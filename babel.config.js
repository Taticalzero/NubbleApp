module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/screens',
          '@theme': './src/theme',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
