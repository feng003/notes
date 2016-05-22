/**
 * Created by zhang on 2016/3/3.
 */
//demo1
var name = "zach";
while (true) {
    var name = "obama"
    console.log(name)
    break
}
console.log(name);

let names = 'zach'
while (true) {
    let names = 'obama'
    console.log(names)
    break
}
console.log(names);

//demo2
var a = [];
for(var i=0;i<10;i++)
{
    a[i] = function()
    {
        console.log(i);
    }
}
a[6]();

var a = [];
for(let i=0;i<10;i++)
{
    a[i] = function()
    {
        console.log(i);
    }
}
a[3]();

//demo3
var clickBox = document.querySelectorAll('.clickbox');
for(var i = 0;i<clickBox.length;i++)
{
    clickBox[i].onclick = function()
    {
        console.log(i);
    }
}

var clickBoxs = document.querySelectorAll('.clickboxs');
for(let i = 0;i<clickBoxs.length;i++)
{
    clickBoxs[i].onclick = function()
    {
        console.log(i);
    }
}

//demo4 const有一个很好的应用场景，就是当我们引用第三方库的时声明的变量，用const来声明可以避免未来不小心重命名而导致出现bug

const PI = Math.PI
console.log(PI);