> 创建对象

1. new Object()


    var person = new Object();   // var person = {};
    person.name = "js";

2. 对象字面量


    var person = {
        name : "js",
        age : 20
    }


3. 工厂模式    用函数来封装特点接口创建对象的细节


    function createPerson(name,age,job){
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.say = function(){
            alert(this.name);
        };
        return o;
    }


4. 构造函数模式

5. 原型模式

6. 



> 继承
