>ubuntu 修改mysql  root 密码

    1. sudo service mysql stop
    2. sudo mysqld_safe --user=mysql --skip-grant-tables --skip-networking

![password](./password.png)

    3. ctrl+T重开一个终端以root身份登录mysql
    mysql -u root mysql
    update user set password=PASSWORD('toor') where user='root';

    4. 修改user表：root权限(Grant_priv)
    select * from user where user='root';
    update user set Grant_priv='Y' where user='root';

    5. 停止mysqld_safe,重启mysql
    kill -9 mysqld_safe_pid
    pkill mysql
    service mysql start


 > 查看进程

    ps -e | grep mysql

    sudo kill pid
    sudo  kill -9 mysqld_safe_pid

> mysql终端查看

    show variables like 'log%';
