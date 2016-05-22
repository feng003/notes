[client]

    port = 3306
    socket = /var/run/mysqld/mysqld.sock

[mysqld]

    user = mysql
    pid-file = /var/run/mysqld/mysqld.pid
    socket =  /var/run/mysqld/mysqld.sock
    port = 3306
    basedir = /usr
    datadir = /var/lib/mysql
    tmpdir = /tmp

    # Find Tuning
    key_buffer = 16M
    max_allowed_packet = 16M
    thread_stack = 192K
    thread_cache_size = 8

    #Query Cache Configuration
    query_cache_limit = 1M
    query_cache_size  = 16M

    #Logging
    log_bin = /var/log/mysql/mysql-bin.log
    expire_logs_days = 10
    max_binlog_size = 100M
    binlog_do_db = include_database_name
    binlog_ignore_db = include_database_name

[mysqldump]

        quick
        quote-names
        max_allowed_packet = 16M

[mysqld_safe]

    syslog


 >transaction-isolation
