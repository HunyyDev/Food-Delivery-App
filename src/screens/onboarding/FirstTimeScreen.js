import React, {useCallback, useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  ScrollView,
  View,
} from 'react-native';

import {
  IMG_FIRST_TIME_BACKGROUND,
  IMG_FIRST_TIME_LOGO,
  IMG_LOADING,
} from '../../assets/images';
import SCREEN_NAME from '../../constants/screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FirstTimeScreen = props => {
  const {navigation} = props;

  const fadedAnimation = useRef(new Animated.Value(0)).current;
  const loadingAnimation = useRef(new Animated.Value(0)).current;

  // const DefaultAccount = async () => {
  //   await AsyncStorage.setItem('USERNAME', 'ChimCanhCut');
  //   await AsyncStorage.setItem('PASSWORD', 'ReactNative');
  //   await AsyncStorage.setItem('SIGN_OUT', '1');
  // };

  let check = 1;

  const CheckAccount = async () => {
    const isSignOut = await AsyncStorage.getItem('SIGN_OUT');
    // console.log('isSignOut', isSignOut);
    isSignOut === '1' ? (check = 1) : (check = 0);
  };

  // const isLogin = useCallback(value => CheckAccount(), []);

  useEffect(() => {
    CheckAccount();
    // console.log('check', check);
  }, []);

  useEffect(() => {
    Animated.timing(fadedAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadedAnimation]);

  useEffect(() => {
    Animated.timing(loadingAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start(() =>
      check
        ? navigation.navigate(SCREEN_NAME.ONBOARDING)
        : navigation.navigate(SCREEN_NAME.HOME),
    );
  }, [loadingAnimation, navigation]);

  return (
    <View style={styles.container}>
      <Image source={IMG_FIRST_TIME_BACKGROUND} />
      <View style={styles.mainView}>
        <View style={styles.logoView}>
          <Animated.Image
            style={{opacity: fadedAnimation}}
            source={IMG_FIRST_TIME_LOGO}
          />
          <Animated.View
            style={[
              styles.loadingImage,
              {
                transform: [
                  {translateY: 60},
                  {
                    rotate: loadingAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '720deg'],
                    }),
                  },
                ],
              },
            ]}>
            <Image source={IMG_LOADING} />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  heroImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
  },
  mainView: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingImage: {
    position: 'absolute',
  },
});

export default FirstTimeScreen;
