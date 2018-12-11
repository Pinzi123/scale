> **参考文章**
>  - [tsconfig.json详细解析](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)
>  - [第三方扩展库](http://developer.egret.com/cn/github/egret-docs/extension/threes/instructions/index.html)
 - CDSN地址[点这里](https://blog.csdn.net/from_the_star/article/details/84028832)

 1. 目录如下
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181113142636864.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2Zyb21fdGhlX3N0YXI=,size_16,color_FFFFFF,t_70)
 2. 先npm init，接着配置package.json
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181113142351343.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2Zyb21fdGhlX3N0YXI=,size_16,color_FFFFFF,t_70)
 3. 使用tsc来编译文件，编译配置在tsconfig.json里，命令行tsc回车就会生成dist下的文件
 4. 编写index.d.ts

```
export * from './dist/scale'
```

 5. npm安装使用

由于我是离线安装，就先打了一个tar包，然后npm install Picture-Operation.taz即可
也可以npm publish发布上线，正常安装
如果你要发布到自己的npm私有服，看也看看[这篇文章](https://zhuanlan.zhihu.com/p/35907412)