/**
 * Created by zhang on 2016/3/3.
 */

class Animal{
    constructor()
    {
        this.type = 'animal'
    }
    says(say)
    {
        console.log(this.type + 'say' + say)
    }
}

let animal = new Animal()
animal.says('hi');

class Cat extends Animal {
    constructor()
    {
            super()
        this.type = 'cat';
    }
}

let cat = new Cat();
cat.says('hello');