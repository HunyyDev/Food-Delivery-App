import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import React from 'react';
import FONT_FAMILY from '../constant/font';
import CUSTOM_COLOR from '../constant/color';

const CustomLogin_SignUp = ({isChoosing, label, onPress}) => {
  console.log('isChoosing: ', isChoosing);
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button({isChoosing})}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default CustomLogin_SignUp;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.Regular_Sf,
    fontSize: 30,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button: ({isChoosing}) => ({
    borderBottomWidth: 3,
    width: '65%',
    height: Dimensions.get('window').height * 0.06,
    //backgroundColor: CUSTOM_COLOR.Red,
    borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetOrange : 'transparent',
    alignSelf: 'center',
  }),
  container: {
    flex: 1,
  },
});
