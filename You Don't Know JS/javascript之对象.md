
### 语法

>对象的文字语法

    var myobj = {
        key:value
        // ...
    }

>构造形式

    var myobj = new Object();
    myobj.key = value;

### 类型

1. javascript 类型

    string  number boolean null undefined Object

2. 内置对象

    String   Number Boolean Object Function Array Date RegExp Error

    var str = "test";   //文字形式    string

    var oStr = new String("String");  //String对象

3. 内容   . 操作符 或者 [] 操作符

##### 可结算属性名
##### 属性与方法

    function foo(){
        console.log('foo');
    }
    var someFoo = foo;

    var myObject = {
        someFoo:foo
    }

    foo;
    someFoo;
    myObject.someFoo;

##### 数组 []
##### 复制对象 (浅复制   深复制)

    //TODO
    function otherFunction(){}

    var otherObject = {
        c:true
    }
    var otherArray = [];

    var myObject = {
        a:2,
        b:otherObject,
        c:otherArray,
        d:otherFunction
    }
    otherArray.push(otherObject,myObject);

##### 属性描述符(defineProperty())

    var myObject = { a:2}
    Object.getOwnPropertyDescriptor(myObject,"a");
    //Object {value: 2, writable: true, enumerable: true, configurable: true}
