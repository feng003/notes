var client = function(){
    var engine = {
        ie: 0,
        gecko:0,
        webkit:0,
        khtml:0,
        opera:0,

        ver:null
    };
    var brower = {
        ie:0,
        firefox:0,
        safari:0,
        knoq:0,
        opera:0,
        chrome:0,

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
    };
    var ua = navigator.userAgent;
    if(window.opera){
        engine.ver = brower.ver = window.opera.version();
        engine.opera = brower.opera = parseFloat(engine.ver);
    }else if(/AppleWebKit\/(\S+)/.test(ua)){
        engine.ver = RegExp["$1"];
        engine.webkit = parseFloat(engine.ver);
        if (/Chrome\/(S+)/.test(ua)) {
            brower.ver = RegExp["$1"];
            brower.chrome = parseFloat(brower.ver);
        }else if (/Version\/(S+)/.test(ua)) {
            brower.ver = RegExp["$1"];
            brower.chrome = parseFloat(brower.ver);
        }else {
            var safariVersion = 1;
            if(engine.webkit<100){
                safariVersion = 1;
            }else if (engine.webkit<312) {
                safariVersion = 1.2;
            }else if (engine.webkit < 412) {
                safariVersion = 1.3;
            }else {
                safariVersion = 2;
            }
            brower.safari = brower.ver = safariVersion;
        }
    }else if (/KHTML\/(S+)/.test(ua)||/Konqueror\([^;]+)/.test(ua)) {
        engine.ver = brower.ver = RegExp["$1"];
        engine.khtml = brower.konq = parseFloat(engine.ver);
    }else if (/rv:([^\)]+)\) Gecko\/d{8}/.test(ua)) {
        engine.ver = RegExp["$1"];
        engine.gecko = parseFloat(engine.ver);

        if(/Firefox\(S+)/.test(ua)){
            brower.ver = RegExp["$1"];
            brower.firefox = parseFloat(brower.ver);
        }
    }else if (/MISE ([^;]+)/.test(ua)) {
        engine.ver = brower.ver = RegExp["$1"];
        engine.ie = brower.konq = parseFloat(engine.ver);
    }
    brower.ie = engine.ie;
    brower.opera = engine.opera;

    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

    return {
        engine:engine,
        brower:brower,
        system:system
    }
}();
