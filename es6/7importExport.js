/**
 * Created by zhang on 2016/3/4.
 */
//ES6模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS和AMD模块，都只能在运行时确定这些东西。

//define(定义) content.js
define('content.js', function(){
    return 'A cat';
})


//引入(require) index.js
require(['./content.js'], function(animal){
    console.log(animal);   //A cat
})

//CommonJS

//index.js
var animal = require('./content.js')

//content.js
module.exports = 'A cat'

//ES6

//index.js
import animal from './content'

//content.js
export default 'A cat'