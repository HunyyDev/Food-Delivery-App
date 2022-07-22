import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {useState} from 'react';
import styles from './styles';
const Custom_Text_Input = props => {
  const {label, ...moreProps} = props;
  return (
    <View style={styles.background}>
      <Text style={styles.title}>{label}:</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default Custom_Text_Input;
