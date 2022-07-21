import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constant/color';
import FONT_FAMILY from '../constant/font';

const CustomButton = ({label, navigation}) => {
  console.log('Label: ', label);
  //const [value, setValue] = useState('');
  return (
    <TouchableOpacity
      style={styles.button({label})}
      onPress={() => {
        label === 'Login'
          ? navigation.navigate('Home')
          : navigation.navigate('Login');
      }}>
      <Text style={styles.buttonText({label})}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: ({label}) => ({
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    //color: CUSTOM_COLOR.White,

    backgroundColor:
      label === 'Login' ? CUSTOM_COLOR.SunsetOrange : CUSTOM_COLOR.White,
  }),
  buttonText: ({label}) => ({
    fontSize: 25,
    fontFamily: FONT_FAMILY.Black_Sf,
    color: label === 'Login' ? CUSTOM_COLOR.White : CUSTOM_COLOR.SunsetOrange,
  }),
});
