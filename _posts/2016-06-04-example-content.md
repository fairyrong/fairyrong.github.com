---
layout: post
title: Example content for posts  
categories: 前端 css
---
刚开始接触前端时做了很多有趣的小东西，分享一下：

##  - CSS皮卡丘
可爱的皮卡丘，show一下~~
![image](http://fairyrong.github.io/assets/皮卡丘.gif)

1. 绘制前准备用**画图工具**，分析一下都需要哪些形状，和他们的层叠顺序，**理清思路**，像下边这样。
![image](http://fairyrong.github.io/assets/131858qiiiaocc3ew1iwte.jpg)

2. 将**div调整成需要的样**子，各种形状的div绘制，百度搜下CSS多边形，有很多因为皮卡丘很肉，用到最多的形状就是椭圆，可以用**border-radius**生成各种各样的椭圆
[http://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/](http://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/)
椭圆有两个半径，这里一样，每个角上都有两个半径，通过这两个值可以造自己需要的任何零件。a是横轴半径，b是纵轴半径，也可以用百分数来表示：
![image](http://fairyrong.github.io/assets/144117x0ks0bo644ks6jjl.png)
```
上左：border-top-left-radius:a,b
上右：border-top-right-radius:a,b
下左：border-bottom-left-radius:a,b
下右：border-bottom-right-radius:a,b 
```
3. 把它身上的小零件画好后，叠放起来，调准位置
4. 当然还可以让他动起来
5. 源码：[皮卡丘](http://www.qdfuns.com/notes/20121/5d7b923df009758a347b6a5e64153c42.html)
