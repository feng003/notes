### 提升 变量和函数声明从他们在代码中出现的位置被“移动”到最上面。

>1、编译器

 foo函数的声明被提升

    foo();
    function foo()
    {
         console.log(a);
         var a = 2;
    }

函数表达式却不会被提升

    foo();

    var foo = function(){}

>2、函数优先:函数声明 会被提现到 普通变量之前

    foo();
    var foo;
    function foo()
    {
        console.log(1);
    }
    foo = function()
    {
        console.log(2);
    }
