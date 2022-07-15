import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from './src/constant/color';
import {IMG_Background, IMG_Logo} from './src/assets/images';
import FONT_FAMILY from './src/constant/font';

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* logo */}
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} />
        </View>
        {/* title */}
        <Text style={styles.title}>{'Food for \n Evryone'}</Text>
        {/* image */}
        <View style={styles.backgroundContainer}>
          <Image
            source={IMG_Background}
            style={styles.background}
            resizeMode={'contain'}
          />
        </View>
        {/* button */}
        <View style={styles.buttonContainer}>
          <Text style={styles.textButton}>{'Get Started'}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  logoContainer: {
    width: 73,
    height: 74,
    borderRadius: 37,
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  background: {},
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 65,
    color: CUSTOM_COLOR.White,
    marginLeft: 50,
    fontFamily: FONT_FAMILY.Black,
  },
  buttonContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    width: 314,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
  },
  textButton: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: 20,
  },
});
