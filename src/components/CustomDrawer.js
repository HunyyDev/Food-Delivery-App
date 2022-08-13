import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import COLORS from '../constants/colors';
import {IMG_Marvis} from '../assets/images';
import {
  ICON_BUY,
  ICON_LINE,
  ICON_LOCAL_OFFER,
  ICON_PROFILE,
  ICON_SECURITY,
  ICON_STICKY_NOTE,
} from '../assets/icons';
import FONT_FAMILY from '../constants/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonDrawer from './ButtonDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SCREEN_NAME from '../constants/screens';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const widthWindow = Dimensions.get('window').width;

const CustomDrawer = props => {
  const {navigation} = props;
  const [user, setUser] = useState(null);

  const onAuthStateChanged = userInfo => {
    setUser(userInfo);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const SignOut = async () => {
    await AsyncStorage.setItem('SIGN_OUT', '1');
    auth().signOut();
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  };

  const onSignOut = useCallback(value => {
    SignOut();
    navigation.navigate(SCREEN_NAME.LOGIN);
  }, []);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* <Image source={IMG_Marvis} style={styles.User} /> */}
        <Image
          source={user?.photoURL ? {uri: user.photoURL} : IMG_Marvis}
          style={styles.User}
        />
        {/* <DrawerItemList {...props} /> */}
        <ButtonDrawer
          text={'Profile'}
          source={ICON_PROFILE}
          onPress={() => navigation.navigate(SCREEN_NAME.MY_PROFILE)}
        />
        <ButtonDrawer
          text={'orders'}
          source={ICON_BUY}
          onPress={() => navigation.navigate(SCREEN_NAME.CART)}
        />
        <ButtonDrawer text={'offer and promo'} source={ICON_LOCAL_OFFER} />
        <ButtonDrawer text={'Privacy policy'} source={ICON_STICKY_NOTE} />
        <ButtonDrawer text={'Security'} source={ICON_SECURITY} />
        <TouchableOpacity onPress={onSignOut}>
          <View style={styles.SignOutBox}>
            <Text style={styles.SignOutText}>Sign-out</Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Vermilion,
    // alignItems: 'center',
  },
  User: {
    width: 91,
    height: 100,
    marginTop: 65,
    alignSelf: 'center',
    marginBottom: 30,
    borderRadius: 10,
  },
  SignOutBox: {
    height: Dimensions.get('window').height * 0.1,
    width: widthWindow,
    backgroundColor: COLORS.Transparent,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 40,
    marginTop: 150,
    // position: 'absolute',
    // bottom: 834,
  },
  SignOutText: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.RoundedBold,
    color: COLORS.White,
  },
});
