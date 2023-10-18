module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('postcss-pxtorem')({
      rootValue: 10,
      unitPrecision: 5,
      propList: ['*'],
      // selectorBlackList: [/^p/],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 6,
    }),
  ],
}
