const path = require('path')

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        // contentBase: "./src", // 托管的根目录
        hot: true, // 我要开启或关闭HMR
        open: true, // 自动打开浏览器
        port: 3000 // 设置devServer的端口号
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
          })  
    ],
    module: {
	    rules: [
	      {
	        test: /.css$/,
	        use: ['style-loader', 'css-loader']
          },
          {
	        test: /.(png|jpg|gif|bmp|jpeg)$/,
	        use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192 // 字节 Byte 如果在8192个字节(8KB)内  就使用base64编码
                  }
                } 
              ]  
          },
          {
	        test: /.(eot|svg|ttf|woff|woff2)$/,
	        use: [
	          {
	            loader: 'url-loader'
	          }
	        ]
	      }  
	    ]
	  },


};