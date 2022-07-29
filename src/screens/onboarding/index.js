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
import CustomButton from '../../components/CustomButton';
import SCREEN_NAME from '../../constants/screens';
const OnboardingScreen = props => {
  const {navigation} = props;
  const onTransitToLogin = () => {
    navigation.navigate(SCREEN_NAME.LOGIN);
  };
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
          <CustomButton type="primary" onPress={onTransitToLogin}>
            Get Started
          </CustomButton>
        </View>
      </>
    </ScrollView>
  );
};

export default OnboardingScreen;
