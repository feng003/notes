>1、闭包定义：当函数可以**记住并访问**所在的 词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

    function foo(){
        var a = 2;
        function bar(){
            console.log( a );
        }
        bar();   // 函数bar() 可以访问外部作用域中的 变量a
    }
    foo();

    function foo()
    {
        var a = 2;
        funtion bar()
        {
            console.log(a);
        }
        return bar;
    }
    var baz = foo();
    baz();  // 2 闭包的效果

    bar()所引用的函数对象本身当作返回值

>2、本质上，如果将(访问他们各自词法作用域的)函数当作第一级的值类型并到处传递，你就会看到闭包在函数中的应用。比如：定时器、事件监听器、ajax请求、跨窗口通信、web workers，只要使用了回调函数，就是在使用闭包。

      function wait(msg)
      {
          setTimeout(function timer(){
              console.log(msg);
              },1000);
      }

      wait('hello closure');

>3、循环和闭包

    for(var i=1;i<=5;i++){
        setTimeout(function timer(){
            console.log(i);
            },i*1000)
    }    

    for(var i=1;i<=5;i++){
        (function(j){
            setTimeout(function timer(){
                console.log(j);
                },j*1000)
            })(i);
    }

    //let
    for(var i=1;i<=5;i++){
        let j = i;
        setTimeout(function timer(){
            console.log(j);
            },j*1000)
    }

    for(let i=1;i<=5;i++){
        setTimeout(function timer(){
            console.log(i);
            },i*1000)
    }

>4、模块
