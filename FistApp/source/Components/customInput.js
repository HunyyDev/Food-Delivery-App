import React, {Component } from "react";
import {Text, StyleSheet,TextInput, _Text} from 'react-native';
import CUSTOM_COLOR from "../constant/color";
export class CustomInput extends Component{
    constructor(props){
        super(props);
        this.state = { 
            label: props.label,
            value: '',
            secureTextEntry: props.secureTextEntry | false,
        };
    }
    render() {
        console.log('this.state', this.state);
        return(
        <>
            <Text style = {styles.inputLabel}>{this.state.label}</Text>
            <TextInput
            style={styles.inputContainer}
            onChangeText={text => {
                this.setState({value: (this.state.value.length < text.length)? this.state.value + text.charAt(text.length - 1): this.state.value.substring(0,this.state.value.length - 1)});
            }}
            placeholder = {this.props.placeHolder}
            placeholderTextColor= {CUSTOM_COLOR.WhiteSmoke}
            value = {(this.props.secureTextEntry == 1)? this.props.secureTextEntryText.repeat(this.state.value.length):this.state.value}
            />
        </>
        );
    }
};

const styles = StyleSheet.create({
    inputContainer: {
        height: 40,
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        co
    },
  
    inputLabel: {
    color: 'black',
    opacity: 0.4,
    },
})
