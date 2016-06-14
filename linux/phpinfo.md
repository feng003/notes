
(1)通过修改服务器环境内php.ini文件，将“expose_php = On”修改成“expose_php = Off”然后重启php即可。

(2)若无需要可以将一些php的危险函数禁用，
    打开/etc/php.ini文件，查找到 disable_functions，添加需禁用的以下函数名：

    phpinfo,eval,passthru,exec,system,chroot,scandir,chgrp,chown,shell_exec,proc_open,
    proc_get_status,ini_alter,ini_alter,ini_restore,dl,pfsockopen,openlog,syslog,readlink,
    symlink,popepassthru,stream_socket_server,fsocket,fsockopen
