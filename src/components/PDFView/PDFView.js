import React, {Component} from 'react';

import {StyleSheet, WebView} from 'react-native';

export default class PDFView extends Component{
    render()
    {
        return(
            <WebView source={{uri: 'http://www.pdf995.com/samples/pdf.pdf'}}/>

        );
    }
}
const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    logo: {
        position: 'absolute',
        width: 150,
        height: 50
    }

});