import{_ as a,c as n,o as l,b as p}from"./app.2a1337b3.js";const e="/docs/assets/ca3267e37fbcea9860fbb8c1a123b890.3726adac.png",o="/docs/assets/image-20210223183403846.d3af613d.png",t="/docs/assets/image-20210223184621929.412311a2.png",c="/docs/assets/image-20210223185425530.91cd2e16.png",r="/docs/assets/image-20210223190314710.0ea970ba.png",C="/docs/assets/image-20210223190958479.533baff8.png",i="/docs/assets/20171001102830565.073ceaf1.jpg",y="/docs/assets/image-20210223225331272.43b93ca1.png",s="/docs/assets/image-20210225145149719.d72c812f.png",A="/docs/assets/image-20210225145518219.a1147ef3.png",d="/docs/assets/image-20210225145628065.90f75e53.png",D="/docs/assets/image-20210225145735034.e61428a8.png",h="/docs/assets/image-20210225145820881.20b9b953.png",g="/docs/assets/image-20210225145952106.272dcb8f.png",u="/docs/assets/image-20210225150057711.5ce0250b.png",F="/docs/assets/image-20210225151422574.4cb4ba90.png",m="/docs/assets/image-20210225151559821.81cc3b94.png",_="/docs/assets/image-20210225151756277.885dfb77.png",b="/docs/assets/image-20210225151931506.729152bf.png",f="/docs/assets/image-20210225152020029.fbfbd615.png",x="/docs/assets/image-20210225152153430.3e0e0eda.png",E="/docs/assets/image-20210225152504501.b9de0bda.png",k="/docs/assets/image-20210225152920810-1629947490208.6e647868.png",v="/docs/assets/image-20210225154255766.90a63a59.png",I="/docs/assets/image-20210225154807671.ef81c2b5.png",L="/docs/assets/image-20210223214405076.2428129f.png",S="/docs/assets/image-20210225160908774.81ca13e7.png",V=JSON.parse('{"title":"一. MYSQL索引","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1 索引介绍","slug":"_1-1-索引介绍","link":"#_1-1-索引介绍","children":[{"level":3,"title":"1.1.1 索引是什么","slug":"_1-1-1-索引是什么","link":"#_1-1-1-索引是什么","children":[]},{"level":3,"title":"索引的优势和劣势","slug":"索引的优势和劣势","link":"#索引的优势和劣势","children":[]}]},{"level":2,"title":"1.2 索引分类","slug":"_1-2-索引分类","link":"#_1-2-索引分类","children":[{"level":3,"title":"单列索引","slug":"单列索引","link":"#单列索引","children":[]},{"level":3,"title":"组合索引","slug":"组合索引","link":"#组合索引","children":[]},{"level":3,"title":"空间索引","slug":"空间索引","link":"#空间索引","children":[]}]},{"level":2,"title":"1.3 索引使用","slug":"_1-3-索引使用","link":"#_1-3-索引使用","children":[{"level":3,"title":"1.3.1 创建索引","slug":"_1-3-1-创建索引","link":"#_1-3-1-创建索引","children":[]},{"level":3,"title":"1.3.2 删除索引","slug":"_1-3-2-删除索引","link":"#_1-3-2-删除索引","children":[]},{"level":3,"title":"1.3.3 查看索引","slug":"_1-3-3-查看索引","link":"#_1-3-3-查看索引","children":[]}]},{"level":2,"title":"1.4 索引原理分析","slug":"_1-4-索引原理分析","link":"#_1-4-索引原理分析","children":[{"level":3,"title":"1.4.1 索引的存储结构","slug":"_1-4-1-索引的存储结构","link":"#_1-4-1-索引的存储结构","children":[]},{"level":3,"title":"1.4.2 存储引擎","slug":"_1-4-2-存储引擎","link":"#_1-4-2-存储引擎","children":[]},{"level":3,"title":"1.4.3 非聚集索引 (聚簇索引)","slug":"_1-4-3-非聚集索引-聚簇索引","link":"#_1-4-3-非聚集索引-聚簇索引","children":[]},{"level":3,"title":"1.4.4 聚集索引(聚簇索引)","slug":"_1-4-4-聚集索引-聚簇索引","link":"#_1-4-4-聚集索引-聚簇索引","children":[]},{"level":3,"title":"1.4.5 回表查询","slug":"_1-4-5-回表查询","link":"#_1-4-5-回表查询","children":[]},{"level":3,"title":"1.4.6 覆盖索引","slug":"_1-4-6-覆盖索引","link":"#_1-4-6-覆盖索引","children":[]},{"level":3,"title":"1.4.7 左前缀原则","slug":"_1-4-7-左前缀原则","link":"#_1-4-7-左前缀原则","children":[]}]},{"level":2,"title":"1.5 索引分析","slug":"_1-5-索引分析","link":"#_1-5-索引分析","children":[{"level":3,"title":"1.5.1 环境准备","slug":"_1-5-1-环境准备","link":"#_1-5-1-环境准备","children":[]},{"level":3,"title":"1.5.2 参数说明","slug":"_1-5-2-参数说明","link":"#_1-5-2-参数说明","children":[]}]},{"level":2,"title":"1.6 索引总结","slug":"_1-6-索引总结","link":"#_1-6-索引总结","children":[{"level":3,"title":"1.6.1 需要创建索引情况","slug":"_1-6-1-需要创建索引情况","link":"#_1-6-1-需要创建索引情况","children":[]},{"level":3,"title":"1.6.2 不要创建索引情况","slug":"_1-6-2-不要创建索引情况","link":"#_1-6-2-不要创建索引情况","children":[]},{"level":3,"title":"1.6.3 多使用组合索引","slug":"_1-6-3-多使用组合索引","link":"#_1-6-3-多使用组合索引","children":[]}]},{"level":2,"title":"2.1 锁介绍","slug":"_2-1-锁介绍","link":"#_2-1-锁介绍","children":[]},{"level":2,"title":"2.2 表级锁","slug":"_2-2-表级锁","link":"#_2-2-表级锁","children":[{"level":3,"title":"2.2.1 表锁","slug":"_2-2-1-表锁","link":"#_2-2-1-表锁","children":[]},{"level":3,"title":"2.2.2 元数据锁","slug":"_2-2-2-元数据锁","link":"#_2-2-2-元数据锁","children":[]},{"level":3,"title":"2.2.3 意向锁","slug":"_2-2-3-意向锁","link":"#_2-2-3-意向锁","children":[]}]},{"level":2,"title":"2.4 行级锁","slug":"_2-4-行级锁","link":"#_2-4-行级锁","children":[{"level":3,"title":"2.4.1 记录锁","slug":"_2-4-1-记录锁","link":"#_2-4-1-记录锁","children":[]},{"level":3,"title":"2.4.2 间隙锁","slug":"_2-4-2-间隙锁","link":"#_2-4-2-间隙锁","children":[]},{"level":3,"title":"2.4.3 Next-Key Locks","slug":"_2-4-3-next-key-locks","link":"#_2-4-3-next-key-locks","children":[]},{"level":3,"title":"2.4.1 共享锁与独占锁","slug":"_2-4-1-共享锁与独占锁","link":"#_2-4-1-共享锁与独占锁","children":[]}]},{"level":2,"title":"2.6 死锁","slug":"_2-6-死锁","link":"#_2-6-死锁","children":[]}],"relativePath":"zh/java/面试/mysql索引与锁/mysql索引与锁.md","lastUpdated":1675892686000}'),q={name:"zh/java/面试/mysql索引与锁/mysql索引与锁.md"},T=p("",289),w=[T];function B(M,N,R,O,Q,U){return l(),n("div",null,w)}const H=a(q,[["render",B]]);export{V as __pageData,H as default};
