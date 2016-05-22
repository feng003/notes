/**
 * Created by zhang on 2016/3/3.
 */
//ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
let cat = 'hen'
let dot = 'llll'
let zoo = {cat:cat,dot:dot}
console.log(zoo);

let cats = 'hens'
let dots = 'lllls'
let zone = {cats,dots}
console.log(zone);

let dog = {type:'anmial',many:2}
let {type,many} = dog
console.log(type,many)
