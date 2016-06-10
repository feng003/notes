
> node模块

    http
    url
    querystring

    http://localhost:8888/start?foo=bar&hello=world

    url.parse(string).pathname   // start

    url.parse(string).query  //  ?foo=bar&hello=world

    querystring(string)["foo"]   // bar
    querystring(string)["hello"]  // world
