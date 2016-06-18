## 作用域包含了一系列的“气泡”，每一个都可以作为容器，其中包含了标识符（变量、函数）的定义。

>1、函数作用域

      function foo(a)
      {
              var b = 2;
              function bar(){}
              var c = 3;
      }

>2、隐藏内部实现

    function doSth(a)
    {
        b = a + doSthElse( a * 2);
    }
    function doSthElse(a)
    {
        return a-1;
    }
    var b;
    doSth(2);

隐藏之后

    function doSth(a)
    {
            function doSthElse(a)
            {
                return a-1;
            }

            var b;

            b = a + doSthElse(a * 2);
            console.log(b * 3);
    }
    doSth(2);

    b 和 doSthElse() 无法从外部访问。

 >3、函数作用域 (匿名函数自执行)

    var a = 2;
    (function foo(){
        var  a = 3 ;
        console.log( a );    // 3
        })();
     console.log(a);      //2

>4、块作用域  with、try/catch、let
