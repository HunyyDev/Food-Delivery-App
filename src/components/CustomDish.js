import { Text, View, StyleSheet, Image, TouchableOpacity, LogBox } from 'react-native';
import React from 'react';
import COLOR from '../constants/colors';
import scale from '../constants/responsive';
import font_family from '../constants/fonts';
import Screens from '../constants/screen';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

//Usage: <CustomDish source={'image_path'} name={'name'} cost={'cost'}/>
const CustomDish = (props) => {
    const onDish = () => {
        props.navigation.navigate(Screens.DETAIL, {
            navigation: props.navigation,
            title: props.name,
            cost: props.cost,
            image: props.source
        })
    }
    return (
        <View style={styles.container(props.type, props.index)}>
            <TouchableOpacity
                style={styles.boxContainer(props.type)}
                activeOpacity={.8}
                onPress={() => onDish()}>
                <Text style={styles.name(props.type)}>{props.name}</Text>
                <Text style={styles.cost(props.type)}>{props.cost}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.dishContainer(props.type)}
                activeOpacity={1}
                onPress={() => onDish()}>
                <Image source={props.source} resizeMode='center' style={props.type === 'search'? 
                {width: 120, height: 120}:null
                }/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: (type, key) => ({
        width: scale.scaleWidth(type==='search' ? 220 * 0.7 : 220),
        height: scale.scaleWidth(type==='search' ? 321 * 0.7 :321),
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: scale.scaleWidth(type === 'search'?20: 15),
        marginVertical: scale.scaleHeight(type==='search'? 15:0),
        marginTop: scale.scaleHeight(key % 2 ? 30 : -2)
    }),
    boxContainer: (type) => ({
        backgroundColor: COLOR.white,
        borderRadius: scale.scaleWidth(type==='search' ? 30 * 0.7 :30),
        width: scale.scaleWidth(type==='search' ? 220 * 0.7 :220),
        height: scale.scaleWidth(type==='search' ? 270 * 0.7 :270),
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        elevation: scale.scaleWidth(12),
    }),
    dishContainer: (type) => ({
        position: 'absolute',
        width: scale.scaleWidth(type==='search' ? 164.16 * 0.7 :164.16),
        height: scale.scaleWidth(type==='search' ? 164.16 * 0.7 : 164.16),
        borderRadius: scale.scaleWidth(type==='search' ? 164.16 * 0.7 / 2 : 164.16 / 2),
        backgroundColor: 'white',
        overflow: 'hidden',
        top: 0,
        elevation: scale.scaleWidth(10),
    }),
    cost: type => ({
        fontSize: scale.scaleWidth(type==='search' ? 17 * 0.7 :17),
        color: COLOR.vermilion,
        alignSelf: 'center',
        marginBottom: scale.scaleWidth(type==='search' ? 39 * 0.7 :39),
        fontFamily: font_family.sfProRounded.bold,
    }),
    name: type => ({
        fontSize: scale.scaleWidth(type==='search' ? 22 * 0.7 :22),
        color: COLOR.black,
        alignSelf: 'center',
        fontFamily: font_family.sfProRounded.semibold,
        textAlign: 'center',
    }),
});

export default CustomDish;