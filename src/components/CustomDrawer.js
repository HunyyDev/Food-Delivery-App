import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  Keyboard,
} from 'react-native';
import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useMemo,
  useReducer,
} from 'react';
import COLOR from '../constants/colors';
import TabButton from './TabButton';
import {
  ICON_arrow,
  ICON_buy,
  ICON_guard,
  ICON_menu,
  ICON_note,
  ICON_offer,
  ICON_profile,
} from '../assets/icons/icons';
import scale from '../constants/responsive';
import font_family from '../constants/fonts';
import useKeyboard from '../Hooks/useKeyboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../routes/RootNavigator';
import {AuthContext} from '../routes/RootNavigator';

export const DrawnerContext = createContext();

const CustomDrawer = props => {
  const [status, setStatus] = useState(false);
  const keyboardStatus = useKeyboard();
  const [currentTab, setCurrentTab] = useState('Profile');
  const [showMenu, setShowMenu] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const offsetX = useRef(new Animated.Value(0)).current;

  const scaleAnimation = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : scale.scaleWidth(0.65),
      duration: 399,
      useNativeDriver: true,
    }).start();
    Animated.timing(offsetX, {
      toValue: showMenu ? 0 : scale.scaleWidth(277),
      duration: 399,
      useNativeDriver: true,
    }).start();
    setShowMenu(!showMenu);
    if (keyboardStatus === 1) {
      Keyboard.dismiss();
    }
    setStatus(false);
  };

  const {signOut} = useContext(AuthContext);
  const onSignOut = async () => {
    await AsyncStorage.setItem('LoggedIn', 'sign-out');
    await AsyncStorage.removeItem('Email');
    await AsyncStorage.removeItem('Payment');
    signOut();
    scaleAnimation();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabView}>
        <View style={styles.holdPlace} />
        <TabButton
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          title={'Profile'}
          image={ICON_profile}
        />
        <TabButton
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          title={'Orders'}
          image={ICON_buy}
        />
        <TabButton
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          title={'Offer and promo'}
          image={ICON_offer}
        />
        <TabButton
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          title={'Privacy policy'}
          image={ICON_note}
        />
        <TabButton
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          title={'Security'}
          image={ICON_guard}
          line={false}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => onSignOut()}
          style={styles.signOutContainer}>
          <Text style={styles.signOut}>Sign-out</Text>
          <Image source={ICON_arrow} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.shadow} />

      {/* side navigation */}
      <Animated.View
        style={[
          styles.screenContainer(showMenu),
          {
            transform: [{scale: scaleValue}, {translateX: offsetX}],
          },
        ]}>
        {/* Screen*/}
        <DrawnerContext.Provider
          value={{setStatus: status => setStatus(status)}}>
          {props.children}
        </DrawnerContext.Provider>

        {/* Disable screen */}
        {showMenu ? (
          <TouchableOpacity
            style={styles.hideScreen}
            activeOpacity={1}
            onPress={() => setStatus(true)}
          />
        ) : null}

        {/* {state.status ? scaleAnimation() : null} */}
        {status ? scaleAnimation() : null}
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR.vermilion,
  },
  holdPlace: {
    height: scale.scaleHeight(151),
  },
  tabView: {
    flexDirection: 'column',
  },
  signOutContainer: {
    width: scale.scaleWidth(196),
    height: scale.scaleHeight(58),
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: scale.scaleWidth(28),
    marginTop: scale.scaleHeight(26),
    flexDirection: 'row',
    position: 'absolute',
    bottom: scale.scaleHeight(80),
  },
  signOut: {
    fontFamily: font_family.Poppins.semibold,
    fontSize: scale.scaleWidth(17),
    color: COLOR.white,
    paddingRight: scale.scaleWidth(12),
  },
  shadow: {
    width: scale.getCurrentWidth * 0.6,
    height: scale.getCurrentHeight * 0.59,
    borderRadius: scale.scaleWidth(30),
    backgroundColor: COLOR.white,
    marginTop: scale.scaleHeight(210),
    opacity: 0.2,
  },
  screenContainer: showMenu => ({
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
    borderRadius: showMenu ? scale.scaleWidth(30) : 0,
  }),
  menuNavigator: {
    tintColor: COLOR.black,
    position: 'absolute',
    top: 55,
    left: 45,
  },
  menuNavigatorContainer: {
    position: 'absolute',
  },
  hideScreen: {
    position: 'absolute',
    width: scale.getWidth,
    height: scale.getHeight,
  },
});

export default CustomDrawer;
