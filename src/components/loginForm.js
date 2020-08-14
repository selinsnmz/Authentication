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
                <View>
                    <Button title= 'LOGIN'/>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    
});