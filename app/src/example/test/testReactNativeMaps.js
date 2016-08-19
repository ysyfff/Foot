import React, {Component} from 'react'
import {Text, View, AsyncStorage} from 'react-native'
// import MapView from 'react-native-maps'
import MapView from 'react-native-maps'
import _ from 'lodash'

export default class RNMapViews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }
    onRegionChange(region) {
        this.setState({region})
    }
    render() {
        //MapView不能套在ViewContainer中，否则导致MapView的flex：1时，高度无法伸展(应该是scroll属性导致)
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    showsUserLocation={true}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange.bind(this)}
                  />
            </View>
        )
    }
}
