import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

const widthWindow = Dimensions.get('window').width;

const ButtonDrawer = props => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.TextBox}>
          <Image source={props.source} />
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
    </>
  );
};

export default ButtonDrawer;

const styles = StyleSheet.create({
  TextBox: {
    height: Dimensions.get('window').height * 0.1,
    width: widthWindow,
    backgroundColor: COLORS.Transparent,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 38,
  },
  text: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.RoundedBold,
    color: COLORS.White,
    marginLeft: 13,
  },
  line: {
    alignSelf: 'center',
    borderBottomColor: COLORS.White,
    borderBottomWidth: 0.3,
    width: widthWindow * 0.5,
    marginLeft: 73,
    marginRight: 54,
  },
});
