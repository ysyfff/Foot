import React, {Component} from 'react'
import {Text, View, MapView} from 'react-native'
import ViewContainer from '../common/ViewContainer'
// import MapView from 'react-native-maps'

import {MapViewExample, LocationFollow, Callout, Overlay} from '../example/test/testMapView'

export default class Foot extends Component {
    render() {
        return (
            <ViewContainer>
                <MapViewExample />
                <LocationFollow />
                <Overlay />
                <Callout />
            </ViewContainer>
        )
    }
    // render() {
    //     console.log(MapView)
    //     return (
    //       <MapView
    //         style={{flex:1, marginTop: 62}}
    //         showsUserLocation={true}
    //         followUserLocation={true}
    //         legalLabelInsets={{bottom: 23}}
    //       />
    //     )
    // }
}
