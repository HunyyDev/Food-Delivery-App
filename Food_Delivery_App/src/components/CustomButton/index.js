import {useState} from 'react';
import {StyleSheet, Text, Alert} from 'react-native';
import React from 'react';
import {scaleX, scaleY} from '../../helperFunction.js';

const CustomButton = props => {
  const [buttonColor, setbuttonColor] = useState(() => {
    if (props.type === 'primary') return {text: '#FF460A', background: '#fff'};
    else if (props.type === 'secondary')
      return {text: '#F6F6F9', background: '#FA4A0C'};
    else return {text: '#fff', background: '#000'};
  });

  const PressHandler = () => {
    props.navigationnn.navigate(props.name);
  };
  return (
    <Text
      style={[
        styles.buttonStyle.text,
        styles.buttonStyle,
        {backgroundColor: buttonColor.background, color: buttonColor.text},
      ]}
      onPress={(PressHandler)}>
      {props.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 25,
    // backgroundColor: buttonColor.background,
    borderRadius: 70,
    textAlign: 'center',

    text: {
      // color: buttonColor.text,
      fontSize: 17,
    },

    marginHorizontal: scaleY(1),
    position: 'absolute',
    left: 50,
    right: 50,
    bottom:41,
  },
});

export default CustomButton;
