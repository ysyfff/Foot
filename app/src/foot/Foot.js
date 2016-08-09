import React, {Component} from 'react'
import {Text, View, MapView} from 'react-native'
import ViewContainer from '../common/ViewContainer'
// import MapView from 'react-native-maps'

export default class Foot extends Component {
    render() {
        console.log(MapView)
        return (
          <MapView
            style={{flex:1, marginTop: 62}}
            showsUserLocation={true}
          />
        )
    }
}
