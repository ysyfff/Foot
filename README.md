# Path

## Base
### LifeCycle
![image](./doc/life2.jpg)
* `componentWillMount`         准备加载组件
* `componentDidMount`          在组件第一次绘制之后
* `componentWillReceiveProps`  如果组件收到新的属性（props）
* `shouldComponentUpdate`      当组件接收到新的属性和状态改变的话，都会触发调用
* `componentWillUpdate`        如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true ，就会开始准更新组件
* `componentDidUpdate`         调用了 render() 更新完成界面之后
* `componentWillUnmount`       当组件要被从界面上移除的时候
![image](./doc/1.pic.jpg)

## Component
### Done
* `TabBar`
* `NavBar`
* `Nav`
* `Btn`
* `If`

===

### Todo
* `Form` 参考`tcomb`, `tcomb-validation`, `tcomb-form-native`


## Problem
### Lower
* 如何循环多个子节点`<TabBarIOS> <TabBarIOS.Item /> <TabBarIOS.Item /> ... </TabBarIOS>`
  * Answer:
    * JSX中会处理数组对象，将数组元素作为循环的子节点

* 安装`react-native-maps`后遇到了build failed错误，怎么处理？
  * Answer:
    * 首先在issue里面查找答案(往往能找到最佳答案，这也是最优途径)

* 如何真机调试？
  * Answer:
    * 按照官网教程一步一步来做没有问题，但是如果网络很慢呢？

* 如何部署到app store?
  * Answer:

* [热更新部署](http://www.jianshu.com/p/9e3b4a133bcc)
  * Answer:
    * 使用CodePush
      * CodePush安装：```npm install -g code-push-cli```
      * 创建CodePush账号：```code-push register```
      * 登陆：```code-push login```
      * 安装CodePush到App：```npm install react-native-code-push --save``` ```rnpm link react-native-code-push```
===

### Higher
* Navigator切换的时候内容的变化时出现卡顿(包括LeftButton, RightButton, Title等) `titleDelayRefreshPro`
  * Answer:
    * Navigator的切换会触发renderScene以及NavigationBar中的LeftButton,RightButton,Title函数，使用回调中的route就可以解决内容卡顿的问题

* Navigator与TabBar的配合使用 `navTabCombinePro` [这是一个值得思考的问题]
  * Answer:
    * 以Navigator作为master，tab的点击触发Navigator的resetTo方法，resetTo所干的事情就是返回一个新的tab(这个tab就是下次要展示的tab标签的tab)

* 如何动态控制Navigator的显示与隐藏(见证数据的流动) [这是一个思考了很久的问题]
  * Answer:
    * 通过动态控制Navigator的navigationBar属性就可动态控制Navigator的显示与隐藏(通过props属性动态控制)
    * `props`的值必定要与`state`绑定   `<Nav dataSource={NavDataSource} showNav={this.state.showNav}/>`
    * 跨组件的数据流动 `<PathTabBar navigators={navigators} initialTab='我' nav={me}/>`
    * 跨组件的`setState` `me.props.nav.setState({showNav: false})`
