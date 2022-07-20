import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center',
        paddingHorizontal: '7%',
    },
    icmenu: {
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    iccarttyre: {
        opacity: 0.5,
    },
    ictyre: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 1,
        marginLeft: 5, 
    },
})

export default styles