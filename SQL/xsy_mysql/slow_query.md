> 1. show VARIABLES like "%slow%"

    show variables like 'log_output';  //确认日志信息输出到操作系统文件还是数据库的表中

    set global slow_query_log  = on;
    set global long_query_time = 1;
    set global slow_query_log_file = "/var/log/mysql-slow.log";

    show global status like 'Slow_queries';   // 查询出现慢查询次数的累计值

>  my.conf

    [mysqld]

    log-slow-queries = /usr/local/mysql/var/slowquery.log
    long_query_time = 1  #单位是秒
    log-queries-not-using-indexes

> mysqldumpslow –help

    mysql/bin目录，输入 mysqldumpslow –help 或--help可以看到这个工具的参数

    mysqldumpslow  [ OPTS... ] [ LOGS... ]

    -s  ORDER     what to sort by (t, at, l, al, r, ar etc), 'at' is default

    -t NUM       just show the top n queries

    -r           reverse the sort order (largest last instead of first)

    mysqldumpslow -s c -t 20 host-slow.log
    mysqldumpslow -s r -t 20 host-slow.log


[参考文档](http://blog.csdn.net/wenbingcai/article/details/40340867)

[参考文档](http://blog.chinaunix.net/uid-16844903-id-332524.html)
