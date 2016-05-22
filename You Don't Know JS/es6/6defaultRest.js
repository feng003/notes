/**
 * Created by zhang on 2016/3/3.
 */

//default
function animal(type){
    type = type || 'cat'
    console.log(type)
}
animal()

function animal(type = 'cat'){
    console.log(type)
}
animal()


//rest语法
function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]