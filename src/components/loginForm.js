import React, {Component} from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import {Input} from './common/input';

export default class LoginForm extends Component{
    state = {
        email : '',
        password: '',

    }
    render(){
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
                <View  style={styles.buttonWrapper}>
                    <Button color='#594484' title= 'LOGIN'/>
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
    }
});