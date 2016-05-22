/**
 * Created by zhang on 2016/3/3.
 */
//当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。

var num = function(i){return i+1}
var nums = (i)=>i+1;
console.log(num(10));
console.log(nums(15));

class Animal
{
    constructor()
    {
        this.type = 'animal'
    }
    says(say)
    {
        var self = this;
        setTimeout(function(){
            console.log(self.type + 'say' + say)
        },1000)
        //console.log(this.type + 'saySAY' + say)
    }

    //says(say){
    //    setTimeout(function(){
    //        console.log(this.type + 'say' + say)
    //    }.bind(this),1000)
    //}
}

var animal = new Animal();
animal.says('hi');


class Fruit
{
    constructor()
    {
        this.type = 'fruit'
    }
    eats(eats)
    {
        setTimeout(()=>{
            console.log(this.type + 'Eats' + eats)
        },1000)
    }
}

var fruit = new Fruit();
fruit.eats('tu');
