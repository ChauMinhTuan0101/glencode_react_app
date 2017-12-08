import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
//import TableComponent from './src/components/Table/TableComponent'
import Login from './src/components/Login';

export default class LoginScreen extends Component{

    render()
    {
        return(
            <Login/>
        );
    }


}
AppRegistry.registerComponent('glencode_react', () => LoginScreen);


