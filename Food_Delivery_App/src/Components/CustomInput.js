import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../constant/color';
import FONT_FAMILY from '../constant/font';

const CustomInput = props => {
  console.log('props ', props);
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <TextInput
        style={styles.TextInput}
        onChangeText={text => {
          console.log('value', text);
          setValue(text);
        }}
        secureTextEntry={props.secure}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.Black,
  },
  text: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.4,
    fontSize: 15,
    fontFamily: FONT_FAMILY.Black_Sf,
  },
  textInput: {marginTop: 15},
});
