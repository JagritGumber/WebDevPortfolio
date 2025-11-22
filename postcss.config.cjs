module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '> 1%']
    }),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true
      }
    })
  ]
}