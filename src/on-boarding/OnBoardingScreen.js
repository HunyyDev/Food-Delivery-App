import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
import {IMG_Background, IMG_Logo} from '../assets/images/index';
import FONT_FAMILY from '../constants/fonts';
import scaleWidth from '../responsive/ScaleWidth';
import scaleHeight from '../responsive/ScaleHeight';
import CustomButton from '../components/CustomButton';

class OnBoardingScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* Logo */}
        <>
          <View style={styles.logoContainer}>
            <Image
              source={IMG_Logo}
              style={styles.logo}
              resizeMode={'contain'}
            />
          </View>
        </>
        {/* Title */}
        <>
          <Text style={styles.title}>{'Food for \nEveryone'}</Text>
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
                  type="primary"
                  text="Get Started"
                  onPress={() => this.props.navigation.navigate('Login')}
                />
              </>
            </ImageBackground>
          </View>
        </>
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
    width: scaleWidth(74),
    height: scaleHeight(74),
    borderRadius: scaleWidth(74) / 2,
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scaleHeight(50),
    marginTop: scaleWidth(56),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: scaleWidth(50),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.White,
    marginLeft: scaleWidth(50),
  },
  backgroundContainer: {},
  background: {
    width: '100%',
    height: scaleHeight(540),
    justifyContent: 'flex-end',
  },
});

export default OnBoardingScreen;
