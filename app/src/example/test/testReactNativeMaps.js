import React, {Component} from 'react'
import {Text, View, AsyncStorage, MapView} from 'react-native'
// import MapView from 'react-native-maps'
// import MapView from 'react-native-maps'
import _ from 'lodash'
import Btn from '../../../component/Btn'
import Geo from './testGeolocation'
var cacheRegion = {};
export default class RNMapViews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 39.06,
                longitude: -95.22,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0922,
            }
        }
    }
    _onRegionChangeComplete(region) {
        // debugger
        // this.setState({region})
        cacheRegion = _.assign({}, region);
    }
    _zoomIn() {
        let region = _.assign({}, cacheRegion);
        region.latitudeDelta += 0.05;
        region.longitudeDelta += 0.05;
        this.setState({region})
    }
    _zoomOut() {
        let region = _.assign({}, cacheRegion);
        region.latitudeDelta -= 0.05;
        region.longitudeDelta -= 0.05;
        this.setState({region})
    }
    _showCurrentPosition() {
        // position = {
        //     coords: {
        //         speed: '-1',
        //         longitude: 'xx',
        //         latitude: 'xx',
        //         accuracy: '',
        //         heading: '-1',
        //         altitude: 'xx',
        //         altitudeAccuracy: '',
        //     },
        //     timestamp: 'xx'
        // }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let region = _.assign({}, this.state.region);
                let curRegion = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }

                this.setState({
                    region: _.assign(region, curRegion)
                });
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
    }
    render() {
        //MapView不能套在ViewContainer中，否则导致MapView的flex：1时，高度无法伸展(应该是scroll属性导致)
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    region={this.state.region}
                    overlays={[{
                      coordinates:[
                        {latitude: 32.47, longitude: -107.85},
                        {latitude: 33.47, longitude: -106.85},
                        {latitude: 33.47, longitude: -105.85},
                        {latitude: 33.47, longitude: -104.85},
                        {latitude: 34.47, longitude: -104.85},
                        {latitude: 35.47, longitude: -104.85},
                        {latitude: 36.47, longitude: -103.85},
                        {latitude: 40.47, longitude: -102.85},
                      ],
                      strokeColor: '#f007',
                      lineWidth: 5,
                    }]}
                    onRegionChangeComplete={this._onRegionChangeComplete.bind(this)}
                  />
                  <View style={{position: 'absolute', bottom: 100}}>
                      <View>
                        <Btn onPress={this._showCurrentPosition.bind(this)}>
                            位
                        </Btn>
                      </View>
                      <View>
                        <Btn onPress={this._zoomOut.bind(this)}>
                            大
                        </Btn>
                      </View>
                      <View>
                        <Btn onPress={this._zoomIn.bind(this)}>
                            小
                        </Btn>
                      </View>
                  </View>
            </View>
        )
    }
}
