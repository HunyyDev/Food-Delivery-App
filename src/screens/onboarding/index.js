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
    </ScrollView>
  );
};

export default OnBoardingScreen;
