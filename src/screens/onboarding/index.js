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
    </ScrollView>
  );
};

<<<<<<< HEAD
export default OnBoardingScreen;
=======
export default OnboardingScreen;
>>>>>>> ChimCanhCut/dev_khangnt
