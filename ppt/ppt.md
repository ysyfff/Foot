/* 先写总的配置 */
title: React Native实战
speaker: 尹士勇
url: https://github.com/ysyfff/Foot/blob/master/ppt
transition: newspaper
files: /ppt.css
theme: colors
highlightStyle: 代码高亮样式，默认monokai_sublime
usemathjax: yes 启用MathJax渲染公式



[slide]
## <span style="color: black;">React Native实战</span>

* 尹士勇
* 2016.10.09

[slide]
## 提纲
* OC简介
* ES6几个点
* React Native
  * Component
  * Flexbox
  * JSX
  * Native modules
  * Dynamic update
  * Deployment


[slide]
## Objective-C简介

[slide]
## Objective-C学习大纲
![image](./doc/ios_study.jpg)
[slide]
## 一些常用的ES6功能
* 声明变量的方法
  * [let](http://es6.ruanyifeng.com/#docs/let#let命令)
  * [const](http://es6.ruanyifeng.com/#docs/let#const命令)
  * [箭头函数](http://es6.ruanyifeng.com/#docs/function#箭头函数)

* [变量的解构赋值](http://es6.ruanyifeng.com/#docs/destructuring#数组的解构赋值)

* [扩展运算符](http://es6.ruanyifeng.com/?search=...&x=0&y=0#docs/iterator#调用Iterator接口的场合)
  * 拷贝数组(深拷贝)
  * rest参数

* [ES6模块系统](http://es6.ruanyifeng.com/#docs/module#export命令)

* [语法糖——类](http://es6.ruanyifeng.com/#docs/class#Class基本语法)






[slide]
## 一些常用的Base Component
* [View](http://facebook.github.io/react-native/docs/view.html#view) ——> div
* [Text](http://facebook.github.io/react-native/docs/text.html#text) ——> span
* [TextInput](http://facebook.github.io/react-native/docs/textinput.html#textinput) ——> input
* [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#touchableopacity) | [TouchableHighlight](http://facebook.github.io/react-native/docs/touchablehighlight.html#touchablehighlight) ——> button
* [image](http://facebook.github.io/react-native/docs/image.html#image) ——> img



[slide]
## Component
* component的结构
  * ![image](https://raw.githubusercontent.com/ysyfff/Foot/master/doc/component.jpg)
* [component生命周期](https://github.com/ysyfff/Foot#lifecycle)
  * ![image](https://raw.githubusercontent.com/ysyfff/Foot/master/doc/life2.jpg)


[slide]
## 思维转变之布局篇——Flexbox
React Native布局中不存在block,inlineblock,inline等display属性 <br/><br/>
Flex布局常用属性:
* [flexDirection](http://sources.ikeepstudying.com/flexbox/flex-direction.html)
* [justifyContent](http://sources.ikeepstudying.com/flexbox/justify-content.html)
* [alignItems](http://sources.ikeepstudying.com/flexbox/align-items.html)
* [flexWrap](http://sources.ikeepstudying.com/flexbox/flex-wrap.html)


[slide]
## 思维转变之逻辑篇——JSX
* 标签中不存在If和For，如何处理逻辑和数组数据？
* [标签中不存在class和id，如何获取元素？](https://facebook.github.io/react/docs/more-about-refs.html)
* 如何将props的属性全部挂到Component上面？


[slide]
##Native modules
*

[slide]
## 发布
* 必备品
  * Account，Mac，xCode
* 步骤
  * 1
