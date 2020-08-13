import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View>
        <Text style ={styles.text}>Hello React</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    color: 'red'
  }
})
