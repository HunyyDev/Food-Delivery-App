import {useState} from 'react';
import {StyleSheet, Text, Alert, Pressable, View} from 'react-native';
import React from 'react';
import {scaleX, scaleY} from '../../helperFunction.js';
import FONT_FAMILY from '../../constants/font.js';

const CustomButton = props => {
  const [buttonColor, setbuttonColor] = useState(() => {
    if (props.type === 'primary') return {text: '#FF460A', background: '#fff'};
    else if (props.type === 'secondary')
      return {text: '#F6F6F9', background: '#FA4A0C'};
    else return {text: '#fff', background: '#000'};
  });

  const PressHandler = () => {
    if (props.name == 'goBack' || props.name == '') {
      props.navigation.goBack();
      return;
    }
    props.navigation.navigate(props.name);
  };
  return (
    <View
      style={[styles.buttonStyle, {backgroundColor: buttonColor.background}]}>
      <Pressable
        android_ripple={styles.pressed}
        style={({pressed}) => (pressed ? styles.pressed : null)}
        onPress={PressHandler}>
        <Text style={[styles.text, {color: buttonColor.text}]}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    // backgroundColor: buttonColor.background,
    borderRadius: 70,

    marginHorizontal: scaleY(1),
    position: 'absolute',
    left: 50,
    right: 50,
    bottom: 41,

    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.75,
    color: '#ddd',
    // backgroundColor: '#ddd',
  },
  text: {
    // color: buttonColor.text,
    padding: 25,
    textAlign: 'center',
    fontSize: 17,
    fontFamily: FONT_FAMILY.Abel,
  },
});

export default CustomButton;
