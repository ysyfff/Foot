import React, {Component} from 'react'
import {View, Text} from 'react-native'

import ViewContainer from '../../../common/ViewContainer'

export default class Walk extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ViewContainer>
                <Text>
                    This is Walk Page
                </Text>
            </ViewContainer>
        )
    }
}
