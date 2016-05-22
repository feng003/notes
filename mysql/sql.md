
    http://zcgj.xsy.9885.net/

    2015.12.14
    UPDATE `xs_order_amount` SET `order_sum`=`order_sum`+1 WHERE ( `username` IN ('143341','143176') );
    select * from user where username='149273';
    select * from w_social_info where user_id = 32;
    select * from wallet where username =  '149273';

    2015.09.22
    select FROM_UNIXTIME(w_time,'%c-%e') as m,Sum(number)  as ct from money_log where account_type ="money" AND number > 0 group by FROM_UNIXTIME(w_time,'%c-%e')  ORDER BY( w_time );

    select FROM_UNIXTIME(w_time,'%c-%e') as m,Sum(number)  as ct from money_log where account_type ="money" AND number < 0 group by FROM_UNIXTIME(w_time,'%c-%e') ORDER BY( w_time );

    select FROM_UNIXTIME(create_time,'%c') as m,COUNT(FROM_UNIXTIME(create_time,'%c'))  as ct from user group by FROM_UNIXTIME(create_time,'%c');

    select FROM_UNIXTIME(w_time,'%D') as m,Sum(number)  as ct from money_log where account_type ="money" AND number < 0 group by FROM_UNIXTIME(w_time,'%D') ORDER BY( w_time );

    select * from xs_product_category where is_nav = "0" and is_index= '0';

    select *  from xs_product_category where parent_id in  (select id from xs_product_category where parent_id in (8,11,12,13,14,15,16,1029))

    select * FROM wallet where ad_money >0;

    update wallet set money = money+ad_money where ad_money > 0;

    -- 数据查询 之后  数据导入
    select id,username from trunk.user where id = 20;

    insert into test.weixinuser (id,name)  select id,username from trunk.user;

    select ws.weixin_openid from trunk.w_social_info as ws LEFT JOIN test.weixinuser as wx ON wx.id = ws.user_id;

    insert into test.weixinuser (openid)  select ws.weixin_openid from trunk.w_social_info as ws LEFT JOIN test.weixinuser as wx ON wx.id = ws.user_id;

    Other
    $url = "http://".CONFIG('web_address')."/".U('Article/index',array('token' => $this->token,'wecha_id'=>$this->data['FromUserName'],'id'=>$infot['id']));

    -- SELECT SUM(number_total * price_total) AS tp_Sum FROM `xs_order` WHERE ( `userid` = 'feng003' ) AND ( `status` = 3 ) LIMIT 1
    -- select CURDATE()   //2015-04-08
    -- select CURTIME();  09:18:19
    -- select NOW()  2015-04-08 09:19:04
    -- SELECT SUM(pv_total) FROM `xs_order` WHERE FROM_UNIXTIME(pay_time,'%Y-%m-%d')=CURDATE() AND `status` =1
    -- SELECT COUNT(1) AS tp_count FROM `user` WHERE ( `tjruserid` = 'feng002' ) LIMIT 1  
    -- UPDATE `user` SET `rank`=1 WHERE ( `username` = 'feng003' )
    -- SELECT * FROM `xs_order` WHERE id = '389' AND ((u_id = '1' AND status = 2)OR(s_uid = '1' AND status = 2)) LIMIT 1

    SELECT * FROM `xs_order` WHERE id = '388' AND ((u_id = '1' AND status = 2)OR(s_uid = '1' AND status = 2)) LIMIT 1
    SELECT SUM(price_total) FROM `xs_order` WHERE FROM_UNIXTIME(order_time,'%Y-%m-%d')=CURDATE()
    UPDATE `user` SET rank = rank+10,nickname= CASE WHEN id =1 THEN 'feng002' WHEN id=2 THEN 'fengzhz' ELSE 'fengz' END where id IN (1,2,3,4);
    UPDATE wallet w LEFT JOIN `user` u ON u.id = w.uid set u.rank =20,w.money =1000 where w.uid =1 ;

    ----wanwei category
    DELETE from xs_product_category where name != '汽车用品' or name != '时尚礼品';

    select * from xs_product_category where name = '汽车用品' or name = '时尚礼品';

    select * from xs_product_category where id = 1845 or id = 2485 or FIND_IN_SET('1845',`parent_path`) or FIND_IN_SET('2485',`parent_path`);

    delete from xs_product_category where id not in( select a.id FROM (select * from xs_product_category where id = 1845 or id = 2485 or FIND_IN_SET('1845',`parent_path`) or FIND_IN_SET('2485',`parent_path`)) a)

    delete from xs_product_category where id not in (select id from xs_product_category where id = 1845 or id = 2485 or FIND_IN_SET('1845',`parent_path`) or FIND_IN_SET('2485',`parent_path`))


 2016.05.20

//一个表的多个字段 实现 添加某个值

    UPDATE `zc_m_product` SET `remain`=remain-1,`zc_total`=zc_total+100.00 WHERE ( `id` = '3' )

    $price_data = array();
    $price_data['remain']   = array('exp','remain-'.$order_item_vo['number_total']);
    $price_data['zc_total'] = array('exp','zc_total+'.$order_item_vo['price_total']);
    $res = M('zc_m_product')->where(array('id'=>$price_info['pid']))->save($price_data);
