### 类与对象

    function Widget(w,h){
        this.w = w || 100;
        this.h  = h || 100;
        this.elem = null;
    }

    Widget.prototype.render = function($where){
        if(this.elem){
            this.elem.css({
                w:this.w + "px",
                h:this.h + "px"
                }).appendTo($where);
        }
    };

    function Button(w,h,label){
        Widget.call(this,w,h);
        this.label = label || "Default";

        this.elem = $("<button>").text(this.label);
    }

    Button.prototype = Object.create(Widget.prototype);
    Button.prototype.render = function($where){
        Widget.prototype.render.call(this,$where);
        this.elem.click(this.onClick.bind(this));
    }

    Button.prototype.onClick = function(evt){
        console.log(" Button '" + this.label + "' clicked! ");
    };
    $("document").ready(function(){
        var $body = $(document.body);
        var btn1 = new Button(125,30,"hello");
        var btn2 = new Button(150,40,"Button");

        btn1.render($body);
        btn2.render($body);
        })

> class 语法糖

    class Widget{
        constructor(w,h){
            this.w = w || 100;
            this.h = h || 100;
            this.$elem = null;
        }
        render($where){
            if(this.$elem){
                this.$elem.css({
                    w:this.w+"px",
                    h:ths.h+"px"
                    }).appendTo($where);
            }
        }
    }

    class Button extends Widget{
        constructor(w,h,label){
            super(w,h);
            this.label  = label || "Default";
            this.$elem = $("<button>").text(this.label);
        }
        render($where){
            super($where);
            this.$elem.click(this.onClick.bind(this));
        }
        onClick(evt){
            console.log("button '" + this.label + '" clicked!");
        }
    }

[example](../../es6/class/index.html)

> 对象关联风格

    var Widget = {
        init:function(w,h){
            this.w = w || 100;
            this.h = h || 100;
            this.$elem = null;
        },
        insert:function($where){
            if(this.$elem){
                this.$elem.css({
                    w:this.w + "px",
                    h:this.h + "px"
                    }).appendTo($where);
            }
        }
    };

    var Button = Objcet.create(Widget);
    Button.setup = function(w,h,label){
        this.init(w,h);
        this.label = label || "Default";

        this.$elem = $("<button>").text(this.label);
    };

    Button.build = function($where){
        this.insert($where);
        this.$elem.click(this.onClick.bind(this));
    }

    Button.onClick = function(evt){
        console.log("button '" + this.label + "' clicked!");
    }

    $("document").ready(function(){
       var $body = $(document.body);
       var btn1 = Object.create(Button);
       btn1.setup(150,50,'Hello');
       btn1.build($body);
       });
