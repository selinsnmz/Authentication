import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginForm';

export default class App extends Component{
    render(){
        return(
            <View>
                <Banner text ='Authentication'/>
                <LoginForm/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        color: 'red'
    }
})