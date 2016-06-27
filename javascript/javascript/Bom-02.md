>客户端检测

### 能力检测

    if(object.propertyInQuestion){
        //object.propertyInQuestion
    }
### 怪癖检测

    var hasDontEnumQuirk = function(){
        var o = {toString:function(){}};
        for(var prop in o ){
            if(prop == 'toString'){
                return false;
            }
        }
        return true;
    }();

### 用户代理检测

    var client = function(){
        var engine = {
            ie: 0,
            gecko:0,
            webkit:0,
            khtml:0,
            opera:0

            ver:null
        };
        var brower = {
            ie:0,
            firefox:0,
            safari:0,
            knoq:0,
            opera:0,
            chrome:0

            ver:null
        };

        var system = {
            win:false,
            mac:false,
            x11:false
        }

        return {
            engine:engine,
            brower:brower,
            system:system,

            <!-- 移动设备 -->
            iphone:false,
            ipod:false,
            ipad:false,
            ios:false,
            android:false,
            nokiaN:false,
            winMobole:false,

            <!-- 游戏系统 -->
            wii:false,
            ps:false,
        }
    }()
