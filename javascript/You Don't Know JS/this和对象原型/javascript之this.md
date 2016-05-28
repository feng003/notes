>why use this

    function identify(){
        return this.name.toUpperCase();
    }

    function speak(){
        var greeting = "hello I'm " + identify.call(this);
        console.log(greeting);
    }

    var me = {
        name :"kyle"
    }

    identify.call(me);
    speak.call(me);

this 提供了一种更优雅的方式来隐式“传递”一个对象应用

>mistake

    1、this 指向函数自身
    2、this 指向 函数的作用域

    function foo(){
        var a = 3;
        this.bar();
    }
    function bar(){
        console.log(this.a);
    }
    foo();

### this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。
