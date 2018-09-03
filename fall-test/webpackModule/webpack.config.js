const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(_dirname,'dist') 
    },
    
    module:{
        rules:[
            {
                test:/\.jsx$/,
                include:[
                    path.resolve(_dirname,'src') //指定哪些路径下的文件需要经过 loader 处理
                ],
                use:'babel-loader'
            },{
                test:/\.less$/,
                use: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader',
                    use: ['css-loader','less-loader']
                }),
            },
            {
                test:/\.css$/,
                // include:[
                //     path.resolve(_dirname,'src'),
                // ],
                // use:['style-loader','css-loader']
                // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
                use: ExtractTextPlugin.extract({ 
                fallback: 'style-loader',
                use: 'css-loader',
                }),
            },{
                test:/\.js$/,
                exclude: /node_modules/,
                loader:"eslint-loader"
            }
        ]
    },

    //代码模块路径解析的配置
    resolve:{
        modules:[
            "node_modules",
            path.resolve(__dirname, 'src')
        ],
        alias: {
			'src': path.resolve(__dirname, './src'),
            'page': path.resolve(_dirname,'./src/pages'),
			'react': path.resolve('./node_modules/react'),
			'classnames': path.resolve('./node_modules/classnames'),
			'autoprefixer': path.resolve('./node_modules/autoprefixer'),
			'react-dom': path.resolve('./node_modules/react-dom')
		},
        extensions:[".js", ".json", ".jsx"]
    },


    plugins:[
        new UglifyPlugin(),new ExtractTextPlugin('index.css')
    ],
}

