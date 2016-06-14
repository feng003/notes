[官方文档](http://www.expressjs.com.cn/)

> 问题一：使用生成器安装express的时候  express command not found解决方法

    npm install express-generator -g

    express -h

    express myapp

    cd myapp  && npm install

> 问题二 启动应用

    mac或者linux
        DEBUG=myapp npm start
    win
         set DEBUG=myapp & npm start

> 问题三 换模板引擎

    npm install ejs --save
