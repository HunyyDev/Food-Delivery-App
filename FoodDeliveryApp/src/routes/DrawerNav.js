import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen';
import MyProfileScreen from '../screens/profile/MyProfileScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {OfferScreen} from '../screens/offers/OffersScreen';
import {OrderScreen} from '../screens/orders/OrderSceen';
import PrivacyPolicyScreen from '../screens/privacypolicy/PrivacyPolicyScreen';
import SecurityScreen from '../screens/security/SecurityScreen';
import CustomDrawerNav from '../components/CustomDrawerNav';
import UserScreen from '../screens/user/UserScreen';
import {
  IC_Profile,
  IC_Orders,
  IC_OfferPromo,
  IC_PrivacyPolicy,
  IC_Security,
} from '../assets/icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeScreen"
          drawerContent={props => <CustomDrawerNav {...props} />}
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
          }}>
          <Drawer.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{drawerItemStyle: {height: 0}}}
          />
          <Drawer.Screen
            options={{
              drawerIcon: ({focused, size}) => <IC_Profile fill={'#fff'} />,
            }}
            name="Profile"
            component={UserScreen}
          />
          <Drawer.Screen
            options={{
              drawerIcon: ({focused, size}) => <IC_Orders fill={'#fff'} />,
            }}
            name="Orders"
            component={OrderScreen}
          />
          <Drawer.Screen
            options={{
              drawerIcon: ({focused, size}) => <IC_OfferPromo fill={'#fff'} />,
            }}
            name="Offer and promo"
            component={OfferScreen}
          />
          <Drawer.Screen
            options={{
              drawerIcon: ({focused, size}) => (
                <IC_PrivacyPolicy fill={'#fff'} />
              ),
            }}
            name="Privacy policy"
            component={PrivacyPolicyScreen}
          />
          <Drawer.Screen
            options={{
              drawerIcon: ({focused, size}) => <IC_Security fill={'#fff'} />,
            }}
            name="Security"
            component={SecurityScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
