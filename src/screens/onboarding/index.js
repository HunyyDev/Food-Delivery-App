<<<<<<< HEAD
import React from 'react';

import {Image, ScrollView, Text} from 'react-native';

import LargeButton from '../../components/LargeButton';

import {IMG_BACKGROUND, IMG_LOGO} from '../../assets/images';

import LINKS from '../../constants/links';

import styles from './styles';

const OnBoardingScreen = props => {
  const {navigation} = props;

  return (
    <ScrollView style={styles.background}>
      <Image style={styles.logo} source={IMG_LOGO} />
      <Text style={styles.header}>Food for Everyone</Text>
      <Image style={styles.heroImage} source={IMG_BACKGROUND} />
      <LargeButton
        onPress={() => navigation.navigate(LINKS.AUTHENTICATION)}
        type={'primary'}>
        Get started
      </LargeButton>
=======
import {Text, View, Image, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import {IMG_Background, IMG_Logo} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const OnboardingScreen = props => {
  return (
    <ScrollView style={styles.container}>
      <>
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />
        </View>
      </>
      <>
        <Text style={styles.title}>Food for{'\n'}Everyone</Text>
      </>
      <>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            source={IMG_Background}
            style={styles.background}
            resizeMode={'contain'}>
            <CustomButton
              label={'primary'}
              text={'Get started'}
              onPress={() => props.navigation.navigate('Login')}
            />
          </ImageBackground>
        </View>
      </>
>>>>>>> ChimCanhCut/dev_khangnt
    </ScrollView>
  );
};

<<<<<<< HEAD
export default OnBoardingScreen;
=======
export default OnboardingScreen;
>>>>>>> ChimCanhCut/dev_khangnt
