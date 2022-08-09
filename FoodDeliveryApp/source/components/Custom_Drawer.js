import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import CUSTOM_COLOR from '../constants/color';
import { IMG_AVATAR } from '../assets/images';
import scale from '../../responsive';
import { IC_Offer, IC_Orders, IC_Profile,IC_Privacy,IC_Security } from '../assets/icons';

const Custom_Drawer = (props) => {
  return (
    <View style={styles.drawContainer}>
        <DrawerContentScrollView {...props}>
            <Image source={IMG_AVATAR} style={{height: 100, width: 100, top: 65, left: 84, position: 'absolute', borderRadius: 10}}/>
            <View style={{flex: 1 , top: 212, height: 648, left: 45 }}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    </View>
  )
}

export default Custom_Drawer

const styles = StyleSheet.create({
    drawContainer: {
        position:'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: CUSTOM_COLOR.Vermilion,
    },
})