# 项目介绍

该项目来自慕课网实战课程：[React Native 开发跨平台 GitHubPopular](http://coding.imooc.com/class/89.html)，非常感谢该项目作者**贾鹏辉**老师的精心制作。

>贾鹏辉老师还撰写了很多关于React Native的技术博客：[贾鹏辉老师的技术博客](http://www.devio.org/)，在里面可以学到很多关于React Native相关的知识。

已经实现了除调用友盟接口和集成CodePush的功能，并且对项目做了一点重构，而且做了一点优化。

目录结构：

![](http://oih3a9o4n.bkt.clouddn.com/rn_12.png)


# 项目演示：

### 上排是iOS模拟器，下排是Android模拟器：
![](http://oih3a9o4n.bkt.clouddn.com/rn_13.png)

### 多主题切换：
![多主题切换](http://oih3a9o4n.bkt.clouddn.com/rn_15.png)

### 交互展示：
![](http://oih3a9o4n.bkt.clouddn.com/github%E5%AE%A2%E6%88%B7%E7%AB%AF_4.gif)

# 运行方法（iOS）

### 1. 添加依赖包
因为删除了node_modules文件夹（占据空间很大），需要重新下载：
在项目根目录下执行：``npm install``方法。

然后下载该项目需要的第三方组件(下载完成后也会自动放在node_modules文件夹里)。也是在根目录下执行下面的命令:
``yarn add react-native-check-box``
``yarn add react-native-parallax-scroll-view``
``yarn add react-native-scrollable-tab-view``
``yarn add react-native-sortable-listview``
``yarn add react-native-tab-navigator``

### 2. 打包运行

有两种方法可以启动模拟器运行：
1. 在根目录下执行下面的命令:``react-native run-ios``，随后就可以自动启动本地服务，打开iOS模拟器运行项目。
2. 找到iOS项目文件夹，用Xcode打开项目，点击运行按钮运行（也可以连接iPhone运行）。


# To Do List
1. 性能优化：在真机上的性能还有待提升，会将接下来研究的重点放在性能优化上。
2. 加入Redux：性能提升以后，会引入Redux进行状态管理。


# License
All source code is licensed under the [MIT License](https://github.com/knightsj/GitHubPopular-SJ/blob/master/LICENSE).




