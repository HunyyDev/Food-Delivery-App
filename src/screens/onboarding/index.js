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
import {onboardingStyles} from './styles';
import {IMG_Logo, IMG_Background} from '../../assets/images';
import Custom_Button from '../../components/CustomButton';
const OnboardingScreen = () => {
  return (
    <ScrollView style={onboardingStyles.container}>
      {/* Logo */}
      <>
        <View style={onboardingStyles.logoContainer}>
          <Image
            source={IMG_Logo}
            style={onboardingStyles.logo}
            resizeMode={'contain'}
          />
        </View>
      </>
      {/* Title */}
      <>
        <Text style={onboardingStyles.title}>{'Food for \nEveryone'}</Text>
      </>
      {/* Image */}
      <>
        <View style={onboardingStyles.backgroundContainer}>
          <ImageBackground
            source={IMG_Background}
            style={onboardingStyles.background}
            resizeMode={'contain'}></ImageBackground>
          <Custom_Button type="primary">Get Started</Custom_Button>
        </View>
      </>
    </ScrollView>
  );
};

export default OnboardingScreen;
