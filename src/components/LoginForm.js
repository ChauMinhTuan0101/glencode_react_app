import {Alert, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import * as firebase from 'firebase';
import PDFView from './PDFView/PDFView'

class LoginForm extends Component {
        ManHinh_PDF:{
          screen: PDFView
        };
        state = {
        email: '',
        password: '',
        errorMessage: '',
        loading: false
    };

    constructor() {
        super();

        this.handlePress = this.handlePress.bind(this);
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCdTwhu690aWpjbGPJjpZMhHOkNeKDsPGI",
            authDomain: "stonemarket-55b1e.firebaseapp.com",
            databaseURL: "https://stonemarket-55b1e.firebaseio.com",
            projectId: "stonemarket-55b1e",
            storageBucket: "stonemarket-55b1e.appspot.com",
            messagingSenderId: "363046970833"
        });}

    onLoginSuccess(user) {
        const { alert } = Alert;

        this.setState({
            email: '',
            password: '',
            errorMessage: '',
            loading: false
        });
        // eslint-disable-next-line
        alert('Welcome!', 'Thank you for signing in, ' + user.email);


    }

    onSignUpError(error) {
        const { alert } = Alert;
        alert('Error', 'An error has occurred.');



        let errorMessage;
        switch (error.code) {
            case 'auth/app-deleted':
                errorMessage = 'The authentication server seems to have been deleted.';
                break;
            case 'auth/app-not-authorized':
                errorMessage = 'There\'s an issue with the authentication server domain.';
                break;
            case 'auth/argument-error':
                errorMessage = 'There is a bug with this app, please report it to the developer.';
                break;
            case 'auth/invalid-api-key':
                errorMessage = 'The authentications server didn\'t recognize the API key.';
                break;
            case 'auth/network-request-failed':
                errorMessage = 'Couldn\'t connect to the authentication server,' +
                    ' please check if your device is connected to the Internet.';
                break;
            case 'auth/operation-not-allowed':
                errorMessage = 'The authentication server administrator has not enabled this feature.';
                break;
            case 'auth/too-many-requests':
                errorMessage = 'You have tried too many times, please wait before trying again.';
                break;
            case 'auth/user-disabled':
                errorMessage = 'This user has been disabled from the system.' +
                    ' Please contact an administrator.';
                break;
            default:
                errorMessage = 'Authentication failed.';
        }

        this.setState({ errorMessage, loading: false });
    }

    handlePress({ email, password }) {
        const { alert } = Alert;
        this.setState({ loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .then(this.props.navigation.navigate('ManHinh_PDF'))
            .catch(() => {

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => alert('Thank you for signing up.'))
                    .catch(this.onSignUpError.bind(this));
            });

    }

    render() {
        return (

            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input}
                           autoCapitalize="none"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCorrect={false}
                           onChangeText = {email =>this.setState({email})}
                           value={this.state.email}
                           keyboardType='email-address'
                           returnKeyType="next"
                           placeholder='Email or Mobile Num'
                           placeholderTextColor='#000000'/>

                <TextInput style = {styles.input}
                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                           onChangeText = {password=>this.setState({password})}
                           value={this.state.password}
                           placeholder='Password'
                           placeholderTextColor='#000000'
                           secureTextEntry/>
                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handlePress({ ...this.state })}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.8)',
        marginBottom: 10,
        padding: 10,
        color: '#000000'
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton:{
        backgroundColor:  '#2980b6',
        color: '#fff'
    }

});

//make this component available to the app
export default LoginForm;
