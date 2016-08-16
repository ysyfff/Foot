
import React, {Component} from 'react'
import {AppRegistry, Navigator, Text, TouchableHighlight, View} from 'react-native'



import NavAllDay from './app/src/example/test/testNavigator'
import ViewContainer from './app/src/common/ViewContainer'
import NavigatorIOSApp from './app/src/example/test/testNavigatorIOS'

import PathNav from './app/src/navigator/PathNav'
import TabBarExample from './app/src/example/test/testTabBarIOS'

class Foot extends Component {
    render() {
        return (<PathNav />)
        // return (<TabBarExample />)
    }
}


AppRegistry.registerComponent('Foot', () => Foot);
