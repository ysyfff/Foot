import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Nav from '../../component/Nav'
import Icon from 'react-native-vector-icons/FontAwesome'
import Skin from '../common/Skin'

import PathTabBar from '../tabbar/PathTabBar'
import Basic from '../user/info/basic/Basic'
import History from '../user/info/history/History'
import If from '../../component/If'

export default class PathNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showNav: true
        }
    }
    componentDidMount() {
        console.log('mount')
    }
    render() {
        let me = this;
        const NavDataSource = {
            initialRoute: 'Myself',
            route: {
                Myself: {
                    renderScene: function(route, navigators) {
                        return (
                            <PathTabBar navigators={navigators} initialTab='我' nav={me}/>
                        )
                    },
                    NavBar: {
                        routeMapper: {
                            LeftButton: '',
                            RightButton: '',
                            Title: (
                                <Text style={{fontSize: 18}}>我</Text>
                            )
                        },
                        style: {backgroundColor: Skin.baseColor}
                    }
                },
                'Map': {
                    renderScene: function(route, navigators) {
                        return <PathTabBar navigators={navigators} initialTab='足迹' nav={me}/>;
                    },
                    NavBar: {
                        routeMapper: {
                            LeftButton: '',
                            RightButton: '',
                            Title: (
                                <Text style={{fontSize: 18}}>足迹</Text>
                            )
                        },
                        style: {backgroundColor: Skin.baseColor}
                    }
                },
                'Myself.basicInfo': {
                    renderScene: function(route, navigators) {
                        return (<Basic />)
                    },
                    NavBar: {
                        routeMapper: {
                            LeftButton: (
                                <View style={{flex: 1, flexDirection: 'row', alignItems:"center", paddingLeft: 15, paddingRight: 10, paddingTop: 10, paddingBottom: 10}}>
                                    <Icon name="angle-left" color="black" size={26} />
                                </View>
                            ),
                            RightButton: '',
                            Title: (
                                <Text style={{fontSize: 18}}>基本信息</Text>
                            )
                        },
                        style: {backgroundColor: 'gray'}
                    }
                },
                'Myself.historyInfo': {
                    renderScene: function(route, navigators) {
                        return (<History />)
                    },
                    NavBar: {
                        routeMapper: {
                            LeftButton: (
                                <View style={{flex: 1, flexDirection: 'row', alignItems:"center", paddingLeft: 15, paddingRight: 10, paddingTop: 10, paddingBottom: 10}}>
                                    <Icon name="angle-left" color="black" size={26} />
                                </View>
                            ),
                            RightButton: '',
                            Title: (
                                <Text style={{fontSize: 18}}>历史记录</Text>
                            )
                        },
                        style: {backgroundColor: 'gray'}
                    }
                }
            }
        }

        return (
            <Nav dataSource={NavDataSource} showNav={this.state.showNav}/>
        )
    }
}
