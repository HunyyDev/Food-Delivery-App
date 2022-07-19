import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from './src/constants/colors';
import FONT_FAMILY from './src/constants/fonts';

const Custom_Button = props => {
  const {type, child, ...moreProps} = props;
  const styles = () => {
    switch (type) {
      case 'primary':
        return primary;
      case 'secondary':
        return secondary;
      default:
        return primary;
    }
  };
  return (
    <Pressable {...moreProps}>
      {({pressed}) => (
        <Text
          style={[
            general.button,
            styles.button,
            pressed && styles.buttonHover,
          ]}>
          {child}
        </Text>
      )}
    </Pressable>
  );
};

export default Custom_Button;

const general = StyleSheet.create({
  button: {
    width: 314,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 20,
  },
});

const primary = StyleSheet.create({
  buttonContainer: {
    width: 314,
    height: 70,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonComment: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.ProTextSemibold,
    color: CUSTOM_COLOR.SunsetColor,
  },
});

const secondary = StyleSheet.create({
  buttonContainer: {
    width: 314,
    height: 70,
    backgroundColor: CUSTOM_COLOR.SunsetColor,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonComment: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.ProTextSemibold,
    color: CUSTOM_COLOR.White,
  },
});
