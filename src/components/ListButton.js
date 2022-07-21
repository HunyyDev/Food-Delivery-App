import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CUSTOM_COLOR from '../constants/colors';
import scaleWidth from '../constants/responsive';


const ListButton = props =>{
    return(
        <ScrollView style={props.style}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:scaleWidth(89)}}>
            {props.values.map(value =>(
                <TouchableOpacity
                activeOpacity={1}
                key={value}
                onPress={()=>props.setSelectedValue(value)}
                style={[styles.button, props.selectedValue === value && styles.selected]}>
                    <Text style={styles.buttonLabel}>
                        {value}
                    </Text>
                    {props.selectedValue === value ? (
                        <View style={styles.line}></View>
                    ):null}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        marginHorizontal: scaleWidth(5),
        width: scaleWidth(87),
        height: scaleWidth(40),
        alignItems: 'center',
        justifyContent:'center',
    },
    line:{
        position: 'absolute',
        bottom: 0,
        height: scaleWidth(3),
        backgroundColor: CUSTOM_COLOR.Vermilion,
        width:scaleWidth(87),
        borderRadius: scaleWidth(40),
    },
    buttonLabel: {
        fontFamily: 'SFProText-Regular',
        color: CUSTOM_COLOR.Manatee,
        fontSize: scaleWidth(17),
    },
    selectedLabel: {
        color: CUSTOM_COLOR.Vermilion
    }
});

export default ListButton