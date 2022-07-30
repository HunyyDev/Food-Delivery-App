import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import {ICON_CHEVRON_RIGHT} from '../assets/icons';

const RoundedWhiteBox = props => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Text style={styles.text}>{props.label}</Text>
        <Image source={ICON_CHEVRON_RIGHT} style={styles.chevron} />
      </View>
    </View>
  );
};

export default RoundedWhiteBox;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.075,
    width: Dimensions.get('window').width,
    paddingLeft: 50,
    paddingRight: 49,
    backgroundColor: COLORS.Transparent,
    marginTop: 27,
  },
  whiteBox: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.White,
    borderRadius: 20,
    paddingLeft: 23,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.TextRegular,
    color: COLORS.Black,
  },
  chevron: {
    position: 'absolute',
    right: 23,
  },
});
