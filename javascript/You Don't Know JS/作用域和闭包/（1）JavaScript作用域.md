###  ”JavaScript中的函数运行在它们被定义的作用域里,而不是它们被执行的作用域里.”　

>#### 一套设计良好的规则来存储变量，并且之后可以方便的找到这些变量。这套规则被称为作用域。

一、传统的编译：

    1、Tokenizing/Lexing 分词/词法分析
    2、Parsing 解析/语法分析
    3、代码生成

二、LHS/RHS  赋值操作的左侧 和 右侧

      RHS查询与简单地查找某个变量的值别无二致，而LHS查询则是试图找到变量的容器本身，从而可以对其赋值。

      RHS理解成 retrieve his source value (取到他的源值)

      赋值操作的目标是谁（LHS） a = 2;
      谁是赋值操作的源头（RHS）console.log(a);

      function foo(a)
      {
            console.log(a) // 2
      }
      foo(2);

三、作用域嵌套

    遍历嵌套作用域链的规则：引擎从当前的执行作用域开始查找变量，如果找不到就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没有找到，查找过程都会停止。

    function foo(a)
    {
        console.log(a+b);
    }
    var b = 2;
    foo(2);
