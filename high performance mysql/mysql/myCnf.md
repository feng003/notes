[client]

    port = 3306
    socket = /var/run/mysqld/mysqld.sock

[mysqld]
    // max_connections  Web服务器允许的最大连接数
    user = mysql
    pid-file = /var/run/mysqld/mysqld.pid
    socket =  /var/run/mysqld/mysqld.sock
    port = 3306
    basedir = /usr
    datadir = /var/lib/mysql
    tmpdir = /tmp

    # Find Tuning
    key_buffer = 16M
    max_allowed_packet = 16M     // 最大数据包大小
    thread_stack = 192K
    thread_cache_size = 8             // 线程缓存

    #Query Cache Configuration
    query_cache_limit = 1M     // 告诉MySQL丢掉大于这个大小的查询
    query_cache_size  = 16M   // 查询缓存的总大小

    #Logging
    log_bin = /var/log/mysql/mysql-bin.log
    expire_logs_days = 10
    max_binlog_size = 100M
    binlog_do_db = include_database_name
    binlog_ignore_db = include_database_name

    //log_slow_queries
    //long_query_time
    //log_queries_not_using_indexes 记录了返回所有行的查询

[mysqldump]

        quick
        quote-names
        max_allowed_packet = 16M

[mysqld_safe]

    syslog


 >transaction-isolation


 [配置参考](http://database.51cto.com/art/200907/133352.htm)
