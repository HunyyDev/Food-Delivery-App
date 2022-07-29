import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import COLORS from '../constants/colors';

import FONT_FAMILY from '../constants/fonts';

const LargeButton = props => {
  const {label, text, style, onPress, ...rest} = props;
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.buttonBackground,
        style,
      ]}
      {...rest}>
      {label === 'primary'
        ? ({pressed}) =>
            pressed ? (
              <View style={styles.buttonOrange}>
                <Text style={styles.TextButtonOrange}>{text}</Text>
              </View>
            ) : (
              <View style={styles.buttonWhite}>
                <Text style={styles.TextButtonWhite}>{text}</Text>
              </View>
            )
        : ({pressed}) =>
            pressed ? (
              <View style={styles.buttonWhite}>
                <Text style={styles.TextButtonWhite}>{text}</Text>
              </View>
            ) : (
              <View style={styles.buttonOrange}>
                <Text style={styles.TextButtonOrange}>{text}</Text>
              </View>
            )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWhite: {
    backgroundColor: COLORS.White,
    borderRadius: 35,
    height: Dimensions.get('window').height * 0.08,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 30,
    margin: 30,
  },
  TextButtonWhite: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 15,
    color: COLORS.SunsetOrange,
  },
  buttonOrange: {
    backgroundColor: COLORS.SunsetOrange,
    borderRadius: 35,
    height: Dimensions.get('window').height * 0.08,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 30,
    margin: 30,
  },
  TextButtonOrange: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 15,
    color: COLORS.White,
  },
  buttonBackground: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
});

export default React.memo(LargeButton);
