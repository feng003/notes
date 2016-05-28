####  NumberObject.toFixed(num) toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。

    var num = new Number(13.37);
    num.toFixed(1);

#### NumberObject.toString(radix)  toString() 方法可把一个 Number 对象转换为一个字符串，并返回结果。

    var number = new Number(1337);
    number.toString();

#### 转换函数、强制类型转换、利用js变量弱类型转换。

        1、parseInt()和parseFloat()，前者把值转换成整数，后者把值转换成浮点数。只有对String类型调用这些方法，这两个函数才能正确运行；对其他类型返回的都是NaN(Not a Number)。
        2、Boolean(value)  Number(value)  String(value)
        3、js的弱类型的特点，进行了算术运算，实现了字符串到数字的类型转换。
