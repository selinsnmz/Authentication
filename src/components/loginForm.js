import React, {Component} from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import firebase from 'firebase';
import {Input} from './common/input';

export default class LoginForm extends Component{
    state = {
        email : '',
        password: '',
        error: ''

    }

    onButtonClicked = () => {
        const {email, password } = this.state;
        console.log(email,password);

        this.setState({
            error: ''
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log("result", result)
            if(result.user) {
                alert("Giriş başarılı")
            }
        })
        .catch((err) => {
            console.log('error', err)
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('result2', result);
                alert("Kayıt başarılı")
            })
            .catch((error) => {
                console.log('error', error);
                this.setState({
                    error: 'Authentication failed.'
                })
            });
        });
    }

    render(){
        const { error } = this.state;
        const errorMsg = error ? (
            <Text style={styles.errorStyle}> {error} </Text>
        ) :
        null;

        return(
            <View style={{padding: 30}}>
                <View>
                    <Input text='Email' inputPlaceHolder='Enter Email'
                    onChangeText={(text) => {
                        this.setState({
                            email:text
                        })
                    }}
                    value={this.state.email}
/>
                </View>
                <View>
                    <Input text='Password' inputPlaceHolder='Enter Password'
                        onChangeText={(text) => {
                            this.setState({
                                password:text
                            })
                        }}
                        secureTextEntry
                        value={this.state.password}
                    />
                </View>
                {errorMsg}
                <View  style={styles.buttonWrapper}>
                    <Button onPress={this.onButtonClicked} color='#594484' title= 'LOGIN'/>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
        height: 49,
        borderRadius: 10,
        fontSize: 20,
        justifyContent: 'center'
    },
    errorStyle: {
        fontSize: 20,
        color: 'red',
        paddingTop: 5,
        alignSelf: 'center'
    }
});