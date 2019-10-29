module.exports = () => {
    const path = require("path");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const { CleanWebpackPlugin } = require("clean-webpack-plugin");
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    const VENDOR_LIBS = [
        "react", "redux", "react-redux", "react-dom", "redux-thunk", "react-router", "react-router-dom"
    ];

    return{
        entry:{
            bundle:"./src/index.js",
            vendor: VENDOR_LIBS
        },
        output:{
            filename:"[name].[chunkhash].js",
            path:path.resolve(`${__dirname}/../dist`),
            publicPath:""
        },
        mode:"production",
        optimization:{
            splitChunks:{
                chunks:"initial",
                minSize: 10000,
                automaticNameDelimiter:"-"
            }
        },
        module:{
            rules:[
                {
                    test:/\.(jpe?g|png|gif|svg)$/,
                    use:[
                        {
                            loader: "url-loader",
                            options: {limit: 40000}
                        },
                        "image-webpack-loader"
                    ]
                },
                {
                    test:/\.css$/,
                    use:[
                        MiniCssExtractPlugin.loader,"css-loader"
                    ]
                },
                {
                    test:/\.scss$/,
                    use:[
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader:"postcss-loader",
                            options:{
                                plugins:function(){
                                    return[
                                        require("precss"),
                                        require("autoprefixer")
                                    ]
                                }
                            }
    
                        },
                        "sass-loader"
                    ]
                },
                {
                    test:/\.js$/,
                    exclude: /node_modules/,
                    use:{
                        loader:"babel-loader",
                        options: {
                            presets:[
                                "@babel/preset-env","@babel/preset-react"
                            ],
                            plugins:[
                                "@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].[chunkhash].css"
            }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"index page",
            filename:"index.html",
            meta:{
                viewport:"width=device-width, initial-scale=1"
            },
            template:"src/index.html",
            description:'index'
        })
    ]
    }
}
