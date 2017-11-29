import {Text, TouchableHighlight, View} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    _onForward = () => {
        this.props.navigator.push({
            title: 'Scene ' + nextIndex,
        });
    };

    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
    }
}