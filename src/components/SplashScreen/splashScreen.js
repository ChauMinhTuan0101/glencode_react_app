import React, {Component} from 'react';

import {Image, StyleSheet, View} from 'react-native';

export default class splashScreen extends Component{
    render()
    {
        return(
            <View style ={styles.wrapper}>
                <Image resizeMode="contain" style={styles.logo} source={require('../images/logo.png')} />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: 'white',
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