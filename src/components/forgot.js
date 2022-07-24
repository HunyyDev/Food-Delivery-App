import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

const forgot = () => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.forgotBackground,
      ]}>
      {({pressed}) =>
        pressed ? (
          <Text style={styles.forgotPressed}>Forgot passcode?</Text>
        ) : (
          <Text style={styles.forgot}>Forgot passcode?</Text>
        )
      }
    </Pressable>
  );
};

export default React.memo(forgot);

const styles = StyleSheet.create({
  forgotBackground: {
    width: '75%',
    height: '8%',
    margin: 30,
    marginBottom: 10,
    backgroundColor: CUSTOM_COLOR.Concrete,
    alignSelf: 'center',
  },
  forgot: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 14,
    color: CUSTOM_COLOR.SunsetOrange,
  },
  forgotPressed: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 14,
    color: CUSTOM_COLOR.White,
  },
});
