import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {IMG_Logo, IMG_Background} from '../../assets/images/images';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import CustomButton from '../../constants/custombutton';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />
      </View>
      <>
        <Text style={styles.title}>{'Food for \nEveryone'}</Text>
      </>
      <ImageBackground
        style={styles.background}
        source={IMG_Background}
        resizeMode={'contain'}>
        <CustomButton type={'primary'} text={'Get started'} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  logoContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    width: scale(74),
    height: scale(74),
    borderRadius: scale(74) / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(49),
    marginLeft: scale(49),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 65,
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.Black,
    marginLeft: scale(49),
    lineHeight: 65,
    letterSpacing: -0.5,
  },
  backgroundContainer: {
    justifyContent: 'center',
  },
  background: {
    width: Dimensions.get('window').width,
    height: scaleHeight(600),
    justifyContent: 'flex-end',
  },
});

export default OnboardingScreen;
