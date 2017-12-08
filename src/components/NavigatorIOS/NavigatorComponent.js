import {NavigatorIOS, Text, TouchableHighlight, View} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MyScene from "./index"

export default class NavigatorComponent extends Component {
    render() {
        return (
            <NavigatorIOS
                //Route
                initialRoute={{
                    component: MyScene,
                    title: "Navigation demo",
                    rightButtonTitle: "Right Scene",
                    onRightButtonPress: this._onRightButtonPress
                }}
                style={{flex: 1}}
            />
        );
    }
}

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
