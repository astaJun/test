import{_ as s,c as a,o as n,b as l}from"./app.2a1337b3.js";const p="/docs/assets/Java7_HashMap.6b34b1bd.jpg",o="/docs/assets/Java8_HashMap.89fe36fa.jpg",e="/docs/assets/重载和重写的区别.13e86d61.png",t="/docs/assets/StringBuilder.b318b9f5.png",r="/docs/assets/HashMap1.7hashcodequals.1f56cffa.png",c="/docs/assets/1621414916379-1621752756248.2fd541b2.png",D="/docs/assets/1621414931120-1621752756248.b716f220.png",y="/docs/assets/1621414949373.03faeb8d.png",i="/docs/assets/1621415056875.b6941adf.png",C="/docs/assets/1621415081690.7e89956e.png",A="/docs/assets/1621415094318.97102687.png",F="/docs/assets/image-20201109173809704.c1f87b4a.png",d="/docs/assets/image-20201109173855168.68b571d1.png",h="/docs/assets/bean的生命周期.5cf2b753.png",g="/docs/assets/springmvc运行流程.32f315dd.jpg",u="/docs/assets/数据案例.d498f005.png",m="/docs/assets/1.4b19396c.png",f="/docs/assets/2.2e60ae9b.png",b="/docs/assets/3.e2c1ada1.png",E="/docs/assets/image-20210520143604440.5d2d2f0b.png",v="/docs/assets/image-20210520143717928.e97e4ab7.png",k="/docs/assets/image-20210520143742317.50d8d6cc.png",S="/docs/assets/主从原理.bc9fd95b.png",x="/docs/assets/bytecode.2a797845.png",P="/docs/assets/bytecode2.4153d802.png",B="/docs/assets/bytecodeversion.6d86094f.png",M="/docs/assets/changlangchi.d3ba027d.png",R="/docs/assets/access_flag.a90c30c3.png",q="/docs/assets/field.636fc423.png",T="/docs/assets/method.c157d731.png",I="/docs/assets/class-int.cd4f41fd.png",L="/docs/assets/javammode.4691e17b.png",w="/docs/assets/classloader.bf28da9a.png",O="/docs/assets/classloader2.c57f4f22.png",j="/docs/assets/before.2117d880.png",_="/docs/assets/copy.f89052db.png",N="/docs/assets/3-1621487892206.361f4838.png",H="/docs/assets/gcollector.85bc6118.png",J="/docs/assets/serial.e0cb13a9.png",U="/docs/assets/parnew.9f5ed978.png",z="/docs/assets/serial.e0cb13a9.png",G="/docs/assets/cms.f5b69ed9.png",V="/docs/assets/cms2.d312f6da.png",X="/docs/assets/g1.abc165b2.png",W="/docs/assets/life.ca423366.jpg",K="/docs/assets/threadlocal.cec3e3d6.png",Z="/docs/assets/1.7ConcurrentHashMap.11b4f905.png",Q="/docs/assets/ConCurrentHashMap.b486544c.png",Y="/docs/assets/image-20210521124236027.39c6a306.png",$="/docs/assets/success.c6a722c7.png",ss="/docs/assets/fail.706a3f36.png",as="/docs/assets/image-20210521230854476-1621753201509.243a7dea.png",ns="/docs/assets/image-20210521230904203-1621753201509.bbb57143.png",ls="/docs/assets/image-20210521230912365-1621753201509.032f9848.png",ps="/docs/assets/image-20210521230919795-1621753201509.7ad7db91.png",os="/docs/assets/image-20210522125830646.e78150f3.png",es="/docs/assets/o_update1.d40448ea.png",ts="/docs/assets/o_update2.525a4c47.png",rs="/docs/assets/image-20210522172654370.ff901a9b.png",cs="/docs/assets/image-20210520130119426.8333a747.png",Ds="/docs/assets/image-20210520130410868.e68ad680.png",bs=JSON.parse('{"title":"HashMap原理是什么，在jdk1.7和1.8中有什么区别","description":"","frontmatter":{},"headers":[{"level":2,"title":"Java面向对象有哪些特征，如何应用","slug":"java面向对象有哪些特征-如何应用","link":"#java面向对象有哪些特征-如何应用","children":[]},{"level":2,"title":"一、接口的默认方法","slug":"一、接口的默认方法","link":"#一、接口的默认方法","children":[]},{"level":2,"title":"二、Lambda 表达式","slug":"二、lambda-表达式","link":"#二、lambda-表达式","children":[]},{"level":2,"title":"三、函数式接口","slug":"三、函数式接口","link":"#三、函数式接口","children":[]},{"level":2,"title":"四、方法与构造函数引用","slug":"四、方法与构造函数引用","link":"#四、方法与构造函数引用","children":[]},{"level":2,"title":"五、Lambda 作用域","slug":"五、lambda-作用域","link":"#五、lambda-作用域","children":[]},{"level":2,"title":"六、访问局部变量","slug":"六、访问局部变量","link":"#六、访问局部变量","children":[]},{"level":2,"title":"七、访问对象字段与静态变量","slug":"七、访问对象字段与静态变量","link":"#七、访问对象字段与静态变量","children":[]},{"level":2,"title":"八、访问接口的默认方法","slug":"八、访问接口的默认方法","link":"#八、访问接口的默认方法","children":[]},{"level":2,"title":"九、Date API","slug":"九、date-api","link":"#九、date-api","children":[]},{"level":2,"title":"十、Annotation 注解","slug":"十、annotation-注解","link":"#十、annotation-注解","children":[]},{"level":2,"title":"Proxy代理是JDK内置的动态代理","slug":"proxy代理是jdk内置的动态代理","link":"#proxy代理是jdk内置的动态代理","children":[]},{"level":2,"title":"CGLIB动态代理","slug":"cglib动态代理","link":"#cglib动态代理","children":[]},{"level":2,"title":"HashMap和HashTable对比","slug":"hashmap和hashtable对比","link":"#hashmap和hashtable对比","children":[]},{"level":2,"title":"HashMap扩容优化:","slug":"hashmap扩容优化","link":"#hashmap扩容优化","children":[]},{"level":2,"title":"为什么hashmap扩容的时候是两倍？","slug":"为什么hashmap扩容的时候是两倍","link":"#为什么hashmap扩容的时候是两倍","children":[]},{"level":2,"title":"hashmap线程安全的方式？","slug":"hashmap线程安全的方式","link":"#hashmap线程安全的方式","children":[]},{"level":2,"title":"1.throws声明异常","slug":"_1-throws声明异常","link":"#_1-throws声明异常","children":[]},{"level":2,"title":"2.throw抛出异常","slug":"_2-throw抛出异常","link":"#_2-throw抛出异常","children":[]},{"level":2,"title":"3.trycatch捕获异常","slug":"_3-trycatch捕获异常","link":"#_3-trycatch捕获异常","children":[{"level":3,"title":"大前提：","slug":"大前提","link":"#大前提","children":[]},{"level":3,"title":"(1)先更新数据库，再更新缓存","slug":"_1-先更新数据库-再更新缓存","link":"#_1-先更新数据库-再更新缓存","children":[]},{"level":3,"title":"(2)先删缓存，再更新数据库","slug":"_2-先删缓存-再更新数据库","link":"#_2-先删缓存-再更新数据库","children":[]},{"level":3,"title":"(3)先更新数据库，再删缓存","slug":"_3-先更新数据库-再删缓存","link":"#_3-先更新数据库-再删缓存","children":[]}]},{"level":2,"title":"Redis 持久化","slug":"redis-持久化","link":"#redis-持久化","children":[]},{"level":2,"title":"扩展知识","slug":"扩展知识","link":"#扩展知识","children":[]},{"level":2,"title":"过期精度","slug":"过期精度","link":"#过期精度","children":[]},{"level":2,"title":"过期和持久","slug":"过期和持久","link":"#过期和持久","children":[]},{"level":2,"title":"Redis如何淘汰过期的keys","slug":"redis如何淘汰过期的keys","link":"#redis如何淘汰过期的keys","children":[]},{"level":2,"title":"在复制AOF文件时如何处理过期","slug":"在复制aof文件时如何处理过期","link":"#在复制aof文件时如何处理过期","children":[]},{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[]},{"level":2,"title":"IO模型维度的特征","slug":"io模型维度的特征","link":"#io模型维度的特征","children":[]},{"level":2,"title":"架构设计模型","slug":"架构设计模型","link":"#架构设计模型","children":[]},{"level":2,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]},{"level":2,"title":"缓存击穿","slug":"缓存击穿","link":"#缓存击穿","children":[{"level":3,"title":"解决方案","slug":"解决方案-1","link":"#解决方案-1","children":[]}]},{"level":2,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[{"level":3,"title":"解决方案","slug":"解决方案-2","link":"#解决方案-2","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"语义有些许差异，但是，都可以使用限流的互斥锁，保障数据库的稳定","slug":"语义有些许差异-但是-都可以使用限流的互斥锁-保障数据库的稳定","link":"#语义有些许差异-但是-都可以使用限流的互斥锁-保障数据库的稳定","children":[]},{"level":2,"title":"事务中的错误","slug":"事务中的错误","link":"#事务中的错误","children":[]},{"level":2,"title":"为什么 Redis 不支持回滚（roll back）","slug":"为什么-redis-不支持回滚-roll-back","link":"#为什么-redis-不支持回滚-roll-back","children":[]},{"level":2,"title":"常见集群分类","slug":"常见集群分类","link":"#常见集群分类","children":[]},{"level":2,"title":"redis有那些：","slug":"redis有那些","link":"#redis有那些","children":[]},{"level":2,"title":"主从复制机制","slug":"主从复制机制","link":"#主从复制机制","children":[]},{"level":2,"title":"主从复制的关注点","slug":"主从复制的关注点","link":"#主从复制的关注点","children":[]},{"level":2,"title":"Redis 复制功能是如何工作的","slug":"redis-复制功能是如何工作的","link":"#redis-复制功能是如何工作的","children":[]},{"level":2,"title":"无需磁盘参与的复制","slug":"无需磁盘参与的复制","link":"#无需磁盘参与的复制","children":[]},{"level":2,"title":"回收策略","slug":"回收策略","link":"#回收策略","children":[]},{"level":2,"title":"回收进程如何工作","slug":"回收进程如何工作","link":"#回收进程如何工作","children":[]},{"level":2,"title":"是AMQP的实现，相关概念语义","slug":"是amqp的实现-相关概念语义","link":"#是amqp的实现-相关概念语义","children":[{"level":3,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":3,"title":"Exchange","slug":"exchange","link":"#exchange","children":[]}]},{"level":2,"title":"复杂与精简","slug":"复杂与精简","link":"#复杂与精简","children":[]},{"level":2,"title":"消息发送确认","slug":"消息发送确认","link":"#消息发送确认","children":[{"level":3,"title":"1 ConfirmCallback方法","slug":"_1-confirmcallback方法","link":"#_1-confirmcallback方法","children":[]},{"level":3,"title":"2 ReturnCallback方法","slug":"_2-returncallback方法","link":"#_2-returncallback方法","children":[]}]},{"level":2,"title":"消息接收确认","slug":"消息接收确认","link":"#消息接收确认","children":[]},{"level":2,"title":"事务V.S确认","slug":"事务v-s确认","link":"#事务v-s确认","children":[]},{"level":2,"title":"发送方事务","slug":"发送方事务","link":"#发送方事务","children":[]},{"level":2,"title":"消费方事务","slug":"消费方事务","link":"#消费方事务","children":[]},{"level":2,"title":"死信队列","slug":"死信队列","link":"#死信队列","children":[]},{"level":2,"title":"ACK机制","slug":"ack机制","link":"#ack机制","children":[]},{"level":2,"title":"ack=0：生产者在生产过程中的消息丢失","slug":"ack-0-生产者在生产过程中的消息丢失","link":"#ack-0-生产者在生产过程中的消息丢失","children":[]},{"level":2,"title":"ack=1：broker在故障后的消息丢失","slug":"ack-1-broker在故障后的消息丢失","link":"#ack-1-broker在故障后的消息丢失","children":[]},{"level":2,"title":"ack=-1：生产侧和存储侧不会丢失数据","slug":"ack-1-生产侧和存储侧不会丢失数据","link":"#ack-1-生产侧和存储侧不会丢失数据","children":[]},{"level":2,"title":"Offset机制","slug":"offset机制","link":"#offset机制","children":[]},{"level":2,"title":"消费者分区分配策略","slug":"消费者分区分配策略","link":"#消费者分区分配策略","children":[]},{"level":2,"title":"触发 Rebalance 的时机","slug":"触发-rebalance-的时机","link":"#触发-rebalance-的时机","children":[]},{"level":2,"title":"Coordinator协调过程","slug":"coordinator协调过程","link":"#coordinator协调过程","children":[]},{"level":2,"title":"ZooKeeper数据模型","slug":"zookeeper数据模型","link":"#zookeeper数据模型","children":[]},{"level":2,"title":"节点类型","slug":"节点类型","link":"#节点类型","children":[]},{"level":2,"title":"ZooKeeper的Watch特性","slug":"zookeeper的watch特性","link":"#zookeeper的watch特性","children":[]},{"level":2,"title":"Zookeeper状态","slug":"zookeeper状态","link":"#zookeeper状态","children":[]},{"level":2,"title":"Zookeeper事件类型","slug":"zookeeper事件类型","link":"#zookeeper事件类型","children":[]},{"level":2,"title":"Watcher使用的注意事项","slug":"watcher使用的注意事项","link":"#watcher使用的注意事项","children":[]},{"level":2,"title":"分布式协调","slug":"分布式协调","link":"#分布式协调","children":[]},{"level":2,"title":"命名服务","slug":"命名服务","link":"#命名服务","children":[]},{"level":2,"title":"配置管理","slug":"配置管理","link":"#配置管理","children":[]},{"level":2,"title":"集群管理","slug":"集群管理","link":"#集群管理","children":[]}],"relativePath":"zh/题目和答案/面试题目和答案.md","lastUpdated":1675892686000}'),ys={name:"zh/题目和答案/面试题目和答案.md"},is=l("",1568),Cs=[is];function As(Fs,ds,hs,gs,us,ms){return n(),a("div",null,Cs)}const Es=s(ys,[["render",As]]);export{bs as __pageData,Es as default};
