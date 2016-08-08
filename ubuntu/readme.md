gedit /etc/hosts

创建databases:
CREATE DATABASE dianshang DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

更改数据库的字符编码:
ALTER DATABASE db_name DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

导入mysql数据库:
source /home/zhang/load/xsy_trunk.sql;

软链接:
ln -s 源文件 目标文件

rar 格式:
压缩功能
安装 sudo apt-get install rar
卸载 sudo apt-get remove rar
解压功能
安装 sudo apt-get install unrar
卸载 sudo apt-get remove unrar

sudo apt-get install kchmviewer  //chm阅读器

atom http://www.open-open.com/lib/view/open1457082318187.html

Atom默认会根据窗口宽度对文本进行自动软换行处理（如果没有的话，可以在File->Settings下将Soft Wrap选项的勾打上）

cmd-shift-P 并且当前焦点在一个窗格上的时候，命令面板就会弹出来。
cmd-T 或 cmd-P 的时候，模糊查找框（Fuzzy Finder）就会弹出。它允许你通过输入文件名或路径的一部分，在整个项目中模糊查找相应的文件。
cmd-B 来只查找已经打开的文件，而不是所有文件。你还可以用 cmd-shift-B 来只查找从上次 Git 提交之后修改过或新增的文件。
