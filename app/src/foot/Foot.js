import React, {Component} from 'react'
import {Text, View, MapView, AsyncStorage} from 'react-native'
import ViewContainer from '../common/ViewContainer'
// import MapView from 'react-native-maps'

import {MapViewExample, LocationFollow, Callout, Overlay} from '../example/test/testMapView'
import _ from 'lodash'

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
    constructor(props) {
        super(props)

    }
    render() {
        var key = 'point333';
        this._setPoint(key, [{a: 1, b: 2}], (err, val) => {
            AsyncStorage.getItem(key, (err, val) => {
                console.log(val)
            })
        });

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
    _getPoint(key: String, callback = ()=>{}: Function) {
        AsyncStorage.get(key, callback);
    }
    _setPoint(key: String, data: [{a: 1,b:2}], callback = ()=>{}: Function) {
        AsyncStorage.getItem(key, (err, val) => {
            const point = val == null ? data : _.concat(JSON.parse(val), data);

            AsyncStorage.removeItem(key, (err) => {
                AsyncStorage.setItem(key, JSON.stringify( point ), callback);
            });
        });
    }
}
