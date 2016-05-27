### 行为委托

> 委托理论

    Object.create(proto,[propertiesObject]) 创建一个拥有指定原型和若干个指定属性的对象

    Task = {
        setID:function(ID){this.id = ID},
        outputID:function(){console.log(this.id)}       
    }

    Xyz = Object.create(Task);   // Xyz 通过Object.create()创建，它的[prototype] 委托了Task对象

    Xyz.prepareTask = function(ID,Label){
        this.setID(ID);
        this.label = Label;
    }


### 类与对象

### 更简洁的设计

### 更好的语法

### 内省
