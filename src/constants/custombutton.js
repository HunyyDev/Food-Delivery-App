import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FONT_FAMILY from './fonts';
import CUSTOM_COLOR from './colors';

const CustomButton = props => {
  console.log('props', props);
  if (props.type === 'primary') {
    return (
      <TouchableOpacity>
        <View
          style={styles.ButtonContainer}
          backgroundColor={CUSTOM_COLOR.White}>
          <Text style={(styles.Text, {color: CUSTOM_COLOR.Vermilion})}>
            Get started
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  if (props.type === 'secondary') {
    return (
      <TouchableOpacity>
        <View
          style={styles.ButtonContainer}
          backgroundColor={CUSTOM_COLOR.Vermilion}>
          <Text style={(styles.Text, {color: CUSTOM_COLOR.White})}>Login</Text>
        </View>
      </TouchableOpacity>
    );
  }
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
