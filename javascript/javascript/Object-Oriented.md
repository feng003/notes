#### ECMA-262把对象定义为：“无序属性的集合，其属性可以包含基本值、对象或者函数”

> 理解对象

    // 创建一个object实例
    var person = new object();
    person.name = "Object-Oriented";
    person.age = 20;
    person.say = function(){
        alert(this.name);
    }

    //对象字面量创建对象
    var person = {
        name : "Object-Oriented",
        age : 20,
        say:function(){
            alert(this.name);
        }
    }

###### 属性类型

    1. 数据属性
        configurable
        enumerable
        writable
        value

    修改属性默认的特性 object.defineProperty()

    2. 访问器属性
    configurable
    enumerable
    get
    set

###### 定义多个属性 Object.defindeProperties()

###### 读取属性的特性 Object.getOwnPropertyDescriptor()
