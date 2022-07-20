import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import {IMG_Background, IMG_Logo} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import CustomButton from '../../components/CustomButton';

export class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* headerSection */}
        <>
          <View style={styles.headerSection}>
            <Image
              source={IMG_Logo}
              style={styles.logo}
              resizeMode={'contain'}
            />
            <Text style={styles.headerText}>{'Food for \nEveryone'}</Text>
          </View>
        </>

        {/* centerSection */}
        <>
          <View style={styles.centerSection}>
            <ImageBackground
              source={IMG_Background}
              style={styles.centerImage}
              resizeMode={'contain'}>
              <View style={styles.buttonSection}>
                <CustomButton type={'primary'} text={'Get Started'} />
              </View>
            </ImageBackground>
          </View>
        </>

        {/* buttonSection */}
        <></>
      </View>
    );
  }
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  headerSection: {
    marginLeft: scale(49),
    marginTop: scale(56),
  },

  logo: {},

  headerText: {
    marginTop: 30,
    fontSize: scale(65),
    color: CUSTOM_COLOR.White,
    lineHeight: scale(65),
  },

  centerSection: {},

  centerImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: scale(500),
    justifyContent: 'flex-end',
  },

  buttonSection: {},
});
