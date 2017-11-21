import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import PDFView from './src/components/PDFView/PDFView'

export default class Splash extends Component{
    render()
    {
        return(
            <PDFView/>
        );
    }


}
AppRegistry.registerComponent('glencode_react', () => PDFView);
