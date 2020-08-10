const path = require('path')
const merge = require('webpack-merge')
const autoPrefixer = require('autoprefixer')
const commonConfig = require('./webpack.config.common.js')
const loadPresets = require('./loadPresets.js')

module.exports = ({ presets }) =>
    merge(
        commonConfig,
        {
            mode: 'development',
            entry: ['react-hot-loader/patch', './src/index/index.js'],
            devtool: 'inline-source-map',
            output: {
                filename: '[name].js',
                path: path.resolve(__dirname, '../dist'),
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /[\\/]node_modules[\\/]/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react']],
                                plugins: ['react-hot-loader/babel', '@babel/plugin-transform-runtime'],
                            },
                        },
                    },
                    {
                        // removes the error for react-hot-dom patch
                        test: /\.js$/,
                        include: /[\\/]node_modules[\\/]/,
                        use: 'react-hot-loader/webpack',
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            { loader: 'style-loader' },
                            { loader: 'css-loader' },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoPrefixer({
                                            cascade: false,
                                            grid: 'no-autoplace',
                                        }),
                                    ],
                                },
                            },
                            { loader: 'sass-loader' },
                        ],
                    },
                ],
            },
        },
        loadPresets({ presets }),
    )
