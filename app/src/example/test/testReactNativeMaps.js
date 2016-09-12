import React, {Component} from 'react'
import {Text, View, AsyncStorage, MapView} from 'react-native'
// import MapView from 'react-native-maps'
// import MapView from 'react-native-maps'
import _ from 'lodash'
import Btn from '../../../component/Btn'
import Geo from './testGeolocation'


const LEVEL_DEGREE = {
    0: 360,
    1: 180, //whole world
    2: 90,
    3: 45,
    4: 22.5,
    5: 11.25,
    6: 5.625,
    7: 2.831,
    8: 1.406,
    9: 0.703, //wide area
    10: 0.352,
    11: 0.176, //area
    12: 0.088,
    13: 0.044, //village or town
    14: 0.022,
    15: 0.011,
    16: 0.005, // samll road
    17: 0.003,
    18: 0.001,
    19: 0.0005,
    20: 0
};
//Degree=0.0005时， BASE_M_PIXEL=0.298 m/px为基础进行计算
const BASE_M_PIXEL = 0.298;
const BASE_PX_WIDTH = 60;
const BASE_LEVEL = 16;
var cache = {
    level: BASE_LEVEL,
    region: {}
};
const _util = {
    formatScale: (distance) => {
        let ans = distance + '米';
        if(distance > 1000) {
            ans = Math.round(distance / 1000 * 10) / 10 + '公里'
        }
        return ans;
    },
    getScale: (level) => {
        return _util.formatScale(Math.round(LEVEL_DEGREE[level] / LEVEL_DEGREE[19] * BASE_M_PIXEL * BASE_PX_WIDTH));
    }
}
export default class RNMapViews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 39.97647153065555,
                longitude: 116.29967273616768,
                latitudeDelta: 0.004858,
                longitudeDelta: 0.004858,
            },
            level: BASE_LEVEL,
            scale: _util.getScale(cache.level)
        }
    }
    _onRegionChangeComplete(region) {
        // debugger
        // this.setState({region})
        cache.region = _.assign({}, region);
    }
    _getLevel() {
        let latitudeDelta = this.state.region.latitudeDelta;
        let level = 1;
        _.forIn(LEVEL_DEGREE, (value, key) => {
            if(latitudeDelta == value) {
                level = key - 0;
            }else if(latitudeDelta < value && latitudeDelta > LEVEL_DEGREE[key - 0 + 1]) {
                level = key - 0 + 0.5;
            }
        });
        return level;
    }
    _zoomViaLevel(action) {
        let region = _.assign({}, cache.region);
        cache.level = action == 'in' ? Math.ceil(cache.level) : Math.floor(cache.level);

        region.latitudeDelta = region.longitudeDelta = LEVEL_DEGREE[cache.level];
        this.setState({
            region,
            level: cache.level,
            scale: _util.getScale(cache.level)
        });
    }
    _zoomIn() {
        cache.level = this._getLevel();
        if(cache.level > 1){
            cache.level -= 1;
            this._zoomViaLevel();
        }
    }
    _zoomOut() {
        cache.level = this._getLevel();
        if(cache.level < 19) {
            cache.level += 1;
            this._zoomViaLevel();
        }
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
                    latitudeDelta: LEVEL_DEGREE[BASE_LEVEL],
                    longitudeDelta: LEVEL_DEGREE[BASE_LEVEL],
                }

                this.setState({
                    region: _.assign(region, curRegion),
                    level: BASE_LEVEL,
                    scale: _util.getScale(BASE_LEVEL)
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
                        <Btn onPress={this._zoomOut.bind(this)} disabled={this.state.level == 19}>
                            大
                        </Btn>
                      </View>
                      <View>
                        <Btn onPress={this._zoomIn.bind(this)} disabled={this.state.level == 1}>
                            小
                        </Btn>
                      </View>
                      <View >
                        <View style={{width: BASE_PX_WIDTH}}>
                         <Text style={{textAlign: 'center', fontSize: 10}}>
                            {this.state.scale}
                         </Text>
                        </View>
                        <View style={{borderBottomWidth: 1, borderBottomColor: 'black', width: BASE_PX_WIDTH}}></View>
                      </View>
                  </View>
            </View>
        )
    }
}
