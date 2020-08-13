import React, {Component} from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import {Input} from './common/input';

export default class LoginForm extends Component{
    render(){
        return(
            <View style={{padding: 30}}>
                <View>
                    <Input text='Email' inputPlaceHolder='Enter Email'/>
                </View>
                <View>
                    <Text> Password </Text>
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