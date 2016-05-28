### h5提供客户端存储数据的新方法：

    localStorage  -- 没有时间限制的数据存储 （持久化）
    sessionStorage -- 针对一个session的数据存储（会话级别）

1、web storage 和 cookie 的区别

    Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。
    除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。
    但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。

2、localStorage和sessionStorage操作

    setItem、getItem 和 removeItem

    setItem 存储value     sessionStorage.setItem("key", "value");
    getItem 获取value    var value = sessionStorage.getItem("key");
    removeItem 删除key    sessionStorage.removeItem("key");
    clear 清除所有的key/value   sessionStorage.clear();

3、浏览器兼容

    //数据存储  IE6~7 cookie 其他浏览器HTML5本地存储
    var arrDisplay = [0, 1, 1, 1];
    if (window.localStorage) {
    localStorage.setItem("menuTitle", arrDisplay);
    } else {
    Cookie.write("menuTitle", arrDisplay);
    }

    //数据读取
    var strStoreDate = window.localStorage? localStorage.getItem("menuTitle"): Cookie.read("menuTitle");

    虽然我们存储的是数组，但是，实际上存储的的是数组字符化后的字符串。
