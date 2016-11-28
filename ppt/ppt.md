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
* IOS开发简介
* ES6几个点
* React Native
  * Component
  * Flexbox
  * JSX
  * Native modules
  * Dynamic update
  * Deployment


[slide]
## IOS开发简介
* Objective-C语法
  * ```
     #import <Foundation/Foundation.h>
     @interface Person : NSObject
     @property NSString *firstName;
     -(void)selfIntroduction:(NSString *)name age:(int) age;
     @end
    ```
* 学习大纲
  * ![image](https://raw.githubusercontent.com/ysyfff/Foot/master/doc/ios_study.jpg)
  * [Blog](http://www.cnblogs.com/kenshincui/p/3885689.html)
* [API Reference](https://developer.apple.com/reference/)


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
## 从零开始
* 安装xCode(从appStore进行安装), Node
* 安装react-native `npm install -g react-native-cli`
* 新建工程 `react-native init xxx`
* 运行工程 `react-native run-ios`
<br />
<br />
###That's it!

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
## 思维转变之布局篇——Flex
React Native布局中不存在block,inlineblock,inline等display属性 <br/><br/>
[什么是flex？？](http://fanyi.baidu.com/translate?aldtype=16047&query=flex&keyfrom=baidu&smartresult=dict&lang=auto2zh#en/zh/flex) <br/><br/>
Flex布局常用的4个属性
* [flexDirection](http://sources.ikeepstudying.com/flexbox/flex-direction.html)
* [justifyContent](http://sources.ikeepstudying.com/flexbox/justify-content.html)
* [alignItems](http://sources.ikeepstudying.com/flexbox/align-items.html)
* [flexWrap](http://sources.ikeepstudying.com/flexbox/flex-wrap.html)


[slide]
## 思维转变之逻辑篇——JSX
[什么是JSX？？](http://www.infoq.com/cn/articles/react-jsx-and-component#postFormDeck)<br/><br/>
* 标签中不存在If和For，如何处理逻辑和数组数据？
<!-- * [标签中不存在class和id，如何获取元素？](https://facebook.github.io/react/docs/refs-and-the-dom.html) -->
* 如何将props的属性全部挂到Component上面？


[slide]
## Native modules
* [如何写native modules](http://facebook.github.io/react-native/docs/native-modules-ios.html)
* [如何引用第三方native modules](https://microsoft.github.io/code-push/docs/react-native.html#link-3)


[slide]
## Dynamic update
* [用什么进行热更新](https://microsoft.github.io/code-push/index.html)
* 


[slide]
## 发布
* 步骤
  * 进入[开发者网站](https://developer.apple.com/account/)购买开发者账号
    * 必须使用带有visa和union双标的卡购买
  * 进入[开发者网站](https://developer.apple.com/account/)，申请APP IDs
  * 匹配工程的Bundle ID
  * 进入[iTunes Connect](https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng)添加并配置APP Info
    * 关键词很重要，一定要保证唯一性
  * 使用xCode打包源码，校验安装包，上传安装包
  * 上传完成后等待审核，待审核通过就可进行销售


[slide]

###Q & A


[slide]

###Thanks For Listening
