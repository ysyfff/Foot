import React, {Component} from 'react'
import {View} from 'react-native'

export default class If extends Component {
    render() {
        console.log(this.props.v)
        return this.props.v ? this.props.children : null;
    }
}
