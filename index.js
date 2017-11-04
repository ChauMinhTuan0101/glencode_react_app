import {AppRegistry} from 'react-native';
import React, {Component} from 'react';

import Login from './src/components/Login'

export default class LoginActivity extends Component{
    render()
    {
        return(
            <Login/>
        );
    }


}
AppRegistry.registerComponent('glencode_react', () => Login);
