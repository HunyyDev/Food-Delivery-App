import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constant/color';
import {IMG_Background, IMG_Logo} from '../../assets/images';
import FONT_FAMILY from '../../constant/font';
import CustomButton from '../../Components/CustomButton';

export default function OnBoardingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} edges={['top', 'bottom']}>
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
        <View style={styles.button}>
          <CustomButton
            label={'Get Started'}
            navigation={navigation}></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 65,
    color: CUSTOM_COLOR.White,
    marginLeft: 50,
    fontFamily: FONT_FAMILY.Black_Sf,
  },
  button: {
    width: 314,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
