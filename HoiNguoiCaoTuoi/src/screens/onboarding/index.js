import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IMG_Background, IMG_Logo} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {scaleWidth} from '../../constants/responsive';

const OnboardingScreen = ({navigation}) => (
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
          <View style={{margin:30}}>
            <CustomButton
              type={'primary'}
              text={'Get started'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  logoContainer: {
    width: scaleWidth(74),
    height: scaleWidth(74),
    borderRadius: scaleWidth(74) / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleWidth(56),
    marginLeft: scaleWidth(49),
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  titleText: {
    fontSize: scaleWidth(55),
    fontFamily: FONT_FAMILY.ExtraBold,
    color: CUSTOM_COLOR.White,
    marginLeft: scaleWidth(49),
    marginVertical: 30,
  },

  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  background: {
    width: Dimensions.get('window').width,
    height: 430,
    justifyContent: 'flex-end',
  },

  text: {
    fontSize: scaleWidth(17),
    fontFamily: FONT_FAMILY.ExtraBold,
    color: CUSTOM_COLOR.SunsetOrange,
  },
});
export default OnboardingScreen;
