import React, {Component} from 'react'
import {View, Text} from 'react-native'

import ViewContainer from '../../../common/ViewContainer'

export default class History extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ViewContainer>
                <Text>
                    This is History Page
                </Text>
            </ViewContainer>
        )
    }
}
