import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_Logo, IMG_Background} from '../../assets/images';
import FONT_FAMILY from '../../constants/fonts';

const OnboardingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <>
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />
        </View>
      </>
      {/* Title */}
      <>
        <Text style={styles.title}>{'Food for \nEveryone'}</Text>
      </>
      {/* Image */}
      <>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            source={IMG_Background}
            style={styles.background}
            resizeMode={'contain'}>
            <>
              <View style={styles.button}>
                <Text>{'Get started'}</Text>
              </View>
            </>
          </ImageBackground>
        </View>
      </>
      {/* Button */}
    </ScrollView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetColor,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    backgroundColor: CUSTOM_COLOR.white,
    overflow: 'hidden',
    marginTop: 6,
    marginLeft: 40,
  },
  title: {
    fontSize: 41,
    fontFamily: FONT_FAMILY.Regular,
    color: CUSTOM_COLOR.white,
    marginLeft: 40,
  },
  backgroundContainer: {},
  background: {
    width: Dimensions.get('window').width,
    height: 540,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: CUSTOM_COLOR.white,
    height: 70,
    width: 314,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
