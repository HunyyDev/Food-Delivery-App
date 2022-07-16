import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from './src/constants/colors';
import {IMG_Logo, IMG_Background} from './src/assets/images';
import FONT_FAMILY from './src/constants/fonts';
import {scaleWidth} from './src/constants/reponsive';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <>
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />
        </View>
      </>

      {/* Title */}
      <>
        <Text style={styles.titleText}>{'Food for \nEveryone'}</Text>
      </>

      {/* Image */}
      <>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            source={IMG_Background}
            style={styles.background}
            resizeMode={'contain'}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>{'Get started'}</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    alignSelf: 'stretch',
    marginTop: 0,
  },

  logoContainer: {
    width: scaleWidth(74),
    height: scaleWidth(74),
    borderRadius: scaleWidth(74) / 2,
    // top: scaleWidth(56),
    backgroundColor: CUSTOM_COLOR.Bold,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scaleWidth(49),
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  titleText: {
    fontSize: scaleWidth(65),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.white,
    marginLeft: scaleWidth(49),
    fontWeight: 'bold',
  },

  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  background: {
    width: Dimensions.get('window').width,
    height: 430,
    justifyContent: 'flex-end',
  },

  button: {
    backgroundColor: CUSTOM_COLOR.white,
    height: scaleWidth(60),
    width: scaleWidth(300),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  text: {
    fontSize: scaleWidth(17),
    fontFamily: FONT_FAMILY.ExtraBold,
    color: CUSTOM_COLOR.SunsetOrange,
  },
});

export default App;
