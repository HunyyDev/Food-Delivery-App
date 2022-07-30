import React from 'react';
import {StyleSheet, View, Pressable, Text, FlatList} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const Option = ({children, isChoosing, onPress}) => {
  return (
    <View style={styles.navigationBackground}>
      <Pressable onPress={onPress}>
        <View style={styles.identification({isChoosing})} />
        <Text style={styles.optionName}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default Option;

const styles = StyleSheet.create({
  navigationBackground: {
    flexDirection: 'row',
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomOpacity: 1.2,
    height: 75,
    flex: 1,
  },
  identification: ({isChoosing}) => ({
    marginLeft: 21,
    marginTop: 10,
    width: 15,
    height: 15,
    borderRadius: 360,
    borderColor: CUSTOM_COLOR.Black,
    backgroundColor: isChoosing
      ? CUSTOM_COLOR.SunsetYellow
      : CUSTOM_COLOR.Transparent,
  }),
  optionName: {
    marginLeft: 70,
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.ProTextBold,
  },
});
