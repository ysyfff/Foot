import React, {Component} from 'react'
import {Text, View, MapView} from 'react-native'
import ViewContainer from '../common/ViewContainer'
// import MapView from 'react-native-maps'

import {MapViewExample, LocationFollow, Callout, Overlay} from '../example/test/testMapView'

export default class Foot extends Component {
    // render() {
    //     return (
    //         <ViewContainer style={{backgroundColor: 'green'}} noNav={true}>
    //             <LocationFollow />
    //             <Overlay />
    //             <Callout nav={this.props.nav} />
    //             <MapViewExample />
    //         </ViewContainer>
    //     )
    // }
    render() {
        //MapView不能套在ViewContainer中，否则导致MapView的flex：1时，高度无法伸展(应该是scroll属性导致)
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    showsUserLocation={true}
                    followUserLocation={true}
                  />
            </View>
        )
    }
}
