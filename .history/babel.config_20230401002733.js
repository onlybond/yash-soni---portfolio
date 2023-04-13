module.exports = {
  presets: [
    '@babel/preset-env',
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['transform-vue-jsx', { 'enableObjectSlots': false }],
    ['@babel/plugin-syntax-jsx', { 'enableObjectSlots': false }],
    "babel-plugin-transform-vue-jsx"

  ]
}
