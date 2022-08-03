import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLOR from '../constants/colors'
import scale from '../constants/responsive'

const ChoiceBox = (props) => {
  return (
    <View style={[styles.boder, props.isChoiced && {borderColor: COLOR.vermilion}]}>
        <View style={[styles.choice, props.isChoiced && {backgroundColor: COLOR.vermilion}]}></View>
    </View>
  )
}

export default ChoiceBox

const styles = StyleSheet.create({
    boder: {
        width: scale.scaleWidth(15),
        height: scale.scaleWidth(15),
        borderRadius: scale.scaleWidth(15/2),
        borderWidth: 1.5,
        borderColor: COLOR.silverChalice,
        justifyContent: 'center',
        alignItems: 'center',
    },
    choice: {
        width: scale.scaleWidth(7),
        height: scale.scaleWidth(7),
        borderRadius: scale.scaleWidth(7/2),
        backgroundColor: COLOR.white,
        justifyContent: 'center',
        alignItems: 'center',
    }
})