/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  onPress,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_Background, IMG_Logo} from '../../assets/images';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/scales';
import CustomInput from '../../constants/inputs';
import CustomButton from '../../constants/buttons';
import LoginScreen from '../auth';

const OnboardingScreen = ({navigation}) => {
  const titleText = 'Food for Everyone';
  const textButton = 'Get started';

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Logo */}
      <>
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />
        </View>
      </>

      {/* Title */}
      <>
        <Text style={styles.title}>{titleText}</Text>
      </>

      {/* Image */}
      <>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            source={IMG_Background}
            style={styles.background}
            resizeMode={'contain'}>
            <>
              <CustomButton
                titleButton={textButton}
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
              />
            </>
          </ImageBackground>
        </View>
      </>
      {/* Button */}
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  logoContainer: {
    top: scale(56),
    width: scale(74),
    height: scale(74),
    borderRadius: 37,
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(50),
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  title: {
    marginTop: scale(31),
    fontSize: 65,
    fontFamily: FONT_FAMILY.SFProRounded_Heavy,
    color: CUSTOM_COLOR.White,
    marginLeft: scale(50),
  },

  backgroundContainer: {},

  background: {
    width: Dimensions.get('window').width,
    height: scale(540),
    justifyContent: 'flex-end',
    marginTop: scale(-80),
  },
});
