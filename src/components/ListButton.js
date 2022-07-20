import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CUSTOM_COLOR from '../constants/colors';
import {scaleWidth} from '../constants/responsive';


const ListButton = props =>{
    return(
        <ScrollView style={props.style}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:scaleWidth(89)}}>
            {props.values.map(value =>(
                <TouchableOpacity
                key={value}
                onPress={()=>props.setSelectedValue(value)}
                style={[styles.button, props.selectedValue === value && styles.selected]}>
                    <Text style={[styles.buttonLabel, props.selectedValue === value && styles.selectedLabel]}>
                        {value}
                    </Text>
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
    selected:{
        borderBottomColor: CUSTOM_COLOR.Vermillon,
        borderBottomWidth: 3,
    },
    buttonLabel: {
        fontFamily: 'SFProText-Regular',
        color: CUSTOM_COLOR.Manatee,
        fontSize: scaleWidth(17),
    },
    selectedLabel: {
        color: CUSTOM_COLOR.Vermillon
    }
});

export default ListButton