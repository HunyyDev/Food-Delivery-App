import React from 'react'
import {StyleSheet, Pressable, Text} from 'react-native'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
const UnderlineButton = ({children, isChoosing, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.navigationBackground({isChoosing})}>
      <Text style={styles.navigationText}>{children}</Text>
    </Pressable>
  );
};

export default UnderlineButton;

const styles=StyleSheet.create({
    navigationBackground: ({isChoosing}) => ({
        borderBottomWidth: 3,
        borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetYellow : CUSTOM_COLOR.Transparent,
        width: 134,
    }),
    navigationText: {
        color: CUSTOM_COLOR.Black,
        padding: 15,
        fontFamily: FONT_FAMILY.ProTextBold,
        fontSize: 18,
        alignSelf: 'center',
    },
});