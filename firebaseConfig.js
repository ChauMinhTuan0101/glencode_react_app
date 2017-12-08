import React from 'react';
import {View} from 'react-native';
import * as firebase from 'firebase';


export default class firebaseConfig extends Component
{
    componentWillMount(){
        const firebaseConfig ={
            apiKey: "AIzaSyCdTwhu690aWpjbGPJjpZMhHOkNeKDsPGI",
            authDomain: "stonemarket-55b1e.firebaseapp.com",
            databaseURL: "https://stonemarket-55b1e.firebaseio.com",
            projectId: "stonemarket-55b1e",
            storageBucket: "stonemarket-55b1e.appspot.com",
            messagingSenderId: "363046970833"
        };
        firebase.initializeApp(firebaseConfig);
    }
    render(){
        return(
            <View style={styles.container}>
            </View;
        );


    }

}
const styles =StyleSheet.create({
    container:{
        flex: 1,
    },
});
