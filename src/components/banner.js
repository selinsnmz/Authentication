import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';

export default class Banner extends Component{
    render(){
        return(
            <View style={styles.bannerContanier}>
                <Text style={styles.bannerText}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    bannerContanier: {
        width: 'auto',
        height: 370,
        backgroundColor: '#edd6ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerText: {
        fontSize: 34,
        color: '#feffa3'

    }
});