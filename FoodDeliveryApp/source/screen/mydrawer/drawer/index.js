import HomeScreen from '../home';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';


import {
  IMG_AVATAR,
  IMG_Cart2,
  IMG_Paper,
  IMG_ProfileLogo,
  IMG_Shield,
  IMG_Tag,
  IMG_ToRightArrow,
} from '../../../assets/images';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import scale from '../../../../responsive';
import CUSTOM_COLOR from '../../../constants/color';
import CartScreen from '../../cart';
import MyInFoScreen from '../../myinfo';
import MyProfileScreen from '../../myprofile';
import CheckOut1Screen from '../../checkout/checkout1';
import SearchScreen from '../../search';
import OfferScreen from '../offer';
import PrivacyScreen from '../privacy';
import SecurityScreen from '../security';
import SignOut from '../signOut';

const Button = props => {
  return (
    <TouchableOpacity
      style={{ height: scale(78), justifyContent: 'center' }}
      onPress={() => props.navigation.jumpTo(props.component)}>
      <Image source={props.source} />
      <Text
        style={[
          styles.text,
          {
            width: scale(132),
            height: '100%',
            textAlignVertical: 'center',
            marginLeft: scale(35),
            borderBottomColor: CUSTOM_COLOR.AthensGray,
            borderBottomWidth: 0.3,
          },
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  const CustomScrollDrawer = props => {
    return (
      <DrawerContentScrollView
        contentContainerStyle={{ flex: 1, flexGrow: 1 }}
        style={styles.container}>
        <Image source={IMG_AVATAR} style={styles.user}></Image>
        <View style={styles.buttonContainer}>
          <Button
            label="Profile"
            source={IMG_ProfileLogo}
            component="Profile"
            navigation={props.navigation}
          />
          <Button
            label="orders"
            source={IMG_Cart2}
            component="Orders"
            navigation={props.navigation}
          />
          <Button label="offer and promo" source={IMG_Tag}  component="Offer"
            navigation={props.navigation}/>
          <Button label="Privacy policy" source={IMG_Paper}  component="Privacy"
            navigation={props.navigation}/>
          <Button label="Security" source={IMG_Shield}  component="Security"
            navigation={props.navigation}/>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: scale(36),
            left: scale(35),
            width: '100%',
            flexDirection: 'row',
          }}

          onPress={() => props.navigation.jumpTo('SignOut')}>
          <Text style={[styles.text, { position: 'relative' }]}>
            {'Sign-out'}
          </Text>
          <Image
            source={IMG_ToRightArrow}
            style={{ marginLeft: scale(12), alignSelf: 'center' }}
          />

        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, drawerStyle: { width: scale(259) }, swipeEdgeWidth: scale(40) }}
      drawerContent={CustomScrollDrawer}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SignOut" component={SignOut}
        {...props => <SignOut {...props} />}
      />
      <Drawer.Screen name="Orders" component={CartScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="Profile" component={MyInFoScreen} />
      <Drawer.Screen name="ChangeProfile" component={MyProfileScreen} />
      <Drawer.Screen name="Offer" component={OfferScreen} />
      <Drawer.Screen name="Privacy" component={PrivacyScreen} />
      <Drawer.Screen name="Security" component={SecurityScreen} />
      <Drawer.Screen name ='Checkout' component={CheckOut1Screen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;



const styles = StyleSheet.create({
    container: {
      backgroundColor: CUSTOM_COLOR.SunsetOrange,
      flex: 1,
    },
    user: {
      alignSelf: 'center',
      marginTop: scale(65),
    },
    signOut: {
      top: '83%',
      marginLeft: scale(40),
    },
    buttonContainer: {
      marginLeft: scale(40),
      marginTop: scale(29),
      marginRight: scale(50),
    },
    home: {
      height: scale(78),
      flexDirection: 'row',
      justifyContent: 'center',
    },
    text: {
      color: CUSTOM_COLOR.White,
      //fontFamily: CUSTOM_FONT.PoppinsSemiBold,
      fontSize: scale(17), 
      lineHeight: scale(25.5),
      position:'absolute',
    },  
});
  
  
  
  
  