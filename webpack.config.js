const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})
module.exports = {
  mode: 'development',
  devServer: {
    host: "127.0.0.1",
    // compress: true,
    port: 9000,
    hot: true
  },
  plugins: [
    htmlPlugin
  ],
  module: { // 所有第三方模块的配置规则
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: '/node_modules/' },
      // ? 添加参数 modules启用模块化 只对类名选择器和id选择器有效
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]-[local]-[hash:5]'
              }
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 后缀名可以省略
    alias: { // 别名
      '@': path.join(__dirname, './src')
    }
  }
}