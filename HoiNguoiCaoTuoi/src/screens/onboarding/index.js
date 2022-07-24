import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_Logo, IMG_Background} from '../../assets/images';
import FONT_FAMILY from '../../constants/fonts';
import {scaleWidth} from '../../constants/responsive';
import CustomButton from '../../components/CustomButton';

class OnboardingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
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
          <Text style={styles.titleText}>{'Food for \nEveryone'}</Text>
        </>

        {/* Image */}
        <>
          <View style={styles.backgroundContainer}>
            <ImageBackground
              source={IMG_Background}
              style={styles.background}
              resizeMode={'contain'}>
              <View style={styles.button}>
                <CustomButton
                  type={'primary'}
                  text={'Get started'}
                  onPress={() => this.props.navigation.navigate('Login')}
                />
              </View>
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
    alignSelf: 'stretch',
    marginTop: 0,
  },

  logoContainer: {
    width: scaleWidth(74),
    height: scaleWidth(74),
    borderRadius: scaleWidth(74) / 2,
    backgroundColor: CUSTOM_COLOR.Bold,
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
    fontSize: scaleWidth(65),
    fontFamily: FONT_FAMILY.SFPro,
    color: CUSTOM_COLOR.White,
    marginLeft: scaleWidth(49),
    fontWeight: 'bold',
  },

  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  background: {
    width: Dimensions.get('window').width,
    height: 430,
    justifyContent: 'flex-end',
  },

  button: {},

  text: {
    fontSize: scaleWidth(17),
    fontFamily: FONT_FAMILY.ExtraBold,
    color: CUSTOM_COLOR.SunsetOrange,
  },
});

export default OnboardingScreen;
