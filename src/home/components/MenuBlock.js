import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

class MenuBlock extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
                <Text style={styles.price}>{this.props.price}</Text>
            </View>
        )
    }
}

export default MenuBlock;

const styles = StyleSheet.create({
    container: {
        backgroundColor: CUSTOM_COLOR.White,
        width: '100%',
        height: scaleHeight(300),
        position: 'absolute',
        bottom: 0,
        borderRadius: scaleWidth(30),
    },
    text: {
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scaleWidth(22),
        color: CUSTOM_COLOR.Black,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: scaleHeight(145),
    },
    price: {
        fontFamily: FONT_FAMILY.Rounded,
        fontSize: scaleWidth(17),
        color: CUSTOM_COLOR.Vermilion,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: scaleHeight(15),
    },
})