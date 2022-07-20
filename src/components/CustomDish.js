import { Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
import {scaleWidth} from '../constants/responsive';

//Usage: <CustomDish source={'image_path'} name={'name'} cost={'cost'}/>
const CustomDish = (props) => {
  return (
    <View style={styles.container}>
        <View style = {styles.boxContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.cost}>{props.cost}</Text>
        </View>
        <View style = {styles.dishContainer}>
            <Image source={props.source} resizeMode='center'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: scaleWidth(220),
        height: scaleWidth(321),
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: scaleWidth(15),
    },
    boxContainer: {
        backgroundColor: CUSTOM_COLOR.White,
        borderRadius: scaleWidth(30),
        width: scaleWidth(220),
        height: scaleWidth(270),
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        elevation: scaleWidth(12),
    },
    dishContainer: {
        position:'absolute',
        width: scaleWidth(164.16),
        height: scaleWidth(164.16),
        borderRadius: scaleWidth(164.16/2),
        backgroundColor: 'white',
        overflow: 'hidden',
        top: 0,
        elevation: scaleWidth(10),
    },
    cost: {
        fontSize: scaleWidth(17),
        color: CUSTOM_COLOR.Vermillon,
        alignSelf: 'center',
        marginBottom: scaleWidth(39),
        fontFamily: 'SF-Pro-Rounded-Bold',
    },
    name: {
        fontSize: scaleWidth(22),
        color: CUSTOM_COLOR.Black,
        alignSelf: 'center',
        fontFamily: 'SF-Pro-Rounded-Semibold',
        textAlign: 'center',
    },
});

export default CustomDish;