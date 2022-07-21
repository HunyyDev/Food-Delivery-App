import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../.././constants/colors';
import {IMG_Background, IMG_Logo} from '../.././assets/images';
import FONT_FAMILY from '../.././constants/fonts';
import scale from '../.././constants/responsive';
import CustomButton from '../.././components/CustomButton';

export default class OnboardingScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />
        </View>

        <Text style={styles.title}>{'Food For \nEveryone'}</Text>

        <View>
          <ImageBackground
            source={IMG_Background}
            style={styles.background}
            resizeMode={'contain'}>
            <View style={styles.button}>
              <CustomButton
                onPress={() => navigation.navigate('Login')}
                text={'Get started'}
                type="primary"
              />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  logoContainer: {
    width: scale(74),
    height: scale(74),
    borderRadius: 37,
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(50),
    top: scale(25),
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 60,
    fontFamily: FONT_FAMILY.SF_Pro_Text,
    color: CUSTOM_COLOR.White,
    marginLeft: scale(50),
    top: scale(40),
  },

  background: {
    width: Dimensions.get('window').width,
    height: scale(480),
    justifyContent: 'flex-end',
  },

  button: {
    backgroundColor: CUSTOM_COLOR.White,
    width: scale(314),
    height: scale(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
  },
  textInButton: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonContainer: {
    paddingVertical: scale(22),
    paddingHorizontal: scale(100),
  },
});
