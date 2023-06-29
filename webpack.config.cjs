const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        static: {
            directory: path.join(__dirname, '.dist/'),
            watch: true
          }
    },

    entry: {
        main: path.resolve(__dirname, './index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.build.js',
    },


    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./src/data/feed.json"),
                    to: "./data/",
                },
                {
                    from: path.resolve(__dirname, "./src/data/slider.json"),
                    to: "./data/",
                },
            ],
          }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 
                {
                loader: 'css-loader',
                options: {
                    url: false,
                    sourceMap: true
                }
                }, 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg|)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:
                        {
                            name: './public/assets/[name].[ext]',
                        }
                    },
                    {
                        loader: 'file-loader',
                            options: {
                                name: './public/assets/[name].[ext]',
                            }
                    },
                    {   
                        loader: 'image-webpack-loader',
                        options:
                        {
                            bypassOnDebug: true
                        }
                    }

                ]
            }
        ],
        
    },
}
