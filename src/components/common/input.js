import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput  } from 'react-native';

const Input = ({text, inputPlaceHolder, onChangeText, value, secureTextEntry}) =>{
    const{inputWrapper, textStyle, inputStyle} = styles;
    return(
        <View style={inputWrapper}>
            <Text style={textStyle}>{text}</Text>
            <TextInput style={inputStyle}
                       secureTextEntry={secureTextEntry}
                       placeholder={inputPlaceHolder}
                       onChangeText={onChangeText}
                       value={value}
            />
        </View>
    )
}

export { Input };

const styles= StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 'auto',
        borderColor: '#E5E5E8',
        borderBottomWidth: 1,
    },
    textStyle: {
        paddingLeft: 30,
        flexGrow: 1,
        fontSize: 17

    },
    inputStyle:{
        flexGrow: 2,
        fontSize: 17
    }
});