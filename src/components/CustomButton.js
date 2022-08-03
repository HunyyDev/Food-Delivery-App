import { 
    Text,
    StyleSheet, 
    TouchableOpacity
} from 'react-native';
import React from 'react';
import scale from '../constants/responsive';
import COLOR from '../constants/colors';
import font_family from '../constants/fonts';

const CustomButton = props => {
    return (
      <TouchableOpacity 
      style = {[styles.container, props.style, props.type === 'secondary' && styles.secondary]}
      activeOpacity={0.9}
      onPress={props.onPress}>
        <Text style={[styles.text, props.type === 'secondary' && styles.textSecondary]}>
            {props.content}
        </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: scale.scaleWidth(314),
        height: scale.scaleHeight(70),
        borderRadius: scale.scaleWidth(30),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.white,
    },
    secondary: {
        backgroundColor: COLOR.vermilion,
    },
    text: {
        fontFamily: font_family.SFProText.semibold,
        fontSize: scale.scaleWidth(17),
        color: COLOR.vermilion,
    },
    textSecondary: {
        color: COLOR.white,
    }
});

export default CustomButton