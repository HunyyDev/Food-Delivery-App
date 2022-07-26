import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {useState} from 'react';
import styles from './styles';

const CustomTextInput = props => {
  const {label, ...moreProps} = props;
  const [state, setState] = useState('');
  return (
    <View style={styles.background}>
      <Text style={styles.title}>{label}:</Text>
      <TextInput
        style={styles.input}
        placeholder="typing..."
        onChangeText={val => setState(val)}
      />
      <Text>Typing: {state}</Text>
    </View>
  );
};

export default CustomTextInput;
