1. node npm

        node -v
        npm -v

2. install webpack (-g global)

    1、全局安装

        npm install webpack webpack-dev-server -g

    2、项目内安装webpack

        npm init   //package.json
        npm install webpack webpack-dev-server  --save-dev()

        --save-dev参数，用于告诉npm这两个类库的信息需要写入到package.json中，并作为开发依赖库

3. webpack参数

        --devtool : 调试工具的模式，eval是将你的css和js代码变为eval的方式合并打包。
        --config : 指定配置文件
        --progress: 在命令行终端输出编译合并的过程信息
        --colors: 在命令行终端中显示带颜色的信息

4. webpack-dev-server命令行参数

        --port <端口号>: 指定http服务的端口号
        --host <主机名>: 指定http服务的主机名，这在局域网内使用实时调试非常有用。
        --compress: 启用gzip压缩
        --inline: 将webpack-dev-server的运行时文件合并打包到输出的文件中
        --hot: 使用HotModuleReplacementPlugin插件（已经整合在webpack中，无需npm安装），并将http服务器切换到hot模式，其实所谓hot模式，就是当你更改了某个被引用的文件，会hot replace，并重新合并到输出文件中。

5. example

webpack.config.js

    module.exports = {
        entry: [
            "./main.js"
        ],
        output: {
            path: './output',
            filename: 'app.js'
        }
    };

test.js

    module.exports = [
    'a', 'b', 'c'
    ];

 main.js

     // 引入test.js文件，并将其输出的内容（module.exports）赋值到test变量上
    var test = require('./test');
    // 在浏览器的console中输出test变量的内容
    console.log(test);

>webpack  

[学习地址](http://my.oschina.net/janpoem/blog/677791?fromerr=m1tksAOL)

[webpack 入门指南](http://www.w2bc.com/Article/50764)

[Webpack 入门指迷](http://www.w2bc.com/article/101955)

[webpack](http://webpack.github.io/docs/configuration.html)
