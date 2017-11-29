import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import TableComponent from './src/components/Table/TableComponent'
import ActionBarComponent from './src/components/ActionBar/ActionBarComponent'

export default class ActionBar extends Component{
    render()
    {
        return(
            <ActionBarComponent/>,
            <TableComponent/>
        );
    }


}
AppRegistry.registerComponent('glencode_react', () => ActionBar);


