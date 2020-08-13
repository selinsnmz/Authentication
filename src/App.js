import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginForm';

export default class App extends Component{
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