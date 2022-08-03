import { 
    Text, 
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import React from 'react'
import font_family from '../constants/fonts';
import scale from '../constants/responsive';
import COLOR from '../constants/colors';

const SwitchButton = props => {
    return (
    <View style={styles.container}>
        {props.values.map(value => (
            <TouchableOpacity 
            activeOpacity={0.6}
            style={styles.button}
            key={value}
            onPress={()=>props.setSelectedValue(value)}
            >
                <Text style={styles.text}>{value}</Text>
                <View 
                style={[styles.line, props.selectedValue === value && styles.selected]}/>
            </TouchableOpacity>
        ))}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text: {
        fontFamily: font_family.SFProText.semibold,
        fontSize: scale.scaleWidth(18),
        color: COLOR.black,
        alignSelf: 'center',
        marginBottom: scale.scaleWidth(15)
    },
    line: {
        width: scale.scaleWidth(134),
        height: scale.scaleWidth(3),
        borderRadius: scale.scaleWidth(40)
    },
    selected: {
        backgroundColor: COLOR.vermilion,
    },
    button: {
        justifyContent: 'flex-end',
    }
})

export default SwitchButton