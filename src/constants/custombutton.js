import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FONT_FAMILY from './fonts';

const CustomButton = props => {
  console.log('props', props);
  return (
    <TouchableOpacity>
      <View style={styles.ButtonContainer} backgroundColor={props.buttonColor}>
        <Text style={(styles.Text, {color: props.textColor})}>
          {props.buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    height: 70,
    width: 314,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Text: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.Black,
  },
});
