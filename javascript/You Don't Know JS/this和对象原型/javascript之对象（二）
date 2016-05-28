##### 6 不变性（属性或者对象是不可改变的）
1. 对象常量 writable:false and configurable:false.


    var obj = {};

    Object.defineProperty(obj,"FAVORITE_NUMBER",{
            value:40,
            writable:false,
            configurable:false
    });
    obj.FAVORITE_NUMBER = 100;

    Object.defineProperty(object, propertyname, descriptor)   将属性添加到对象，或修改现有属性的特性。

2. 禁止扩展 Object.preventExtensions()


    var myObject = {
        a:2
    }
    Object.preventExtensions(myObject);

    myObject.b = 3;
    myObject.b; //undefined

3. 密封 Object.seal()
4. 冻结 Object.freeze()

###### 7 Get 属性访问（获取属性值）

    var obj = {
        a:2
        b:undefined
    }
    obj.a;
    obj.b;//undefined

###### 8 Put 设置或创建属性

如果已经存在这个属性：
1. 属性是否是访问描述符，如果是并且存在setter就调用setter
2. 属性的数据描述符中writable是否是false？如果是，在非严格模式下静默失败，在严格模式下抛出TypeError异常
3. 如果都不是，将该值设置为属性的值
