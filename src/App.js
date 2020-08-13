import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Banner from './components/banner';

export default class App extends Component{
    render(){
        return(
            <View>
                <Banner text ='Authentication'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        color: 'red'
    }
})