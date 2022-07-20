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
const OnboardingSreen = () => {
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
            resizeMode={'contain'}>
            {/* <>
              <View style={styles.button}>
                <Text style={styles.buttonComment}>{'Get started'}</Text>
              </View>
            </> */}
          </ImageBackground>
        </View>
      </>
      {/* Button */}
    </ScrollView>
  );
};

export default OnboardingSreen;
