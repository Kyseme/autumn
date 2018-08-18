resolve:{
    extensions:['','.js',',jsx'],
    alias:{
        'styles':_dirname+'src/styles',

    }
}
module:{
    loaders:[
        test:/\.(js!jsx)/,
        /* 先执行sass-loader 接着执行scc-loader*/
        loader:'style-loader!css-loadder!sass-loader' 
    ]
}
plugins:[
    
]