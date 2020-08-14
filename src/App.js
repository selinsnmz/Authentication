import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import firebase from 'firebase';
import Banner from './components/banner';
import LoginForm from './components/loginForm';

export default class App extends Component{
    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyCwYZYm1It7P8A0yeH32mQEcMiHep_yjYk",
            authDomain: "authentication-96040.firebaseapp.com",
            databaseURL: "https://authentication-96040.firebaseio.com",
            projectId: "authentication-96040",
            storageBucket: "authentication-96040.appspot.com",
            messagingSenderId: "844256352177",
            appId: "1:844256352177:web:651edc2c9e4b3379e6cf90",
            measurementId: "G-R7HM1PWPRP"
        });
    }
    render(){
        return(
            <View style={styles.appContaier}>
                <Banner text ='Authentication'/>
                <LoginForm/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appContaier:{
        backgroundColor: '#F3F3F3',
        flex: 1
    }
})