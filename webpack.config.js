const path = require('path'), 
      webpack = require('webpack'),
      TerserPlugin = require('terser-webpack-plugin'), // minim
      extractWebpackPlugin = require('extract-text-webpack-plugin'), // for css files
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
     LiveReloadPlugin = require('webpack-livereload-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      CopyWebpackPlugin= require('copy-webpack-plugin'),
      autoprefixer = require('autoprefixer');

const prod = process.env.NODE_ENV === 'development';

const config = {
    mode: 'development', //"webpack-dev-server/client","webpack/hot/dev-server",
    entry: ['./src/js/bundle.js'],
    output : {
        path: path.resolve(__dirname, 'public'),
        filename: './js/bundle.webpack.js'
    },

    watch: true,
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: false,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            }),
        ],
    },
    module: {

        rules: [
            // {
            //     /* вставляет в хеад инлайном все цсс */
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //         ]
            // },
            {  /* собирает цсс */
                test: /\.scss$/,
                use: extractWebpackPlugin.extract({
                    fallback: 'style-loader', // inline if fail
                    // use: 'css-loader', // our use css

                    use: [
                            { loader:'css-loader' },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 11', 'last 2 version']
                                        })
                                    ]
                                }
                            },
                            { loader: 'sass-loader' },
                        ]
                })
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: [
                            {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env',{
                                    targets: {
                                        browsers: ["last 2 versions", "ie >= 11"]
                                    }
                                }]]
                            }
                        }
                    ]
            },
            {
                test: /\.(gif|png|jpeg|svg|jpg)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name:'[name].[ext]',
                        useRelativePath: true,
                    }
                    },
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          pngquant: {
                            quality: '65-90',
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },


                      }
                    },
                  ],
            },
            // {
            //     test: /\.(eot|ttf|woff|woff2)$/,
            //     use: {
            //       loader: 'file-loader',
            //       options: {
            //         name: 'fonts/[name].[ext]'
            //       }
            //     }
            // },
            {
                test: /\.html$/,

                    use: {
                        loader: 'html-loader',
                        options: {
                          attrs: [':data-src']
                        }
                        }
            }
        ]
    },


    plugins: []
};


if (!prod) { 

      // dev plugins

    config.plugins = config.plugins.concat([

        new CopyWebpackPlugin([{
            from: './src/js/lib',
            to: './js/lib'
        }]),
        new CopyWebpackPlugin([{
            from: './src/style/lib/',
            to: './style/lib'
        }]),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.SourceMapDevToolPlugin({
        //     filename: './js/bundle.webpack.js.map',
        //     append: '\n//# sourceMappingURL=http://localhost:5500/[url]',
        // }),
        new HtmlWebpackPlugin({filename: './index.html', template: 'src/index.html'}),
        new extractWebpackPlugin({filename: './style/style.css', disable: false, allChunks: true}), // main css
        new webpack.DefinePlugin({
            'processs.env.NODE_ENV': '"production"' // compiller if production
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default'],
            },
            canPrint: true
          }),
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/, // dir for import ignor
            contextRegExp: /moment$/ // import module for ignore
          }),
        // new LiveReloadPlugin({
        //     appendScriptTag: true,
        // })
    ]);

    // config.devServer = {
    //     publicPath: 'js/',
    //     contentBase: path.resolve(__dirname,'public'),
    //     open: true,
    //     watchContentBase: true,
    //     compress: true,
    //     // proxy: {
    //     //     path: '/data',
    //     //     target: 'http://localhost:3000',
    //     // },
    //     // historyApiFallback: true,
    //     hot: true
    // };

} else {


    // production plugins
}


module.exports = config;
