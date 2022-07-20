import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

import colors from '../../../assets/constants/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.GALLERY,
        flexDirection: 'row',
        marginHorizontal: '8%',
        borderRadius: 25,
    },
    icsearch: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 10, 
    }
})

export default styles