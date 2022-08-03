import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import CUSTOM_COLOR from '../constants/colors';
import {IMG_Avatar} from '../assets/images';
import {IC_Arrow} from '../assets/icons';
import scale from '../constants/responsive';

const CustomDrawerNav = props => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.avatarContainer}>
        <Image source={IMG_Avatar} />
      </View>
      <View style={styles.menuContainer}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{
            backgroundColor: CUSTOM_COLOR.Vermilion,
            flex: 2,
            justifyContent: 'space-around',
          }}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <View style={styles.bottomContainer}>
          <DrawerItem
            label={({focused, color}) => (
              <View style={styles.bottomButtonContainer}>
                <Text style={styles.bottomButtonMessage}>{'Sign-out'}</Text>
                <View style={styles.iconContainer}></View>
                <IC_Arrow fill="#fff" />
              </View>
            )}
            inactiveTintColor="#FFF"
            activeTintColor="#fff"
          />
        </View>
      </View>
    </View>
  );
};

export default CustomDrawerNav;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 1,
    width: '100%',
    // backgroundColor: CUSTOM_COLOR.Blue,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    flex: 4,
    width: '100%',
    height: '100%',
    // backgroundColor: CUSTOM_COLOR.Silver,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: scale(10),
  },
  bottomButtonMessage: {
    color: '#fff',
    fontSize: scale(17),
    fontWeight: '600',
  },
});
