import React, {Component} from 'react'
import {View, Text, StyleSheet, MapView} from 'react-native'

import ViewContainer from '../../../common/ViewContainer'
import Skin from '../../../common/Skin'
import RNMapViews from '../../../example/test/testReactNativeMaps'

export default class Walk extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ViewContainer>
                <View style={style.container}>
                    <View style={style.text}>
                        <Text>Date</Text>
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
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        borderBottomWidth: 1,
        borderBottomColor: Skin.baseColor
    },
    map: {
        flex: 1,
        height: 120
    }
})
