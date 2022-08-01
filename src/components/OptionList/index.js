import React from 'react';
import {StyleSheet, View, Pressable, Text, Image} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const Option = ({children, isChoosing, onPress, iconColor, icon}) => {
  return (
    <View style={styles.navigationBackground}>
      <Pressable onPress={onPress} style={styles.pressable}>
        <View style={styles.flagContainer}>
          <View style={styles.identification({isChoosing})} />
        </View>
        <View style={styles.iconBackground({iconColor})}>
          <Image source={icon} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.optionName}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Option;

const styles = StyleSheet.create({
  navigationBackground: {
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomOpacity: 0.3,
    borderBottomWidth: 0.5,
    marginLeft: 25,
    marginRight: 25,
    height: 75,
  },
  pressable: {
    flexDirection: 'row',
  },
  flagContainer: {
    height: 75,
    width: 75,
    alignItem: 'center',
    justifyContent: 'center',
  },
  identification: ({isChoosing}) => ({
    padding: 4,
    width: 15,
    height: 15,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Black,
    backgroundColor: isChoosing
      ? CUSTOM_COLOR.SunsetYellow
      : CUSTOM_COLOR.Transparent,
  }),
  iconBackground: ({iconColor}) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: CUSTOM_COLOR.Black, //Khong hien mau nhu khi truyen doi so
  }),
  nameContainer: {
    height: 75,
    justifyContent: 'center',
    alignItem: 'center',
  },
  optionName: {
    marginLeft: 10,
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.ProTextBold,
  },
});
