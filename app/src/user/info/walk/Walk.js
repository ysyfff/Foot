import React, {Component} from 'react'
import {View, Text, StyleSheet, MapView} from 'react-native'

import ViewContainer from '../../../common/ViewContainer'
import Skin from '../../../common/Skin'
import RNMapViews from '../../../example/test/testReactNativeMaps'
import Icon from 'react-native-vector-icons/FontAwesome'
import Btn from '../../../../component/Btn'

export default class Walk extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ViewContainer>
                <View style={style.container}>
                    <View style={style.text} onPress={() => {console.log('press the view')}}>
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                                <View style={{marginRight: 5}}><Icon name="map-marker" color="#333" size={18} /></View>
                                <Text style={style.font}>北京</Text>
                        </View>

                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                                <View style={{marginRight: 5}}><Icon name="location-arrow" color="#333" size={18} /></View>
                                <Text style={style.font}>2km</Text>
                        </View>

                        <View style={{flexDirection: 'row', flex: 2, justifyContent: 'center'}}>
                                <View style={{marginRight: 5}}><Icon name="clock-o" color="#333" size={18} /></View>
                                <Text style={style.font}>2016-07-04</Text>
                        </View>

                        <View style={{flexDirection: 'row', width: 30,  justifyContent: 'center'}}>
                            <Icon name="angle-double-down" color="dodgerblue" size={18} />
                        </View>
                    </View>
                    <View style={style.map}>
                        <MapView
                            style={{flex: 1}}
                            showsUserLocation={true}
                            followsUserLocation={true}
                        />
                    </View>
                </View>

            </ViewContainer>
        )
    }
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderColor: Skin.baseColor,
        backgroundColor: Skin.backgroundColor
    },
    text: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        borderBottomWidth: 1,
        borderBottomColor: Skin.baseColor
    },
    font: {
        fontSize: 14,
    },
    map: {
        flex: 1,
        height: 120
    }
})
