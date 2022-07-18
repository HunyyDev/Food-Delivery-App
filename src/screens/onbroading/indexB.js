import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  useColorScheme,
  Image,
} from 'react-native';
import React from 'react';
import type {Node} from 'react';
import {IMG_Logo} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';

const index = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={IMG_Logo} resizeMode={'contain'} />
        </View>
      </>
      <>
        <View style={styles.loginContainer}>
          <>
            <Text style={styles.headlines}>{'Email Address'}</Text>
          </>
          <>
            <TextInput style={styles.input} />
          </>
        </View>
      </>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  logoContainer: {
    width: '100%',
    height: '42.63%',
    //borderRadius: 37,
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15,
  },
});
