module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          src: './src',
          common: './src/common',
          components: './src/components',
          screens: './src/screens',
          constants: './src/constants',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
