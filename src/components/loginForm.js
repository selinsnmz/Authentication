import React, {Component} from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';

export default class LoginForm extends Component{
    render(){
        return(
            <View >
                <View>
                    <Text> Email </Text>
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